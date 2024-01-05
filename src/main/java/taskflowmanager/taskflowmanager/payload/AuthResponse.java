package taskflowmanager.taskflowmanager.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponse {
    private String accessToken;
    private String tokenType;

    public AuthResponse(String accessToken) {
        this.accessToken = accessToken;
    }
}
