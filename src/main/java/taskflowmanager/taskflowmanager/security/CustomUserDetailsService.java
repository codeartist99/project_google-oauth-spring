package taskflowmanager.taskflowmanager.security;

import org.springframework.security.core.userdetails.UserDetails;

public interface CustomUserDetailsService {

    UserDetails loadUserByUsername(String email);

    UserDetails loadUserbyId(Long id);
}
