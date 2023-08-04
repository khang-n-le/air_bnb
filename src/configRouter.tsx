import React, { Fragment } from 'react';
import { initialDevice, selectAppDevice } from 'slice/appDeviceSlice';
import { DEVICES } from 'utils/constants';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { GlobalStyle } from './styled';
import { Header } from './components/Layout';
import { publicRoutes } from './utils/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

export const Router = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);

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

  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(calc(var(--vh, 1vh) * 100) - 1px);
  height: calc(calc(var(--vh, 1vh) * 100) - 1px);
`;
