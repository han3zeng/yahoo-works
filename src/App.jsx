import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import FormSet from './components/Form/FormSet';
import SortingSheet from './components/Sheet';
import ECommerce from './components/eCommerce';
import Home from './components/Home';

const theme = {
  formGray: '#ccc',
  formHighlightGray: '#333',
  errorRed: 'red',
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    padding: 10px;
  }
  button {
    background-color: white;
    outline: none;
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 2px gray;
    }
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 3px;
    outline: none;
    &:focus {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
    &:invalid  {
      border: 1px solid ${(props) => props.theme.errorRed};
    }
  }

  select {
    border: 1px solid ${(props) => props.theme.formGray};
    padding: 6px 3px;
    outline: none;
    &:focus {
      border: 1px solid ${(props) => props.theme.formHighlightGray};
    }
    &:invalid  {
      border: 1px solid ${(props) => props.theme.errorRed};
    }
  }

  a {
    color: black;
  }

  h2 {
    font-size: 24px;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/form-markup"
            element={<FormSet />}
          />
          <Route
            path="/sorting-sheet"
            element={<SortingSheet />}
          />
          <Route
            path="/e-commerce"
            element={<ECommerce />}
          />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
