package taskflowmanager.taskflowmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import taskflowmanager.taskflowmanager.exception.ResourceNotFoundException;
import taskflowmanager.taskflowmanager.model.User;
import taskflowmanager.taskflowmanager.repository.UserRepository;
import taskflowmanager.taskflowmanager.security.CurrentUser;
import taskflowmanager.taskflowmanager.security.UserPrincipal;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId()).orElseThrow(() ->
                new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

}
