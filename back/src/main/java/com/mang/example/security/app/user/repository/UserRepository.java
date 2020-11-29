package com.mang.example.security.app.user.repository;

import com.mang.example.security.app.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {

    User findByUserEmailAndUserPw(String userId, String userPw);

    Optional<User> findByUserEmail(String userEmail);
}
