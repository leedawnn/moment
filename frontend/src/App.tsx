import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { setScreenSize } from './utils/styles';
import { styled } from 'styled-components';
import { themeDefault } from './styles/theme';
import { useEffect } from 'react';

function App() {
  const initKaKao = () => {
    const key = import.meta.env.VITE_JAVASCRIPT_KEY;
    const { Kakao } = window as any;

    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(key);
      console.log(Kakao.isInitialized());
    }

  }

  useEffect(() => {
    setScreenSize();
    initKaKao();

    window.addEventListener('resize', setScreenSize);

    return () => window.removeEventListener('resize', setScreenSize);
  }, []);

  return (
    <ThemeProvider theme={themeDefault}>
      <Layout>
        <Container>
          <Outlet />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
