import { ColorTheme, SpacingTheme, Theme } from './Theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  primary: '#67E480',
  background: '#191622',
  onButton: '#988BC7',
  header: '#483C67',
  headerText: '#E1E1E6',
  bgInput: '#34313D',
  bgItemDone: '#44475A',
  textDone: '#E1E1E6',
  buttonDone: 'rgba(68, 71, 90, 0.1)',
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
};
