import React from 'react'
import { ChakraProvider, GlobalStyle, ThemeProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { defaultTheme } from './theme/theme';

function App() {
  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />

    </ChakraProvider>


  );
}

export default App;

