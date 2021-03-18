package com.mang.example.security.app.user.dto;

import com.mang.example.security.app.user.domain.User;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class UserListResponseDTO {

    private final List<User> userList;

}
