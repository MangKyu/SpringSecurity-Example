package com.mang.example.security.app.user.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Delegate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@RequiredArgsConstructor
@Getter
public class UserDetailsVO implements UserDetails {

    @Delegate
    private final UserVO userVO;
    private final Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return userVO.getUserPw();
    }

    @Override
    public String getUsername() {
        return userVO.getUserEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return userVO.getIsEnable();
    }

    @Override
    public boolean isAccountNonLocked() {
        return userVO.getIsEnable();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return userVO.getIsEnable();
    }

    @Override
    public boolean isEnabled() {
        return userVO.getIsEnable();
    }
}
