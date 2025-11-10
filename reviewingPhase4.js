// Exercise 1: Print a 2D Array Row by Row.
// Goal: Practice working with nested loops by printing each element in a 2D array row by row.

// Logic:
// Outer loop - row
// Inner loop - Combine elements in row and add space 

// Pseudocode:
// START
// SET result to empty arrays
// FOR i from 0 to length of matrix - 1
//      SET str to empty string
//      FOR j from 0 to length of matrix[i] - 1
//          str+= `${matrix[i][j] }`
//      ENDFOR
//      push str to result
// ENDFOR
// FOR k from 0 to length of result - 1
//      DISPLAY result[k]
// ENDFOR
// END

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// function get2DArray(matrix) {
//     let result = [];
//     for (let i = 0; i < matrix.length; i++) {
//         let str = '';
//         for (let j = 0; j < matrix[i].length; j++) {
//             str+= `${matrix[i][j]} `;
//         }
//         result.push(str);
//     }
//     for (let k = 0; k < result.length; k++) {
//         console.log(result[k]);
//     }
// }

// Refactored version
// Note: Storing result is unnecessary

function get2DArray(matrix) {
    matrix.forEach(row => {
        let str = '';
        row.forEach(element => {
            str+= `${element} `;
        });
        console.log(str);
    });
}

get2DArray(matrix);

// Exercise 2:
// Goal: Compute the sum of each row and the sum of each column in a 2D array.

// logic: sum of each row - For each row. Loop, add each num, display total.
// Get the the row with the highest column length.
// sum of each column - For each column. loop row and column (use the traditional for loop, targeted by i and j).

// Pseducode:
// START
// Create a function sumRowsAndColumns() that accept matrix
// SET rows to empty array
// SET columns to empty array
// FOR i from 0 to length of matrix - 1
//      SET rowNum to 0
//      SET columnNum to 0
//      FOR j from 0 to length of array[i] - 1
//          rowNum += matrix[i][j]
//          columnNum += matrix[j][i]
//      ENDFOR
//      PUSH num to rows
// ENDFOR
// RETURN {rows, columns}
// END

// function sumRowsAndColumns(matrix) {
//     let rows = [];
//     let columns = [];
    
//     // Sum of each row
//     matrix.forEach(row => {
//         let rowSum = 0;
//         row.forEach(element => {
//             rowSum += element;
//         })
//         rows.push(rowSum);
//     });

//     // Sum of each column
//     for (let i = 0; i < matrix[0].length; i++) {
//         let colSum = 0;
//         for (let j = 0; j < matrix.length; j++) {
//             if (matrix[j][i] !== undefined) {
//                 colSum += matrix[j][i];
//             }
//         }
//         columns.push(colSum);
//     }

//     return {rows, columns};
// }

// Refactored version
// Note: Use small naming nitpick

function sumRowsAndColumns(matrix) {
    let rows = [];
    let columns = [];
    
    // Sum of each row
    matrix.forEach(row => {
        let rowSum = 0;
        row.forEach(element => {
            rowSum += element;
        })
        rows.push(rowSum);
    });

    // Sum of each column
    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] !== undefined) colSum += matrix[j][i];
        }
        columns.push(colSum);
    }

    return {rows, columns};
}

console.log(sumRowsAndColumns(matrix));

// Exercise 3: 
// Goal: Find the maximum value in a 2D array (matrix).

// Logic: Get the highest number in every rows, then return the highest of them.

// Pseudocode:
// START
// Create function getHighestNum() that accepts matrix
// SET array to empty array
// FOR each row in matrix
//      SET max to 0
//      FOR each element in row
//          IF element > max THEN
//              max = element
//          ENDIF
//      PUSH max to array
//      ENDFOR
// ENDFOR
// FOR each row in array
//      SET max to 0
//      FOR each element in row
//          IF element > max THEN
//              max = element
//          ENDIF
//      RETURN max
//      ENDFOR
// ENDFOR
//END

// function getHighestNum(matrix) {
//     let array = [];

//     // Max element in each rows
//     matrix.forEach(row => {
//         let max = -Infinity;
//         row.forEach(element => {
//             if (element > max) max = element;
//         });
//         array.push(max);
//     });

//     // Highest element of maxes
//     let max = -Infinity;
//     array.forEach(element => {
//         if (element > max) max = element;
//     });

//     return max;
// }

// Note: 
// You don’t need a second nested loop over rows again — once you have all row maxes in an array, a simple loop over that array is enough to get the global max.
// Initializing max to 0 works if all numbers are positive; for safety (negative numbers included) it’s better to initialize to -Infinity.

// Refactored version:
// Compare each element to global max.

function getHighestNum(matrix) {
    let globalMax = -Infinity;
    matrix.forEach(row => {
        row.forEach(num => {
            if (num > globalMax) globalMax = num;
        });
    });
    return globalMax;
}
console.log(getHighestNum(matrix));

// Exercise 4: Transpose a Matrix
// Goal: Convert rows into columns in a 2D array.

// Logic:
// Use matrix[j][i] technique to target rows and columns.
// In length of array columns, loop the rows and columns the push it to main array.

// START
// Create function transposeMatrix() that accept matrix
// SET arrays to empty array
// FOR i from 0 to length of  matrix[0] - 1
//      SET array to empty array
//      FOR j from 0 to lengthof matrix - 1
//          PUSH matrix[j][i] to arrays
//      ENDFOR
//      PUSH array to arrays
// ENDFOR
// RETURN arrays
// END

// Note: Used better naming. arrays to transposed.

function transposeMatrix(matrix) {
    if (matrix.length === 0) return [];
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        transposed.push(row);
    }
    return transposed;
}
console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6]
]));

// Exercise 5: Check if a 2D array (matrix) is symmetric

// Logic: Check if matrix[i][j] === matrix[j][i];

// Pseudocode:
// START
// CREATE function isSymmetric() that accepts matrix
// FOR i from 0 to length of matrix - 1
//      FOR j from 0 to length of matrix - 1 
//          IF matrix[i][j] !== matrix[j][i] THEN
//              RETURN false
//      ENDFOR
// ENDFOR
// RETURN true
// END

function isSymmetric(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            if (matrix[i][j] !== matrix[j][i]) return false;
        }
    }
    return true;
}

console.log(isSymmetric([
    [1, 0, 3],
    [2, 4, 5],
    [3, 5, 6]
]))