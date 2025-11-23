// Phase 5: Algorithmic Challenges

// Exercise 1: Generate All Subarrays of an Array
// Goal: Given an array, print (or return) all possible subarrays — continuous chunks of the array.

// Logic:
// Outer loop - Loop through length of array
// Inner loop - While looping through length of array, push the moified slice().

// Pseudocode:
// start
// let result to []
// for i from 0 to length of array - 1
//      for j form i to length of array - 1
//          push array.slice(i, j + 1) to result
//      endfor
// endfor
// display result
// end

let array = [1, 2, 3];

let result = [];
for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
        result.push(array.slice(i, j + 1));
    }
}
console.log(result);
console.log('------------------')

// Exercise 2: Check if a 2D array is symmetric
// Goal: A 2D array (matrix) is symmetric if it’s equal to its transpose, i.e., matrix[i][j] === matrix[j][i] for all valid i and j.

// Logic: Loop through the maximum length of the 2 arrays
// Loop i and j return false if matrix[i][j] === matrix[j][i]

// Pseudocode:
// start
// let max to max length of matrix
// for i from o to max - 1
//     for j from 0 to max - 1
//          if matrix[i][j] !== matrix[j][i] then
//              return false
//          endif
//     endfor
// endfor
// return true
// end

{
    matrix = [
        [1, 2, 3],
        [2, 4, 5],
        [3, 5, 6]
    ];

    function isSymmetric(matrix) {
        let max = matrix.length;
            for (let i = 0; i < max; i++) {
                for (let j = 0; j < max; j++) {
                    if (matrix[i][j] !== matrix[j][i]) return false;
        }
    }
    return true;
    }

    console.log(isSymmetric(matrix));
}

// Exercise 3: Manual Merge Sort without recursion.
// Goal: Simulate one pass of Merge Sort — merging two sorted arrays into a single sorted array — without recursion.

// Logic: Loop through the maximum length of the arrays

// Refine Pseudocode:
// START
// SET result to empty array
// SET i = 0, j = 0
// WHILE i < length of arr1 AND j < length of arr2
//     IF arr1[i] < arr2[j]
//         PUSH arr1[i] to result
//         i++
//     ELSE
//         PUSH arr2[j] to result
//         j++
//     ENDIF
// ENDWHILE
// // If any items are left in arr1 or arr2, add them
// PUSH remaining items from arr1 (if any)
// PUSH remaining items from arr2 (if any)
// DISPLAY result
// END

{
    arr1 = [1, 3, 5]
    arr2 = [2, 4, 6, 8, 10];

    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
           result.push(arr2[j]);
           j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    console.log(result);
}

