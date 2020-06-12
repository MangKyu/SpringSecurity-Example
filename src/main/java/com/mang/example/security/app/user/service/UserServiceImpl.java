package com.mang.example.security.app.user.service;

import com.mang.example.security.app.user.model.UserVO;
import com.mang.example.security.app.user.repository.UserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service("userService")
public class UserServiceImpl implements UserService {

    @NonNull
    private UserRepository userRepository;

    @Override
    public UserVO login(UserVO userVO) {
        return userRepository.findByUserEmailAndUserPw(userVO.getUserEmail(), userVO.getUserPw());
    }

    @Override
    public UserVO createUser(UserVO userVO) {
        return userRepository.save(userVO);
    }

    @Override
    public UserVO findUserByUserEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail).get();
    }
}
