import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { cube, square } from './utils/math';

const theme = {
  fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
};

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
    </ThemeProvider>
  );
}

export default App;
