// Some Intermediate Level of Pseudocode

// 1. Find the second largest number in an array.
// START
// SET array TO [2, 1, 4, 3]
// SET largest TO first element
// FOR each number in array
//     IF number > largest THEN
//         largest = number
//     ENDIF
// ENDFOR
// SET secondLargest TO smallest possible number
// FOR each number in array
//     IF number < largest AND number > secondLargest THEN
//         secondLargest = number
//     ENDIF
// ENDFOR
// DISPLAY secondLargest
// END

const array = [2, 1, 4, 3];

function getSecondLargestNumber(array) {
    let largest = array[0];
    array.forEach(number => {
        if (number > largest) {
            largest = number;
        };
    });

    let secondLargest = array[0];
    array.forEach(number => {
        if (number < largest && number > secondLargest) {
            secondLargest = number;
        };
    });
    return secondLargest;
}

console.log(getSecondLargestNumber(array));
// 3

// 2. Check if a word is a palindrome

// Pseudocode:
// START
//   SET word TO 'level'
//   SET reversedWord TO word split into characters
//   REVERSE reversedWord
//   JOIN reversedWord back into a string

//   IF word = reversedWord THEN
//       DISPLAY "Palindrome"
//   ELSE
//       DISPLAY "Not a palindrome"
//   ENDIF
// END

function isPalindrome(word) {
    const reversedwWord = word.split('').reverse().join('');
    return reversedwWord === word ? 'Palindrome' : 'Not a palindorme';
};

console.log(isPalindrome('level'));

// 3. Count the vowels in a string

// Pseudocode:
// START
// SET word to the input string
// SET vowels to ['a', 'e', 'i', 'o', 'u']
// SET count to 0
// FOR EACH character IN word
//     IF vowels includes character
//         INCREMENT count by 1
//     ENDIF
// ENDFOR
// DISPLAY count
// END


function countVowels(word) {
    return word.split('').filter(char => ['a','e','i','o','u'].includes(char)).length;
}

console.log(countVowels('hello world'));
// 3

// 4. Merge two array and sort them.

// Pseudocode:
// START
// SET arrays, a TO [3, 1, 4] AND b [2, 5]
// SET newArray TO empty array
// FOR EACH of number IN a
//      PUSH a TO newArray
// ENDFOR
// FOR EACH of number IN b
//      PUSH a TO newArray
// ENDFOR
// SET sortedArray TO EMPTY array
// SET largest TO first element OF newArray
// FOR each number OF newArray
//      IF number > than largest
//          
//          