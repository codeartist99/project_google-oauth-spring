package taskflowmanager.taskflowmanager.security;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import taskflowmanager.taskflowmanager.exception.ResourceNotFoundException;
import taskflowmanager.taskflowmanager.model.User;
import taskflowmanager.taskflowmanager.repository.UserRepository;

@Service
public class CutomUserDetailsServiceImpl implements UserDetailsService, CustomUserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                new UsernameNotFoundException("User not found with email : " + email));
        return UserPrincipal.create(user);
    }

    @Override
    @Transactional
    public UserDetails loadUserbyId(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("User", "id", id)
        );
        return UserPrincipal.create(user);
    }

}
