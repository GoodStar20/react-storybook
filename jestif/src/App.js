import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import logo from './logo.svg';
import Button from './Button'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to testing in react
        </p>
        <Button duration={'2000'} padding={'30px 50px'}  vertical={false}>Start Learning</Button>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
