import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
     'white': '#FFF',

     'gray900': '#121214',
     'gray800': '#202024',
     'gray300': '#C4C4CC',
     'gray100': '#E1E1E6',

    'green500': '#00875F',
    'green100': '#00B37E',
    },
    fontWeights: {
      'regular': 400,
      'bold': 700
    },
    fontSizes: {
      'small': '18px',
      'medium': '20px',
      'semi-large': '24px',
      'large': '32px',
    }
  },
});
