import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initialDevice, selectAppDevice } from 'slice/appDeviceSlice';
import { GlobalStyle } from 'styled/GlobalStyle';
import { DEVICES } from 'utils/constants';
import { publicRoutes } from './utils/routes';

function App() {
  const dispatch = useAppDispatch();
  const appDevice = useAppSelector(selectAppDevice);

  return (
    <Router>
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
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
