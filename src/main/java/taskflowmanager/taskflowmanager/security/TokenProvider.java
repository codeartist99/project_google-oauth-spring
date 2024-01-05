package taskflowmanager.taskflowmanager.security;


import org.springframework.security.core.Authentication;

public interface TokenProvider {
    String createToken(Authentication authentication);

    Long getUserIdFromToken(String token);

    boolean validationToken(String authToken);
}
