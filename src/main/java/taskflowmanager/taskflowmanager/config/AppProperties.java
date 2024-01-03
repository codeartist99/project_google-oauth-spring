package taskflowmanager.taskflowmanager.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.List;

@Getter
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private final Auth auth = new Auth();
    private final OAuth2 oAuth2 = new OAuth2();

    @Getter
    @Setter
    public static class Auth {
        private String tokenSecret;
        private long tekenExpirationMsec;
    }

    @Getter
    @Setter
    public static final class OAuth2 {
        private List<String> autorizedRedirectionUris = new ArrayList<>();
    }


}
