// Phase 1: Simple Array Loops
// Print all elements of an array using a for loop.

const array = [1, 2, 3, 4, 5, 1];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Sum all elements of an array.

let total = 0;
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
console.log(total);

// Find the maximum value in an array.

// Pseudocode
// START
// SET array TO [1, 2, 3, 4, 5]
// SET max TO array[0]
// FOR EACH number IN array (Ps. No idea how to pseducode this 'for (let i = 0; i < array.length; i++)').
//      IF number > max THEN
//          max = number
//      ENDIF
// ENDFOR
// DISPLAY max
// END

let max = array[0];
for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number > max) {
        max = number;
    };
};
console.log(max);

// Reverse an array without using .reverse().
// Pseudocode:
// START
// SET an array
// FOR EACH number IN array
// SET reversedArray TO EMPTY array
// FOR EACH number IN array (..same here!..)
//      UNSHIFT number to reversedArray
// ENDFOR
// DISPLAY reversedArray
// END

let reversedArray = [];
for (let i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
};
console.log(reversedArray);

// Count occurrences of a specific element in an array.
// Pseudocode:
// START
// SET obj TO EMPTY objects
// FOR EACH number IN array (..here too!..)
// IF obj does NOT includes number THEN
//      ADD number to obj with value OF 0
// ELSE
//      increment value OF number in obj
// ENDIF
// ENDFOR
// DISPLAY obj
// END

let obj = {};
for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (!(number in obj)) {
        obj[number] = 1;
    } else {
        obj[number]++;
    }
}
console.log(obj);