import React, { useState, createContext, useContext } from "react";

import { DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID } from "./dark.theme";

import { DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_ID } from "./light.theme";
import { Theme } from "./theme.interface";

interface ThemeContextData {
  anotherTheme: string;
  theme: Theme
  toogleTheme: () => void
}

const ThemeContext = createContext<ThemeContextData>({
  anotherTheme: 'Dark',
  theme: DEFAULT_LIGHT_THEME,
  toogleTheme: () => { console.log('ThemeProvider is not rendered!') }
})

interface ThemeProviderProps {
  initial: Theme
  children: React.ReactNode
}

export function ThemeProvider({ initial, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initial);
  const [anotherTheme, setAnotherTheme] = useState(() => {
    if (initial === DEFAULT_LIGHT_THEME) {
      return 'Dark'
    }
    return 'Light'
  })

  function toogleTheme() {
    setTheme((currentTheme) => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        setAnotherTheme('Light')
        return DEFAULT_DARK_THEME
      }

      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        setAnotherTheme('Dark')
        return DEFAULT_LIGHT_THEME
      }

      return currentTheme
    })
  }

  return (
    <ThemeContext.Provider value={{ anotherTheme, theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)