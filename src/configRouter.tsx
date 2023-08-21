import React, { Fragment } from 'react';
import { initialDevice, selectAppDevice } from 'slice/appDeviceSlice';
import { DEVICES } from 'utils/constants';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { GlobalStyle } from './styled';
import { Footer, Header } from './components';
import { publicRoutes } from './utils/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { findAllLocation, loggedInAccount, setError } from './slice';
import Modal from 'components/Modal';
import { getLocalStorage } from 'utils';

export const Router = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [pathName, setPathName] = React.useState<string>('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [authTitle, setAuthTitle] = React.useState<string>('');

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(setError(''));
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const showModal = (key: string) => {
    if (key == '1') {
      setAuthTitle('Đăng ký');
    } else if (key == '2') {
      setAuthTitle('Đăng nhập');
    }
    setIsModalOpen(true);
  };

  const appDevice = useAppSelector(selectAppDevice);

  React.useEffect(() => {
    const getAllLocation = async () => {
      await dispatch(findAllLocation({}));
    };

    getAllLocation();
  }, []);

  React.useEffect(() => {
    if (appDevice.isFirstLoad) {
      if (window.innerWidth <= 768) {
        dispatch(initialDevice(DEVICES.MOBILE));
      } else {
        dispatch(initialDevice(DEVICES.DESKTOP));
      }
    }

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  React.useEffect(() => {
    const windowHeight = (): void => {
      const doc = document.documentElement;
      doc.style.setProperty('--window-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', windowHeight);
    windowHeight();
  }, [window.innerHeight]);

  React.useEffect(() => {
    setPathName(window.location.pathname);
  }, [window.location.pathname]);

  React.useEffect(() => {
    const storedAccount = getLocalStorage('account');

    if (storedAccount) {
      dispatch(loggedInAccount(storedAccount));
    }
  }, []);

  return (
    <Wrapper>
      <ContentWrapper isHomePage={pathName == '/'}>
        <Content maxWidth={appDevice.maxWidth}>
          <BrowserRouter>
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              title={authTitle}
              onOk={handleOk}
            ></Modal>
            <Header onShowModal={showModal}></Header>
            <GlobalStyle></GlobalStyle>

            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = (route as any)?.layout ? (
                  (route as any)?.layout
                ) : (route as any)?.layout === null ? (
                  Fragment
                ) : (
                  <></>
                );

                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Page></Page>}
                  ></Route>
                );
              })}
            </Routes>
          </BrowserRouter>
        </Content>
      </ContentWrapper>
      <Footer></Footer>
      {/* {pathName != '/' && <Footer></Footer>} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: calc(calc(var(--vh, 1vh) * 100) - 1px);
  height: calc(calc(var(--vh, 1vh) * 100) - 1px);
`;
// max-width: ${p =>
//     p.isHomePage ? 'var(--home-max-width)' : 'var(--max-width)'};
const ContentWrapper = styled.div<{ isHomePage?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  /* padding: 0px 80px; */

  @media only screen and (max-width: 1440px) {
    /* padding: 0px 40px; */
  }
`;

const Content = styled.div<{ maxWidth: string }>`
  /* max-width: ${p => p.maxWidth}; */
  width: 100%;
`;
