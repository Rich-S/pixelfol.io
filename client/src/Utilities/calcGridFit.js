function calcGridFit(number, width, height) {
  let dimension = Math.ceil(Math.sqrt(number));
  return { dimension: dimension, x: Math.ceil(dimension/width), y: Math.ceil(dimension/height) }
};

export default calcGridFit;
