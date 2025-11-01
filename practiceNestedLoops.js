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
// FOR i FROM 0 TO length of array - 1
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
// FOR i FROM 0 TO length of array - 1
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
// FOR i FROM 0 TO length of array - 1
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

// Phase 2: Nested Loops for Pair Operations.
// Print all pairs of numbers

// Pseudocode:
// SET array TO [1, 2, 3]
// FOR i FROM 0 To LENGTH of array - 1
//      FOR j FROM 0 TO lENGTH of array - 1
//          DISPLAY i AND j
//      ENDFOR
// ENDFOR
// END

{
    const array = [1, 2, 3];
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < array.length; j++) console.log(`${array[i]} ${array[j]}`);
    // }

    array.forEach(i => {
        array.forEach(j => {
            console.log(`${i} ${j}`);
        });
    });
}

// Print all unique pairs  (no repeats).
// Goal: Print every unique pair of numbers from an array — without repeating reversed pairs like 1 2 and 2 1, and without pairing a number with itself.
// Pseducode:
// START
// SET array TO [1, 2, 3]
// FOR i FROM 0 TO LENGTH of array - 1
//      FOR j FROM i + 1 TO LENGTH of array - 1
//          DISPLAY array[i] AND array[j]
//      ENDFOR
// ENDFOR
// END

{
    console.log('--------------')
    const array = [1, 2, 3];
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         console.log(`${array[i]} ${array[j]}`);
    //     };
    // };

    array.forEach((num, i) => {
        for (let j = i + 1; j < array.length; j++) {
            console.log(`${num} ${array[j]}`);
        };
    });
}

// Find all pairs that sum to a target number.
// START
// LET array TO [1, 2, 3, 4]
// LET target TO 5
// FOR i FROM 0 TO LENGTH OF array - 1
//      FOR j FROM i + 1 TP lENGTH of array - 1
//          IF j + i EQUAL TO target THEN
//              DISPLAY i + j
//           ENDIF
//      ENDFOR
// ENDFOR
// END

{   
    console.log('--------------')
    const array = [1, 2, 3, 4];
    const target = 5;

    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[i] + array[j] === target) console.log(`${array[i]} + ${array[j]}`);
    //     };
    // };

    array.forEach((a, i) => {
        array.forEach((b, j) => {
            if (array[i] + array[j] === target) console.log(`${b} + ${a}`);
        });
    });
}