package com.mang.example.security.app.user.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.Delegate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@AllArgsConstructor
@Getter
public class MyUserDetails implements UserDetails {

    @Delegate
    private User user;
    private Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getUserPw();
    }

    @Override
    public String getUsername() {
        return user.getUserEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return user.getIsEnable();
    }

    @Override
    public boolean isAccountNonLocked() {
        return user.getIsEnable();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return user.getIsEnable();
    }

    @Override
    public boolean isEnabled() {
        return user.getIsEnable();
    }
}
