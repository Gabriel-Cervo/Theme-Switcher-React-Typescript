import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistentState from './utils/usePersistentState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Header from './components/header';

function App() {
  const [theme, setTheme] = usePersistentState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
