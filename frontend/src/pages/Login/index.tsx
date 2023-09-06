import Logo from "../../components/login/Logo";
import SocialButton from "../../components/login/SocialButton";
import { styled } from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SocialWrapper>
        <SocialTitle> 나만의 특별한 추억을 만들어 보세요. </SocialTitle>
        <SocialButton socialType="kakao" />
      </SocialWrapper>
    </Container>
  )
};

export default LoginPage;

const Container = styled.section`
  width: 100%;
  min-height: 812px;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const SocialWrapper = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialTitle = styled.h3`
  font-size: 11px;
`;