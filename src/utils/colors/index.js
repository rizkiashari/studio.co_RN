/* eslint-disable prettier/prettier */
const mainColors = {
  blueBlack: '#2E475E',
  black: '#000000',
  blackPudar: 'rgba(0, 0, 0, 0.6)',
  white: '#FFFFFF',
  grey1: '#929292',
  grey2: '#F2F2F2',
  grey3: '#BEBEBE',
  red1: '#F25454',
};

export const colors = {
  primary: mainColors.blueBlack,
  secondary: mainColors.grey2,
  whiteBg: mainColors.white,
  text: {
    primary: mainColors.blueBlack,
    secondary: mainColors.grey1,
    menuActive: mainColors.red1,
    menuInActive: mainColors.white,
    black: mainColors.black,
    white: mainColors.white,
    grey3: mainColors.grey3,
    grey1: mainColors.grey1,
  },
  background: {
    primary: mainColors.white,
  },
  button: {
    primary: {
      background: mainColors.blueBlack,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.grey2,
      text: mainColors.grey3,
      text2: mainColors.grey1,
    },
    ternary: {
      background: mainColors.white,
      text: mainColors.red1,
    },
  },
  border: mainColors.blueBlack,
  border02: mainColors.grey3,
  border03: mainColors.grey1,
  borderRed: mainColors.red1,
  black: mainColors.black,
  ternatry: mainColors.grey2,
  field: {
    background: mainColors.grey2,
    text: mainColors.grey3,
  },
};
