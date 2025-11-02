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



// 2. Find missing number → detect a missing integer in a sequence.
// Pseudocode:
// START
// 

// 3. Check if two arrays have common elements.

// 4. Generate patterns → triangle, square, or pyramid using loops.

// 5. Bubble Sort (the classic algorithm that uses nested loops).