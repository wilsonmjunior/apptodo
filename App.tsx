import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

import { ThemeProvider } from './src/contexts/theme'
import { DEFAULT_LIGHT_THEME } from './src/contexts/light.theme';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <Home />
      </ThemeProvider>
    </>
  );
}
