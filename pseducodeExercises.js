// 1. Find the largest number among three numbers.

// Pseudocode:
// START
// SET first, second, third
// IF first > second AND first > third THEN
//     DISPLAY first
// ELSE IF second > first AND second > third THEN
//     DISPLAY second
// ELSE
//     DISPLAY third
// ENDIF
// END

// Code:
let first = 1;
let second = 2;
let third = 3;

function getLargestNumber(first, second, third) {
    if (first > second && first > third) {
    return first;
    } else if (second > first && second > third) {
        return second;
    } else {
        return third;
    };
}

console.log(getLargestNumber(first, second, third));
// 3

// 2. Check if a number is even or odd.

// Pseudocode:
// START
// SET number TO 4
// IF number MOD = 0 THEN
//      DISPLAY 'even'
//  ELSE
//      DISPLAY 'odd'
// ENDIF
// END

let number = 5;

function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    };
}

console.log(checkOddOrEven(number));
// odd

// 3. Calculate the factorial of a number.

// Pseudocode:
// START
// SET result TO 1
// FOR i FROM 1 TO number
//      result = result * i
// ENDFOR
// DISPLAY result;
// END

function factorial(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(number));
// 120

// 4. Find the largest number in an array.

// Pseudocode:
// START
// SET an array TO [2, 9, 4, 7, 5]
// SET highestNum to array[0]
// FOR each number in array
//     IF number > highestNum THEN
//         highestNum = number
//     ENDIF
// ENDFOR
// END

const arr = [2, 9, 4, 7, 5];

function getHighestNum(arr) {
    let highestNum = arr[0];
    arr.forEach(number => {
        if (number > highestNum) {
            highestNum = number;
        }
    });
    return highestNum;
}

console.log(getHighestNum(arr));
// 9

// 5. Count how many numbers are even in an array.

// START
// SET array TO [2, 5, 8, 11, 14]
// SET count TO 0
// FOR each number in array
//      IF number MOD 2 = 0 THEN
//          increment count
//      ENDIF
// ENDFOR
// DISPLAY count
// END

const array = [2, 5, 8, 11, 14];

function countEvenNumber(array) {
    let count = 0;
    array.forEach(number => {
        if (number % 2 === 0) {
            count++;
        };
    });
    return count;
}

console.log(countEvenNumber(array));
// 3

// 6. Reverse the elements in an array

// Pseudocode:
// START
// SET array TO [1, 2, 3, 4, 5]
// SET result TO an empty array
// FOR each number of array
//      unshift num TO result
// ENDFOR
// DISPLAY result
// END

{
    const array = [1, 2, 3, 4, 5];

    function reverseArrayElements(array) {
        let result = [];
        array.forEach(num => {
            result.unshift(num);
        });
        return result;
    };

    console.log(reverseArrayElements(array));
    // [ 5, 4, 3, 2, 1 ]
}

// 7. Find the Maximum Number in an Array.

// Pseducode:
// START
// SET numbers TO [3, 7, 2, 9, 5]
// SET max TO first element of numbers
// FOR each number in numbers
// IF number > max THEN
//      SET max TO number
// ENDIF
// ENDFOR
// DISPLAY max
// END

const numbers = [3, 7, 2, 9, 5];

function findMaxNum(numbers) {
    let max = numbers[0];
    numbers.forEach(number => {
        if (number > max) {
            max = number;
        };
    });
    return max;
}

console.log(findMaxNum(numbers));
// 9

