import React from 'react';
import ReactDOM from 'react-dom/client';
import { BarberShop } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Thema';
import { GlobalStyle } from 'CommonStyle/Common.styled';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BarberShop />
    </ThemeProvider>
  </React.StrictMode>
);
