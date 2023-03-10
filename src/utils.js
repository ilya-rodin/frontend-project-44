export const generateNumber = (min, max) => {
  if (min < 1) {
    console.log('count cannot be less than 1');
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
