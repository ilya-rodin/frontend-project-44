export default (maxNumber = 15, count = 1) => {
  if (count < 1) {
    console.log('count cannot be less than 1');
    return null;
  }

  if (count > 1) {
    const result = [];
    for (let i = 0; i < count; i += 1) {
      result.push(Math.floor(Math.random() * maxNumber + 1));
    }
    return result;
  }

  const result = Math.floor(Math.random() * maxNumber + 1);
  return result;
};
