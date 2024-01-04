package taskflowmanager.taskflowmanager.security.oauth2.user;

import lombok.Data;
import lombok.Getter;

@Getter
public abstract class OAuth2UserInfo {

    private String email;

    private String id;

    private String Name;

    private String ImageUrl;

}
