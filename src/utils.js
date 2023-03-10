/* eslint-disable import/prefer-default-export */
export const generateNumber = (min, max) => {
  if (min < 0) {
    console.log('count cannot be less than 0');
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
