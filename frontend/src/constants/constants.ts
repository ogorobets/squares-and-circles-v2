export enum Loading {
  INITIAL,
  PENDING,
  SUCCESS,
  ERROR
}

export enum ShapeColor {
  LIGHT_RED = '#DB2C2C',
  DARK_RED = '#7B0A0A',
  LIGHT_GREEN = '#5CB69B',
  DARK_GREEN = '#175744',
  LIGHT_BLUE = '#5A7DD6',
  DARK_BLUE = '#291A82',
  LIGHT_YELLOW = '#DCC655',
  DARK_YELLOW = '#936409'
}

export enum CheckboxType {
  RED,
  GREEN,
  BLUE,
  YELLOW,
  TRANSPARENT
}

export enum ThemeColor {
  RADIO_BTN_LEGEND = '#000000',
  RADIO_BTN_LABEL = '#000000',
  RADIO_BTN_BACKGROUND = '#ffffff',
  RADIO_BTN_BORDER = '#b8b8b8',
  RADIO_BTN_INNER_CIRCLE_CHECKED = '#000000',
  RADIO_BTN_INNER_CIRCLE_HOVER = '#3f3f3f',
  RADIO_BTN_DISABLED_BORDER = '#968a8a',
  RADIO_BTN_DISABLED_BACKGROUND = '#d6d1d1',
  RADIO_BTN_INNER_CIRCLE_DISABLED_CHECKED = '#605555',
  RADIO_BTN_DISABLED_LABEL = '#605555',
  CHECKBOX_BLANK_BG_BORDER = 'rgba(217, 217, 217, 0.9)',
  CHECKBOX_WITH_COLORED_BG_BORDER = 'rgba(101, 101, 101, 0.9)',
  CHECKBOX_LABEL = '#000000'
}

export enum MenuShapeColor {
  RED,
  GREEN,
  BLUE,
  YELLOW
}

export enum ShapeType {
  CIRCLE,
  SQUARE
}

export enum MenuShapeColorShade {
  ALL,
  DARK,
  LIGHT
}

export enum CheckboxGroupDirection {
  VERTICAL,
  HORIZONTAL
}

export type MenuCheckboxShape = MenuShapeColor | ShapeType;
