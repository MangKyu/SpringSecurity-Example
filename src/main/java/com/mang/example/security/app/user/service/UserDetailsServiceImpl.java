package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.model.UserDetailsVO;
import com.mang.example.security.app.user.repository.UserRepository;
import com.mang.example.security.exception.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetailsVO loadUserByUsername(String userEmail) {
        return userRepository.findByUserEmail(userEmail).map(u -> new UserDetailsVO(u, Collections.singleton(new SimpleGrantedAuthority(u.getRole().getValue())))).orElseThrow(() -> new UserNotFoundException(userEmail));
    }
}
