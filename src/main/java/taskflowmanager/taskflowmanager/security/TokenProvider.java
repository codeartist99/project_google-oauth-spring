package taskflowmanager.taskflowmanager.security;


import org.springframework.security.core.Authentication;

public interface TokenProvider {
    String createToken(Authentication authentication);
}
