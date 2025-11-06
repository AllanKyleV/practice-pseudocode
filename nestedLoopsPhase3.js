// Goal of this phase
// Learn how to translate an idea into a repeatable step-by-step process.
// Strengthen logic for problem-solving.
// Get familiar with the pattern of:
// Loop → Compare → Act → Repeat

// 1. Count duplicates → find how many times each number appears in an array.
// Pseudocode:
// START
// SET array TO [1, 1, 2, 2, 3]
// CREATE function countDuplicates() THAT ACCEPTS AN ARGUMENT array
// SET obj AS EMPTY OBJECT
// FOR i from 0 TO LENGTH of array - 1
//      IF orray[i] NOT IN obj
//          obj[array[i]] = 1
//      ELSE
//          INCREMENT THE VALUE OF array[i]
//      ENDIF
// ENDFOR
// RETURN obj
// END

const array = [1, 1, 2, 2, 3];
function countDuplicates(array) {
    let obj = {};
    // for (let i = 0; i < array.length; i++) {
    //     if (!(array[i] in obj)) {
    //         obj[array[i]] = 1;
    //     } else {
    //         obj[array[i]]++;
    //     }
    // }
    array.forEach(num => {
        !(num in obj) ? obj[num] = 1 : obj[num]++;
    })
    return obj;
}

console.log(countDuplicates(array));
console.log('----------');

// Extension challenge: Find which number appeared the most.
// Pseudocode:
// START
// CREATE function findMostNumber(obj) that accepts countDuplicates(array) function AS ARGUMENTS
// SET array AS EMPTY array
// SET highest TO 1;
// FOR key AND value IN obj
//      IF value > highest THEN
//          highest = value
//          array = key
//      ELSE IF value = highest
//          psuh key TO array
//      ENDIF
// ENDFOR
// DISPLAY 'The number/s that appears most time is/are:'
// FOR i FROM 0 TO LENTGH of array - 1
//      DISPLAY array[i];
// ENDFOR
// END

function findMostNumber(obj) {
    let array = []
    let highest = 1;
    for (let [key, value] of Object.entries(obj)) {
        if (value > highest) {
            highest = value;
            array = [key];
        } else if (value === highest) array.push(key);
    }
    return array;
}

const counts = countDuplicates(array);
const mostNumbers = findMostNumber(counts);
console.log(mostNumbers);
console.log('----------');

// Warm Up Challenge.
// Task: Count how many even numbers are in an array.
// Pseudocode:
// START
// SET array to [1, 2, 3, 4, 5, 6]
// CREATE function countEVenNumbers() that accepts an argument array
// SET count TO 0
// FOR i FROM 0 TO LENGTH OF array - 1
//      IF array[i] MOD 2 = 0 THEN
//          INCREMENT count
//      ENDIF
// ENDFOR
// RETURN count
// END

{
    const array = [1, 2, 3, 4, 5, 6];
    function countEVenNumbers(array) {
        // let count = 0;
        // for (let i = 0; i < array.length; i++) {
        //     if (array[i] % 2 === 0) count++;
        // };
        // return count;

        return array.filter(num => num % 2 === 0).length;
    }

    const count = countEVenNumbers(array);
    console.log(`There ${count === 1 ? 'is' : 'are'} ${count} even number${count === 1 ? '' : 's'}.`);
}

console.log('----------');

// 

// 2. Find missing number → detect a missing integer in a sequence.
// Input: [1, 2, 4, 5]
// Output: missing 3

// Algorithm:
// Find the largest and lowest number.
// Create newArr in range of lowest to largest.
// Sum the newArr and arr.
// Return sumOfNewArr - sumOfArr

// Pseudocode:
// START
// SET arr to [1, 2, 4, 5]
// CREATE function findMissingNumber() that accept argument arr
// SET largest TO arr[0]
// SET lowest TO arr[0]
// FOR i FROM 0 TO lENGTH OF arr - 1
//      IF arr[i] > largest THEN
//           largest = arr[i]
//      ELSE IF arr[i] < lowest THEN
//           lowest = arr[i]
//      ENDIF
// ENDFOR
// SET newArr TO EMPTY array
// FOR i FROM lowest TO largest
//      PUSH i TO newArr
// ENDFOR
// LET sumOfNewArr TO 0
// FOR i FROM 0 TO LENGTH OF newArr - 1
//      sumOfNewArr += newArr[i]
// ENDFOR
// LET sumOfArr TO 0
// FOR i FROM 0 TO LENGTH OF arr - 1
//      sumOfArr += arr[i]
// RETURN sumOfNewArr - sumOfArr
// END

const arr = [1, 2, 4, 5];

function findMissingNumber(arr) {
    // Find the largest and lowest number.
    let largest = arr[0];
    let lowest = arr[0];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > largest) largest = arr[i];
    //     else if (arr[i] < lowest) lowest = arr[i];
    // }
    arr.forEach(num => {
        if (num > largest) largest = num;
        else if (num < lowest) lowest = num;
    });

    // Create newArr in range of lowest to largest.
    let newArr = [];
    for (let i = lowest; i <= largest; i++) {
        newArr.push(i);
    }

    // Sum the newArr and arr.
    let sumOfNewArr = 0;
    // for (let i = 0; i < newArr.length; i++) {
    //     sumOfNewArr += newArr[i];
    // }
    newArr.forEach(num => {
        sumOfNewArr += num;
    });
    let sumOfArr = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sumOfArr += arr[i];
    // }
    arr.forEach(num => {
        sumOfArr += num;
    });

    // Return sumOfNewArr - sumOfArr
    return sumOfNewArr - sumOfArr;
}

