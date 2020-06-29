# Spring Security 처리 과정
1. 사용자가 아이디 비밀번호로 로그인을 요청함
2. AuthenticationFilter에서 UsernamePasswordAuthenticationToken을 생성하여 AuthenticaionManager에게 전달
3. AuthenticaionManager는 등록된 AuthenticaionProvider(들)을 조회하여 인증을 요구함
4. AuthenticaionProvider는 UserDetailsService를 통해 입력받은 아이디에 대한 사용자 정보를 DB에서 조회함
5. 입력받은 비밀번호를 암호화하여 DB의 비밀번호화 매칭되는 경우 인증이 성공된 UsernameAuthenticationToken을 생성하여 AuthenticaionManager로 반환함
6. AuthenticaionManager는 UsernameAuthenticaionToken을 AuthenticaionFilter로 전달함
7. AuthenticationFilter는 전달받은 UsernameAuthenticationToken을 LoginSuccessHandler로 전송하고, 토큰을 Response 의 헤더에 추가하여 반환함

# Spring Security - Tokenbased 예제 실행 방법
1. https://github.com/MangKyu/SpringSecurity-Example 으로부터 소스를 클론받는다.
2. CREATE DATABASE security DEFAULT CHARSET UTF8; 으로 데이터베이스를 생성한다.
3. application.properties에서 DB username과 password를 개인에 맞게 변경해준다.
4. 서버를 실행시킨다.
5. http://localhost:8081/user/init 로 접속해서 사용자 데이터를 초기화 한다.
6. Json으로 사용자 아이디와 비밀번호에 대한 요청을 보내고 토큰 반환을 확인한다.


# Spring Security - Formbased 예제 실행 방법
1. https://github.com/MangKyu/SpringSecurity-Example/tree/formbased으로부터 소스를 클론받는다.
2. CREATE DATABASE security DEFAULT CHARSET UTF8; 으로 데이터베이스를 생성한다.
3. application.properties에서 DB username과 password를 개인에 맞게 변경해준다.
4. 서버를 실행시킨다.
5. http://localhost:8081/user/init 로 접속해서 사용자 데이터를 초기화 한다.
6. index 페이지에 접속하여 실행한다.
