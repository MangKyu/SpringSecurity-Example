package com.mang.example.security.app.user.controller;

import com.mang.example.security.app.user.model.UserVO;
import com.mang.example.security.app.user.service.UserService;
import com.mang.example.security.enums.role.UserRole;
import com.mang.example.security.utils.TokenUtils;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
@Log4j2
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    @Autowired
    private TokenUtils tokenUtils;

    @NonNull
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping(value = "/init")
    public ResponseEntity createAdmin(@ModelAttribute UserVO userVO){
        userVO.setUserEmail("admin@naver.com");
        userVO.setUserPw(passwordEncoder.encode("test"));
        userVO.setRole(UserRole.ADMIN);
        if(userService.createUser(userVO) == null){
            log.error("Create Admin Error");
        }
        return ResponseEntity.ok().build();
    }

}
