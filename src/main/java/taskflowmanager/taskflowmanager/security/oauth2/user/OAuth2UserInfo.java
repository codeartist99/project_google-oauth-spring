package taskflowmanager.taskflowmanager.security.oauth2.user;

import lombok.Data;
import lombok.Getter;

import java.util.Map;

@Getter
public abstract class OAuth2UserInfo {

    protected Map<String, Object> attributes;

    private String email;

    private String id;

    private String Name;

    private String ImageUrl;

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }
}
