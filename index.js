const calculate = (arrayInput) => {
  let sum = 0;
  arrayInput.forEach((item) => {
    sum += item;
  });
  return sum;
};

module.exports.calculate = calculate;
