package taskflowmanager.taskflowmanager.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import taskflowmanager.taskflowmanager.security.CustomUserDetailsService;
import taskflowmanager.taskflowmanager.security.oauth2.CustomOAuth2UserService;
import taskflowmanager.taskflowmanager.security.oauth2.HttpCookieOAuth2AuthorizationRequestRepository;
import taskflowmanager.taskflowmanager.security.oauth2.OAuth2AuthenticationFailureHandler;
import taskflowmanager.taskflowmanager.security.oauth2.OAuth2AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(
        securedEnabled = true,
        jsr250Enabled = true,
        prePostEnabled = true
)
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private CustomOAuth2UserService customOAuth2UserService;

    @Autowired
    private OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    @Autowired
    private OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    @Autowired
    private HttpCookieOAuth2AuthorizationRequestRepository httpCookieOAuth2AuthorizationRequestRepository;



}
