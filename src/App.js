import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled, { createGlobalStyle } from 'styled-components'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

const SiteHeader = styled(AppBar)`
  && {
    box-shadow: 0 1px 12px -3px rgba(0,0,0,.1);
    background: white;
    padding: 8px 0;
  }

  h6 {
    font-weight: 400;
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #f8f9fa;
    margin: 0;
    padding: 0;
  }

  .bg {
    &.sdg1 {
      background: rgb(204,44,67);
    }
    &.sdg2 {
      background: rgb(211, 162 ,70 );
    }
    &.sdg3 {
      background: rgb(81, 148 ,71 );
    }
    &.sdg4 {
      background: rgb(175, 39, 56 );
    }
    &.sdg5 {
      background: rgb(211 ,69 ,58 );
    }
    &.sdg6 {
      background: rgb(73, 181 ,203 ) ;
    }
    &.sdg7 {
      background: rgb(238, 189, 64 ) ;
    }
    &.sdg8 {
      background: rgb(141, 36, 65 );
    }
    &.sdg9 {
      background: rgb(219, 104, 62 ) ;
    }
    &.sdg10 {
      background: rgb(197 ,36 ,96 );
    }
    &.sdg11 {
      background: rgb(232, 151, 68 ) ;
    }
    &.sdg12 {
      background: rgb(177 ,134, 58 ) ;
    }
    &.sdg13 {
      background: rgb(65, 119 ,68 );
    }
    &.sdg15 {
      background: rgb(100 ,167, 74 ) ;
    }
    &.sdg16 {
      background: rgb(31, 101 ,137 ) ;
    }
  }
`

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <SiteHeader position="static" color="default">
        <Container style={{padding: 0}}>
          <Toolbar>
              <div style={{flexGrow: 1}}>
                <Typography variant="h6" color="inherit">
                  European Cities SDG Index 2019
                </Typography>
                <Typography variant="body1" style={{color: '#6c757d'}} gutterBottom>
                  Prototype Version
                </Typography>
              </div>
              <img src='/images/SDSN-logo.png' alt='SDSN logo' style={{maxHeight: 50}}/>
            </Toolbar>
          </Container>
        </SiteHeader>
        <Container>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={HomePage} />
            <Route path="/:country" component={CountryPage} />
          </div>
        </Container>
        <GlobalStyle />
      </HashRouter>
    );
  }
}

export default App;
