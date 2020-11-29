package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.domain.MyUserDetails;
import com.mang.example.security.app.user.repository.UserRepository;
import com.mang.example.security.exception.UserNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

@AllArgsConstructor
@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;

    @Override
    public MyUserDetails loadUserByUsername(String userEmail) {
        return userRepository.findByUserEmail(userEmail).map(u -> new MyUserDetails(u, Collections.singleton(new SimpleGrantedAuthority(u.getRole().getValue())))).orElseThrow(() -> new UserNotFoundException(userEmail));
    }
}
