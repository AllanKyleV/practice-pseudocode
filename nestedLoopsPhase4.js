// Phase 4: 2D Arrays & Matrices
// Focus: nested loops in grids, understanding data structures.

// Exercise 1: Print 2D array row by row
// Goal: Loop through each row and print its values clearly.
// Pseducode:
// START
// CREATE a function print2DArray() that ACCEPTS a 2D array
// FOR each row in the 2D array
//     FOR each element in that row
//         DISPLAY the element (with space or comma)
//     ENDFOR
// ENDFOR
// END

function print2DArray(arrays) {
    // for (let i = 0; i < arrays.length; i++) {
    //   let array = '';
    //   for (let j = 0; j < arrays[i].length; j++) {
    //     array += arrays[i][j] + ' ';
    //   }
    //   console.log(array);
    // }
    arrays.forEach(array => {
        console.log(array.join(' '));
    });
}

print2DArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
console.log('-------------------');

// Exercise 2: Sum each row and column separately
// Goal: Loop through a 2D array to calculate; The sum of each row, The sum of each column.
// Pseudocode:
// START
// CREATE a function sumRowsAndColumns() that ACCEPTS a 2D array
// SET rows TO EMPTY array
// SET columns TO EMPTY array
// FOR i FROM 0 to length OF 2D array - 1
// Algo i: Get the sum of each row
//    SET sumOfRows TO 0
//    FOR j FROM 0 to length of array[i] - 1
//      sumOfRows += arrays[i][j]
//    ENDFOR
//    PUSH sumOfRows TO rows
// Algo ii: Get the sum of each column
//    FOR j FROM 0 to length of arrays[0] - 1
//      SET sumOfColumns TO 0
//    FOR i FROM 0 TO length of arrays - 1
//      sumOfColumns += arrays[i][j]
//    ENDFOR
// RETURN { rows, columns }
// ENDs

function sumRowsAndColumns(arrays) {
  let rows = [];
  let columns = [];
  for (let i = 0; i < arrays.length; i++) {
    // Algo i: Get the sum of each row
    let sumOfRows = 0;
    for (let j = 0; j < arrays[i].length; j++) {
      sumOfRows += arrays[i][j];
    }
    rows.push(sumOfRows);
  }
    // Algo ii: Get the sum of each column
    for (let j = 0; j < arrays[0].length; j++) {
      let sumOfColumns = 0;
    for (let i = 0; i < arrays.length; i++) {
      sumOfColumns += arrays[i][j];
    }
    columns.push(sumOfColumns);
  }

  return { rows, columns };
}

console.log(sumRowsAndColumns([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
console.log('-------------------');

// Refactor this later!

// Exercise 3: Find the Maximum Value in a Matrix.
// Algo: Get the highest number in the array of arrays
// Store it in a new array, then return the highest number.
// Pseudocode:
// START
// CREATE a function maxMatrix() that accept argument arrays
// SET highestNums TO empty array
// FOR i FROM 0 TO length OF arrays - 1
//    SET max TO arrays[0];
//    FOR j FROM 0 TO length OF arrays[i] - 1
//      IF arrays[i][j] > max THEN
//        max = arrays[i][j]
//      ENDIF
//    ENDFOR
//    push max TO highestNum
//    SET result TO highestNums[0]
//    IF highestNums[i] > result THEN
//      result = highestNums[i]
//    ENDIF
// RETURN result
// ENDFOR
// END

// function maxMatrix(arrays) {
//   let highestNums = [];
//   for (let i = 0; i < arrays.length; i++) {
//     let max = arrays[i][0];
//     for (let j = 0; j < arrays[i].length; j++) {
//       if (arrays[i][j] > max) max = arrays[i][j];
//     }
//     highestNums.push(max);
//   }
//     let result = highestNums[0];
//     for (let k = 0; k < highestNums.length; k++) {
//       if (highestNums[k] > result) result = highestNums[k];
//     }
//     return result;
// }

function maxMatrix(arrays) {
    let max = arrays[0][0];
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if (arrays[i][j] > max) max = arrays[i][j];
        }
    }
    return max;
}


console.log(maxMatrix([
  [3, 9, 2],
  [8, 4, 7],
  [5, 1, 6]
]));
console.log('-------------------');

// Exercise 4: 