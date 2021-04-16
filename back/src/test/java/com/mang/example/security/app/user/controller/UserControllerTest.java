package com.mang.example.security.app.user.controller;

import com.google.gson.Gson;
import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.dto.SignUpDTO;
import com.mang.example.security.app.user.dto.UserListResponseDTO;
import com.mang.example.security.app.user.service.UserService;
import com.mang.example.security.enums.role.UserRole;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    private MockMvc mockMvc;

    @BeforeEach
    public void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @DisplayName("회원 가입 성공")
    @Test
    void signUpSuccess() throws Exception {
        // given
        final SignUpDTO signUpDTO = signUpDTO();
        doReturn(false).when(userService).isEmailDuplicated(signUpDTO.getEmail());
        doReturn(new User("a", "b", UserRole.ROLE_USER)).when(userService).signUp(any(SignUpDTO.class));

        // when
        final ResultActions resultActions = mockMvc.perform(
                MockMvcRequestBuilders.post("/user/signUp")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(signUpDTO))
        );

        // then
        final MvcResult mvcResult = resultActions.andExpect(status().isOk()).andReturn();
        final String token = mvcResult.getResponse().getContentAsString();
        assertThat(token).isNotNull();
    }

    @DisplayName("이메일이 중복되어 회원 가입 실패")
    @Test
    void signUpFailByDuplicatedEmail() throws Exception {
        // given
        final SignUpDTO signUpDTO = signUpDTO();
        doReturn(true).when(userService).isEmailDuplicated(signUpDTO.getEmail());

        // when
        final ResultActions resultActions = mockMvc.perform(
                MockMvcRequestBuilders.post("/user/signUp")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new Gson().toJson(signUpDTO))
        );

        // then
        resultActions.andExpect(status().isBadRequest());
    }

    @DisplayName("사용자 목록 조회")
    @Test
    void getUserList() throws Exception {
        // given
        doReturn(userList()).when(userService).findAll();

        // when
        final ResultActions resultActions = mockMvc.perform(
                MockMvcRequestBuilders.get("/user/list")
        );

        // then
        final MvcResult mvcResult = resultActions.andExpect(status().isOk()).andReturn();
        final UserListResponseDTO response = new Gson().fromJson(mvcResult.getResponse().getContentAsString(), UserListResponseDTO.class);
        assertThat(response.getUserList().size()).isEqualTo(5);
    }

    private List<User> userList() {
        final List<User> userList = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            userList.add(new User("test@test.test", "test", UserRole.ROLE_USER));
        }
        return userList;
    }

    private SignUpDTO signUpDTO() {
        final SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setEmail("test@test.test");
        signUpDTO.setPw("test");
        return signUpDTO;
    }

}