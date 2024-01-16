package taskflowmanager.taskflowmanager.auth.security;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import taskflowmanager.taskflowmanager.auth.data.repository.HttpCookieOAuth2AuthorizationRequestRepository;
import taskflowmanager.taskflowmanager.auth.security.TokenProvider;
import taskflowmanager.taskflowmanager.config.AppProperties;
import taskflowmanager.taskflowmanager.exception.BadRequsetException;
import taskflowmanager.taskflowmanager.auth.util.CookieUtils;

import java.io.IOException;
import java.net.URI;
import java.util.Optional;

import static taskflowmanager.taskflowmanager.auth.data.repository.HttpCookieOAuth2AuthorizationRequestRepository.REDIRECT_URI_PARAM_COOKIE_NAME;

@Component
public class OAuth2AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private TokenProvider TokenProvider;

    private AppProperties appProperties;

    private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;

    @Autowired
    public OAuth2AuthenticationSuccessHandler(TokenProvider TokenProvider, AppProperties appProperties, HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository) {
//        System.out.println("==================================[LOG] OAuth2AuthenticationSuccessHandler.OAuth2AuthenticationSuccessHandler");
        this.TokenProvider = TokenProvider;
        this.appProperties = appProperties;
        this.httpCookieOAuth2AuthorizationRequestRepository = httpCookieOAuth2AuthorizationRequestRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
//        System.out.println("==================================[LOG] OAuth2AuthenticationSuccessHandler.onAuthenticationSuccess");
        String targetUrl = determineTargetUrl(request, response, authentication);

        if (response.isCommitted()) {
            logger.debug("Response has already been committed. Unable to redirect to " + targetUrl);
            return;
        }

        clearAuthenticationAttributes(request, response);
        getRedirectStrategy().sendRedirect(request, response, targetUrl);
    }

    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
//        System.out.println("==================================[LOG] OAuth2AuthenticationSuccessHandler.determineTargetUrl");
        Optional<String> redirectUri = CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                .map(Cookie::getValue);

        if (redirectUri.isPresent() && !isAuthorizedRedirectUri(redirectUri.get())) {
            throw new BadRequsetException("Sorry! We've got an Unauthorized Redirect URI and can't proceed with authentication");
        }

        String targetUrl = redirectUri.orElse(getDefaultTargetUrl());

        String token = TokenProvider.createToken(authentication);

        return UriComponentsBuilder.fromUriString(targetUrl)
                .queryParam("token", token)
                .build().toUriString();
    }

    private boolean isAuthorizedRedirectUri(String uri) {
//        System.out.println("==================================[LOG] OAuth2AuthenticationSuccessHandler.isAuthorizedRedirectUri");
        URI clientRedirectUri = URI.create(uri);

        return appProperties.getOAuth2().getAuthorizedRedirectUris()
                .stream()
                .anyMatch(authorizedRedirectUri -> {
                    URI authorizedURI = URI.create(authorizedRedirectUri);
                    return authorizedURI.getHost().equalsIgnoreCase(clientRedirectUri.getHost())
                            && authorizedURI.getPort() == clientRedirectUri.getPort();
                });
    }

    protected void clearAuthenticationAttributes(HttpServletRequest request, HttpServletResponse response) {
//        System.out.println("==================================[LOG] OAuth2AuthenticationSuccessHandler.clearAuthenticationAttributes");
        super.clearAuthenticationAttributes(request);
        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequestCookies(request, response);
    }
}
