import 'bulma/css/bulma.css';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import GlobalStyle, { theme } from '../utils/theme';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
