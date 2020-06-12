package com.mang.example.security.app.user.repository;

import com.mang.example.security.app.user.model.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <UserVO, Long> {

    UserVO findByUserEmailAndUserPw(String userId, String userPw);

    Optional<UserVO> findByUserEmail(String userEmail);
}
