package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.model.UserVO;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserVO signUp(UserVO userVO);

    Optional<UserVO> findByEmail(String userEmail);

    List<UserVO> findAll();

}
