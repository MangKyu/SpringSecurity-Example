package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User signUp(final User user);

    Optional<User> findByEmail(final String email);

    List<User> findAll();

}
