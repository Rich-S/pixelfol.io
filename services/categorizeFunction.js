const categorizeFunction = (num) => {
  let _type;
  if (typeof(num) != 'number') _type = 'n/a';
  if (num > 200000000000) _type = 'mega';
  if ((num < 200000000000) && (num > 10000000000)) _type = 'large';
  if ((num < 10000000000) && (num > 2000000000)) _type = 'mid';
  if ((num < 2000000000) && (num > 300000000)) _type = 'small';
  if ((num < 300000000) && (num > 50000000)) _type = 'micro';
  if ((num < 50000000) && (num > 0)) _type = 'nano';
  return _type;
};

exports.categorizeFunction = categorizeFunction;
