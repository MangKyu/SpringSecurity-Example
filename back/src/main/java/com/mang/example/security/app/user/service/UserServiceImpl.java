package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.repository.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service("userService")
public class UserServiceImpl implements UserService {

    @NonNull
    private UserRepository userRepository;

    @Override
    public User signUp(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }
}
