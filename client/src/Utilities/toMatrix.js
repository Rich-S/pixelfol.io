//  Turns an array into an n * n multi-dimensional array:
//  toMatrix([1,2,3,4,5,6,7,8,9], 3) => [[1,2,3],[4,5,6],[7,8,9]]
//  source: https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-arraymatrix-in-javascript-or

const toMatrix = function(list, elementsPerSubArray) {
  let matrix = [], i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
};

export default toMatrix;
