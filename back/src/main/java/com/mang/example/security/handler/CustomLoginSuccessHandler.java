package com.mang.example.security.handler;

import com.mang.example.security.app.user.model.UserDetailsVO;
import com.mang.example.security.app.user.model.UserVO;
import com.mang.example.security.constants.AuthConstants;
import com.mang.example.security.utils.TokenUtils;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Log4j2
public class CustomLoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) {
        UserVO userVO = ((UserDetailsVO) authentication.getPrincipal()).getUserVO();
        String token = TokenUtils.generateJwtToken(userVO);
        response.addHeader(AuthConstants.AUTH_HEADER, AuthConstants.TOKEN_TYPE + " " + token);
    }

}