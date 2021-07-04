package com.mang.example.security.app.user.repository;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.enums.role.UserRole;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@ExtendWith(SpringExtension.class)
@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    void findByEmailAndPw() {
        final User user = User.builder()
                .email("email")
                .pw("pw")
                .role(UserRole.ROLE_USER).build();
        userRepository.save(user);

        assertThat(userRepository.findAll().size()).isEqualTo(1);
    }

}