package taskflowmanager.taskflowmanager.security.oauth2.user;

import lombok.Data;
import lombok.Getter;

import java.util.Map;

@Getter
public abstract class OAuth2UserInfo {

    protected Map<String, Object> attributes;

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public abstract String getEmail();

    public abstract String getId();

    public abstract String getName();

    public abstract String getImageUrl();
}
