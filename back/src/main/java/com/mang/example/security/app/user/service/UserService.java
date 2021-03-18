package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.dto.SignUpDTO;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User signUp(final SignUpDTO signUpDTO);

    Optional<User> findByEmail(final String email);

    List<User> findAll();

}
