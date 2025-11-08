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

// Exercise 4: Transpose a Matrix
// Goal: witch rows and columns of a 2D array.
// Input: [
//   [1, 2, 3], 
//   [4, 5, 6]
// ]
// Output: [
//   [1, 4],  --- arrays[0][0], arrays[1][0]
//   [2, 5],  --- arryays[0][1], arrays[1][1]
//   [3, 6]   --- arrays[0][2], arrays[1][2]
// ]
// 
// Logic: 
// Outer loop - rows
// Inner loop - elements
// Pseudocode:
// CREATE a function transposeMatrix that accept argument arrays
// SET newArray to empty array
// FOR i FROM 0 to length of arrays[0] - 1
//    SET rows to []
//    FOR j FROM 0 to length arrays - 1
//      push arrays[j][i] to rows
//    ENFOR
// push rows to newArray
// ENDFOR
// RETURN newArray
// END

// function transposeMatrix(arrays) {
//   return [
//     [arrays[0][0], arrays[1][0]],
//     [arrays[0][1], arrays[1][1]],
//     [arrays[0][2], arrays[1][2]]
//   ]
// }

function transposeMatrix(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays[0].length; i++) {
    let rows = [];
    for (let j = 0; j < arrays.length; j++) {
      rows.push(arrays[j][i]);
    }
    newArray.push(rows);
  }
  return newArray;
}

console.log(transposeMatrix([
  [1, 2, 3],
  [4, 5, 6]
]));
console.log('-------------------');

// Exercise 5: Check if a 2D array is symmetric
// Goal: Determine if a 2D array is symmetric.
// A matrix is symmetric if it’s equal to its transpose.

// Algorithm: Combine all elements in arrays to one array - a
// Combine all elements in arrays to one array but in transpose order - b
// Return true if date in a and b is the same, else false.

// Pseudocode: 
// START
// SET a TO empty array
// SET b TO empty array
// FOR row of arrays
//    FOR element of row
//      push element to a
//    ENDFOR
// ENDFOR
// FOR
// FOR i from 0 to length arrays -1
//    FOR j from 0 to length arrays - 1
//      push array[j][i]
//    ENDFOR
// ENDFOR
// IF length of a is not equal to length of b THEN
//    RETURN false
// FOR i FROM 0 TO length OF a - 1
//    IF a[i] !== b[i] RETURN false
//    ENDIF
// ENDFOR
// RETURN true;
// END

// function isSymmetric(arrays) {
//   let a = [];
//   let b = [];

//   for (let rows of arrays) {
//     for (let element of rows) {
//       a.push(element);
//     }
//   }

//   for (let i = 0; i < arrays.length; i++) {
//     for (let j = 0; j < arrays.length; j++) {
//       b.push(arrays[j][i]);
//     }
//   }

//   if (a.length !== b.length) return false;
//   for (let i = 0; i < a.length; i++) {
//     if(a[i] !== b[i]) return false;
//   }

//   return true;
// }

function isSymmetric(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[i][j] !== arrays[j][i]) return false;
    }
  }
  return true;
}

console.log(isSymmetric([
  [1, 0, 3],
  [2, 5, 6],
  [3, 6, 9]
]));
// false

console.log(isSymmetric([
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9]
]));
// true