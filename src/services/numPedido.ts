export const createNumberGenerator = (initialValue = 107123) => {
  let current = initialValue;
  return () => current++;
};
