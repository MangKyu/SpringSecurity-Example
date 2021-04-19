package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.dto.SignUpDTO;
import com.mang.example.security.app.user.repository.UserRepository;
import com.mang.example.security.enums.role.UserRole;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Spy
    private BCryptPasswordEncoder passwordEncoder;

    @DisplayName("회원 가입")
    @Test
    void signUp() {
        // given
        final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        final SignUpDTO signUpDTO = signUpDTO();
        final String encryptedPw = encoder.encode(signUpDTO.getPw());

        // when
        doReturn(new User(signUpDTO.getEmail(), encryptedPw, UserRole.ROLE_USER)).when(userRepository).save(any(User.class));
        final User user = userService.signUp(signUpDTO);

        // then
        assertThat(user.getEmail()).isEqualTo(signUpDTO.getEmail());
        assertThat(encoder.matches(signUpDTO.getPw(), user.getPw())).isTrue();

        // verify
        verify(userRepository, times(1)).save(any(User.class));
        verify(passwordEncoder, times(1)).encode(any(String.class));
    }

    @DisplayName("이메일 중복 여부")
    @Test
    void isEmailDuplicated() {
        // given
        final SignUpDTO signUpDTO = signUpDTO();
        doReturn(true).when(userRepository).existsByEmail(signUpDTO.getEmail());

        // when
        final boolean isDuplicated = userService.isEmailDuplicated(signUpDTO.getEmail());

        // then
        assertThat(isDuplicated).isTrue();
    }

    @DisplayName("사용자 목록 조회")
    @Test
    void findAll() {
        // given
        doReturn(userList()).when(userRepository).findAll();

        // when
        final List<User> userList = userService.findAll();

        // then
        assertThat(userList.size()).isEqualTo(5);
    }

    private SignUpDTO signUpDTO() {
        final SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setEmail("test@test.test");
        signUpDTO.setPw("test");
        return signUpDTO;
    }

    private List<User> userList() {
        final List<User> userList = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            userList.add(new User("test@test.test", "test", UserRole.ROLE_USER));
        }
        return userList;
    }

}