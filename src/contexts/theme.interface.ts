export interface ColorTheme {
  primary: string;
  background: string;
  onButton: string;
  header: string;
  headerText: string;
  bgInput: string;
  bgItemDone: string;
  textDone: string;
  buttonDone: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string,
  color: ColorTheme,
  spacing: SpacingTheme,
}
