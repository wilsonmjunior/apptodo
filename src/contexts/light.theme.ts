import { ColorTheme, SpacingTheme, Theme } from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: '#3D3D4D',
  background: '#FFF',
  onButton: '#3FAD27',
  header: '#273FAD',
  headerText: '#FFF',
  bgInput: '#F5F4F8',
  bgItemDone: '#44475A',
  textDone: '#A09CB1',
  buttonDone: 'rgba(25, 61, 223, 0.1)',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
};
