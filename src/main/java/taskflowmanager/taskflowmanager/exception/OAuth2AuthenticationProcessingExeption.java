package taskflowmanager.taskflowmanager.exception;

public class OAuth2AuthenticationProcessingExeption extends Throwable {
    public OAuth2AuthenticationProcessingExeption(String msg, Throwable t) {
        super(msg, t);
    }

    public OAuth2AuthenticationProcessingExeption(String msg) {
        super(msg);
    }
}
