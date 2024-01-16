package taskflowmanager.taskflowmanager.auth.data.factory;

import taskflowmanager.taskflowmanager.auth.data.user.userInfo.impl.GoogleOAuth2UserInfo;
import taskflowmanager.taskflowmanager.auth.data.user.userInfo.OAuth2UserInfo;
import taskflowmanager.taskflowmanager.exception.OAuth2AuthenticationProcessingExeption;
import taskflowmanager.taskflowmanager.auth.data.enums.AuthProviderType;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if (registrationId.equalsIgnoreCase(AuthProviderType.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingExeption("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}