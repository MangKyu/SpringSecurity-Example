package com.mang.example.security.app.user.model;

import com.mang.example.security.app.common.model.CommonVO;
import com.mang.example.security.enums.role.UserRole;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "USER")
@Getter
public class UserVO extends CommonVO implements Serializable {

    @Column(nullable = false, unique = true, length = 50)
    private String userEmail;

    @Setter
    @Column(nullable = false)
    private String userPw;

    @Setter
    @Column(nullable = false, length = 50)
    @Enumerated(EnumType.STRING)
    private UserRole role;

}
