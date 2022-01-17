import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';

import { GameProvider } from './context';
import theme from './styles/theme';
import Routes from './routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GameProvider>
        <Routes />
      </GameProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
