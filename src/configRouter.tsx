import React, { Fragment } from 'react';
import { initialDevice, selectAppDevice } from 'slice/appDeviceSlice';
import { DEVICES } from 'utils/constants';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { GlobalStyle } from './styled';
import { Footer, Header } from './components';
import { publicRoutes } from './utils/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { findAllLocation } from './slice';

export const Router = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [pathName, setPathName] = React.useState<string>('');

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

    console.log('data1', window.location.pathname);
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

  return (
    <Wrapper>
      <Header></Header>
      <BrowserRouter>
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

      {pathName != '/' && <Footer></Footer>}
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

const ContentWrapper = styled.div<{ isHomePage?: boolean }>`
  max-width: ${p =>
    p.isHomePage ? 'var(--home-max-width)' : 'var(--max-width)'};
  width: 100%;

  padding: 0px 80px;

  @media only screen and (max-width: 1440px) {
    padding: 0px 40px;
  }
`