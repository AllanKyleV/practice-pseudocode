// Phase 5: Algorithmic challenges

// Exercise 1: Generate all subarrays of an array
// Goal: Find all possible contiguous subarrays of a given array.
// Algorithm: 
// Outer loop picks the start index.
// Inner loop picks the end index, building subarrays.
// 

// START
// CREATE function generateSubArrays() that accepts array
// SET result TO empty array
// FOR i FROM 0 TO length of array - 1        ← starting index
//     FOR j FROM i TO length of array - 1    ← ending index
//         SLICE array from i to j + 1
//         PUSH that slice into result
//     ENDFOR
// ENDFOR
// RETURN result
// END

function generateSubArrays(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            result.push(array.slice(i, j + 1));
        }
    }
    return result;
}
console.log(generateSubArrays([1, 2, 3]));

// Exercise 2: Implemet a simple version of Merge Sort manually (without recursion).
// Pseudocode:
// START
// CREATE a function mergeSort() that accepts array
// SET newArray TO empty array
// FOR i form 0 to length of array - 1
//      