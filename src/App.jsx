import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import FormSet from './components/form';

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
`;

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <FormSet />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
