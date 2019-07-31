const COLOR = {
  WHITE: "3px solid #D9E5FF",
  GRAY: "3px solid #C3C3C3",
  BLUE: "3px solid #021178",
  ORANGE: "3px solid #F29661",
}

const THEME = {
  "light": {
    DEFAULT: COLOR.GRAY,
    FOCUS: COLOR.ORANGE,
    ACTION: COLOR.BLUE
  },
  "dark": {
    DEFAULT: COLOR.GRAY,
    FOCUS: COLOR.ORANGE,
    ACTION: COLOR.WHITE
  }
}

const THEME_STRING = {
  LIGHT: "light",
  DARK: "dark",
}

export {
  THEME,
  THEME_STRING,
}