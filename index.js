function solvePyramid(pyramid, target, row = 0, col = 0, path = "") {
  if (row === pyramid.length) {
    if (target === 1) {
      console.log(path);
    }
    return;
  }

  const value = pyramid[row][col];

  if (value * target <= 1) {
    return;
  }

  solvePyramid(pyramid, target / value, row + 1, col, path + "L");

  solvePyramid(pyramid, target / value, row + 1, col + 1, path + "R");
}

const pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];

const target = 720;

solvePyramid(pyramid, target);
