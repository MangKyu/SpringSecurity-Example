package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.model.UserVO;

public interface UserService {

    UserVO login(UserVO userVO);

    UserVO createUser(UserVO userVO);

    UserVO findUserByUserEmail(String userEmail);

}
