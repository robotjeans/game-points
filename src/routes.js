import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global } from '@emotion/core';

import ErrorPage from './pages/ErrorPage';
import GamePage from './pages/GamePage';

import globals from './styles/globals';
import normalize from './styles/normalize';
import styled from './utils/styled';
import mixins from './styles/mixins';

const Routes = () => (
  <AppLayout>
    <Global styles={normalize} />
    <Global styles={globals} />
    <Switch>
      <Route component={GamePage} path="/" exact />
      <Route component={ErrorPage} />
    </Switch>
  </AppLayout>
);

export default Routes;

const AppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.body};
  ${mixins.hideScrollBar};
`;
