# Spring Security Example

## Spring Security Flow
![Flow](/images/flow.png)
1. 사용자가 아이디 비밀번호로 로그인을 요청함
2. AuthenticationFilter에서 UsernamePasswordAuthenticationToken을 생성하여 AuthenticaionManager에게 전달
3. AuthenticaionManager는 등록된 AuthenticaionProvider(들)을 조회하여 인증을 요구함
4. AuthenticaionProvider는 UserDetailsService를 통해 입력받은 아이디에 대한 사용자 정보를 DB에서 조회함
5. 입력받은 비밀번호를 암호화하여 DB의 비밀번호화 매칭되는 경우 인증이 성공된 UsernameAuthenticationToken을 생성하여 AuthenticaionManager로 반환함
6. AuthenticaionManager는 UsernameAuthenticaionToken을 AuthenticaionFilter로 전달함
7. AuthenticationFilter는 전달받은 UsernameAuthenticationToken을 LoginSuccessHandler로 전송하고, 토큰을 response의 헤더에 추가하여 반환함

## How to Run 
1. https://github.com/MangKyu/SpringSecurity-Example으로부터 소스를 클론받는다.
2. CREATE DATABASE security DEFAULT CHARSET UTF8; 으로 데이터베이스를 생성한다.
3. application.properties에서 DB username과 password를 개인에 맞게 변경해준다.
4. back 폴더로 가서 서버를 실행시킨다.
5. frontend 폴더로 가서 클라이언트를 실행시킨다.
6. npm install
7. npm run dev

## How to Use
1. SignUp을 통해 먼저 회원가입을 한다.
2. 아직 로그인을 하지 않았기 때문에 Get All Users를 클릭하면 에러가 발생한다.
3. 회원가입한 계정으로 Sign In을 한다.
4. 로그인이 성공한 후에는 Get All Users를 클릭하면 사용자 목록을 얻을 수 있다.
![Test](/images/test.png)
