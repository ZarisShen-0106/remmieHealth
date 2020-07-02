import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@chakra-ui/core';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Professional from './components/Professional';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

import CustomTheme from './components/theme.js';
import {
  Box
} from "@chakra-ui/core";
function App() {
  document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth) / 144 + 'px';

  window.onresize = () =>
    document.getElementsByTagName('html')[0].style.fontSize = (document.documentElement.clientWidth || document.body.clientWidth) / 144 + 'px';
  return (
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <Header />
        <Box pt="11rem" letterSpacing="0.01rem">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/physicians" component={Professional} />
          </Switch>
        </Box>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
