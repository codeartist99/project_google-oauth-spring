package taskflowmanager.taskflowmanager.security;

import org.springframework.security.oauth2.core.user.OAuth2User;
import taskflowmanager.taskflowmanager.model.User;

import java.util.Map;

public class UserPrincipal {
    public static OAuth2User create(User user, Map<String, Object> attributes) {
    }
}
