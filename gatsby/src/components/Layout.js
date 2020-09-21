import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';

export const Layout = ({ children }) => {
  return (
    <div>
      <Typography />
      <GlobalStyles />

      <Nav />
      {children}
      <Footer />
    </div>
  );
};
