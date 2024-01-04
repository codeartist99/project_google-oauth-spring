package taskflowmanager.taskflowmanager.security.oauth2;

import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import taskflowmanager.taskflowmanager.exception.OAuth2AuthenticationProcessingExeption;
import taskflowmanager.taskflowmanager.model.User;
import taskflowmanager.taskflowmanager.security.oauth2.user.OAuth2UserInfo;

public interface CustomOAuth2UserService {

    OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) throws OAuth2AuthenticationProcessingExeption;

    User registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo);

    User updateExistingUser(User existingUser, OAuth2UserInfo oAuth2UserInfo);
}

