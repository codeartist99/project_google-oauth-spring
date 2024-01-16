package taskflowmanager.taskflowmanager.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import taskflowmanager.taskflowmanager.user.repository.UserRepository;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    void jpaRepoTest() {
        System.out.println(userRepository.findByEmail("ysw991106@gmail.com"));
        System.out.println(userRepository.existsByEmail("ysw991106@gmail.com"));

    }

}