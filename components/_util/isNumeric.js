const isNumeric = value => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
export default isNumeric;
