package taskflowmanager.taskflowmanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequsetException extends RuntimeException {
    public BadRequsetException(String msg) {
        super(msg);
    }
}