console.log(findMissingNumber(arr));
console.log('----------');

// 3. Check if two arrays have common elements.
// Goal: Write a function that checks whether two arrays share at least one common element. If they do, return or display "Common elements found", otherwise "No common elements".
// Input: [1, 2, 3], [4, 5, 2]
// Output: Common elements found

// Pseudocode:
// START
// lET arr1 TO [1, 2, 3]
// LET arr2 TO [4, 5, 2]
// CREATE function checkCommonElements() that takes two arguments arr1 and arr2
// SET count TO 0
// FOR i FROM 0 TO lENGTH OF arr1 - 1
//      FOR j FROM 0 TO LENGTH OF arr2 - 1
//          IF arr1[i] === arr2[j] THEN
//              INCREMENT count
//          ENDIF
//      ENDFOR
// ENDFOR
// IF count > 0 THEN
//      DISPLAY 'Common elements found'
// ELSE
//      DISPLAY 'No common elements'
// END

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 2];

function checkCommonElements(arr1, arr2) {
    let found = false;

    for (let num1 of arr1) {
        for (let num2 of arr2) {
            if (num1 === num2) {
                found = true
                break;
            };
        }
        if (found) break;
    }
    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr[i] === arr[j]) found = true;
    //         break;
    //     };
    // };
    // arr1.forEach(num1 => {
    //     arr2.forEach(num2 => {
    //         if (num1 === num2) found = true;
    //     });
    // });

    // if (count > 0) {
    //     console.log('Common elements found');
    // } else {
    //     console.log('No common elements');
    // }
    found ? console.log('Common elements found') : console.log('No common elements');
}

checkCommonElements(arr1, arr2);
console.log('----------');

// 4. Generate patterns → triangle, square, or pyramid using loops.

// i. Triangle
// Output:
// *
// **
// ***
// ****
// *****

// Pseudocode:
// START
// CREATE function generateTriangle() THAT ACCEPTS ARGUMENT times
// SET star TO '*'
// FOR i FROM 0 TO times - 1
//      DISPLAY star
//      star += '*'
// ENDFOR
// END

function generateTriangle(times) {
    let star = '*';
    for (let i = 0; i < times; i++) {
        console.log(star);
        star += '*';
    }
}
generateTriangle(5);
console.log('----------');

// ii. Square
// Output:
// *****
// *****
// *****
// *****
// *****

// Tips: 
// The outer loop controls the rows (how many lines).
// The inner loop controls the columns (what’s printed per line).

// Pseudocode:
// START
// CREATE function generateSquare() THAT ACCEPTS ARGUMENT times
// FOR i FROM 0 TO times - 1
//      SET star TO ''
//      FOR j FROM 0 TO j < times  
//          star += '*'
//      ENDFOR
//      DISPLAY star
// ENDFOR

function generateSquare(times) {
    for (let i = 0; i < times; i++) {
        let star = '';
        for (let j = 0; j < times; j++) {
            star += '*';
        }
        console.log(star);
    };
}
generateSquare(5);
console.log('----------');

// ii. Pyramid
// Output:
//     *
//    ***
//   *****
//  *******
// *********

// Algorithm:
// Inner Loop
// Display

// Pseudocode
// START
// CREATE function generatePyramid() that accept argument times
// FOR i FROM 1 TO times
//      SET space = 2 * i - 1
//      SET stars = times - i
//      DISPLAY `' '.repeat(space) + '*'.repeat(stars)`
// ENDFOR
// END

function generatePyramid(times) {
    for (let i = 1; i <= times; i++) {     // Start at 1 for easier math
        let spaces = times - i;            // Decrease each row
        let stars = 2 * i - 1;             // Increase each row
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
}
generatePyramid(9);
// Think outside the box, take advantage of traditional for loops.
console.log('----------');

// iii. Reversed pyramid
// Pseudocode:
// START
// CREATE function reversedPyramid() that accepts an argument times
// FOR i FROM  times TO 1s
//      SET spaces = times + 1
//      SET stars = 2 * i + 1
//      DISPLAY ' '.repeat(spaces) + '*'.repeat(stars)
// ENDFOR
// END

function reversedPyramid(times) {
    for (let i = times; i >= 1; i--) {
        let spaces = times - i;
        let stars = 2 * i - 1;
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
}
reversedPyramid(5);

// iV. generateDiamond
// Pseudocode:
// START
// CREATE a function generateDiamond() that ACCEPTS argument times
// Algo i: Loop for upper part
// FOR i from 1 TO times
//      SET spaces TO times - i
//      SET stars TO 2 * i - 1
//      DISPLAY ' '.repeat(spaces) + '*'.repeat(stars)
// ENDFOR
// Algo ii: Loop for bottom part
// FOR i FROM times - 1 to 1
//      SET spaces TO times - i
//      SET stars TO 2 * i - 1
//      DISPLAY ' '.repeat(spaces) + '*'.repeat(stars)
// ENDFOR
// END

function generateDiamond(times) {
    // Algo i: Loop for upper part
    for (let i = 1; i <= times; i++) {
        let spaces = times - i;
        let stars = 2 * i - 1;
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
    // Algo ii: Loop for bottom part
    for (let i = times - 1; i >= 1; i--) {
        let spaces = times - i;
        let stars = 2 * i - 1;
        console.log(' '.repeat(spaces) + '*'.repeat(stars));
    }
}

generateDiamond(5);

// 5. Bubble Sort (the classic algorithm that uses nested loops).