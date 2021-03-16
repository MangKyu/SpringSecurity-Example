package com.mang.example.security.app.user.controller;

import com.mang.example.security.app.user.domain.User;
import com.mang.example.security.app.user.service.UserService;
import com.mang.example.security.enums.role.UserRole;
import com.mang.example.security.utils.TokenUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/user")
@Log4j2
public class UserController {

    private final BCryptPasswordEncoder passwordEncoder;
    private final UserService userService;

    @PostMapping(value = "/signUp")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        user.setRole(UserRole.ROLE_USER);
        user.setPw(passwordEncoder.encode(user.getPw()));
        return userService.findByEmail(user.getEmail()).isPresent()
                ? ResponseEntity.badRequest().build()
                : ResponseEntity.ok(TokenUtils.generateJwtToken(userService.signUp(user)));
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userService.findAll());
    }

}
