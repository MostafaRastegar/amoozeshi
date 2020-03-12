// Some general functions

export const financialLevel = level => {
  switch (level) {
    case 1:
      return 'level1';
    case 2:
      return 'level2';
    case 3:
      return 'level3';
    default:
      return 'level1';
  }
};

export const rateColor = rate => {
  switch (Math.floor(rate)) {
    case 0:
      return 'gray5Bg';
    case 1:
      return 'rate1';
    case 2:
      return 'rate2';
    case 3:
      return 'rate3';
    case 4:
      return 'rate4';
    case 5:
      return 'rate5';
    default:
      return 'rate1';
  }
};