import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from "./hooks/auth";
import theme from './styles/theme.js';
import GlobalStyle from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)