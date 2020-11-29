package com.mang.example.security.app.user.controller;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.service.UserService;
import com.mang.example.security.enums.role.UserRole;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/user")
@Log4j2
public class UserController {

    private BCryptPasswordEncoder passwordEncoder;
    private UserService userService;

    @PostMapping(value = "signUp")
    public ResponseEntity signUp(@RequestBody User user) {
        // 사용자의 이메일이 이미 존재하는 경우 예외를 발생시키고, 없을 경우 비밀번호를 암호화한다.
        if (!userService.findByEmail(user.getUserEmail()).isPresent()) {
            user.setUserPw(passwordEncoder.encode(user.getUserPw()));
            user.setRole(UserRole.USER);
            userService.signUp(user);
            log.debug("Sign Up Complete");
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @GetMapping(value = "/findAll")
    public ResponseEntity findAll() {
        return ResponseEntity.ok(userService.findAll());
    }

}
