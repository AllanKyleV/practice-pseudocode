// 1. Extract middle elements using slice()
let nums = [10, 20, 30, 40, 50];
// Goal: get [20, 30, 40]
console.log(nums.slice(1, 3));

// 2. Remove the last two items using splice()
let pets = ['dog', 'cat', 'parrot', 'hamster', 'fish'];
// Goal: remove last two
pets.splice(3, 2)
console.log(pets);

// 3. Insert new items in the middle
let letters = ['A', 'B', 'E', 'F'];
// Goal: insert 'C' and 'D' between B and E
letters.splice(2, 0, 'C', 'D');
console.log(letters);

// 4. Replace an element
let planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
// Goal: replace 'Venus' with 'Jupiter'
planets.splice(1, 1, 'Jupiter');
console.log(planets);

// 5. Make a shallow copy of the whole array using slice()
let arr = [1, 2, 3, 4];
// Goal: copy into a new array (not reference)
console.log(arr.slice(0, 4));

console.log('----------------')

// Level 2
// 1. Trim Front & Back (Slice Challenge)
let scores = [5, 9, 10, 7, 8, 6];
console.log(scores.slice(1, -1));

// 2. Replace Center Element (Splice Challenge)
let items = ['pen', 'pencil', 'eraser', 'marker'];
items.splice(items.indexOf('eraser'), 1, 'notebook');
console.log(items);

// 3. Insert Element Dynamically
let fruits = ['apple', 'banana', 'mango'];
fruits.splice(fruits.indexOf('mango'), 0, 'orange');
console.log(fruits);

// 4. Remove All After a Certain Item
{
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    letters.splice(letters.indexOf('C') + 1);
    console.log(letters);
}

// 5. Extract Last Half (Slice Challenge)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// Get array length, devide by 2(half), remove first half.
console.log(numbers.slice(numbers.length / 2));

// Reminder:
// slice - get a new array without modifying the original. slice(start, end).
// splice - remove, insert, add, modify the original array. splice(start, deleteCount, item1, item2)

console.log('----------------')

// Level 3
// 1. Remove All Odd Numbers
{
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    // Remove all odd numbers from the array using splice inside a loop.
    nums.forEach(num => {
        if (num % 2 !== 0) nums.splice(nums.indexOf(num), 1);
    });
    console.log(nums);
}

// 2. Move Specific Elements to End
{
    let items = ['pen', 'pencil', 'eraser', 'pen', 'marker', 'pen'];
    // Move all 'pen' items to the end of the array, keep the order of others
    items.forEach(item => {
        if (item === 'pen') {
            items.splice(items.indexOf(item), 1)
            items.splice(-1, 0, item)
        };
    });
    console.log(items);

    // for (let i = 0; i < items.length; ) {
    //     if (items[i] === 'pen') {
    //         let [pen] = items.splice(i, 1);
    //         items.push(pen);
    //     } else {
    //         i++;
    //     }
    // }
    // console.log(items);
}

// 3. Trim Until Condition
{
    let scores = [2, 5, 8, 1, 9, 3];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 5) break;
        scores.splice(i, 1);
        i--;
    }
    console.log(scores);
}

// 4. Duplicate Specific Items
{
    let letters = ['A', 'B', 'C', 'B', 'D'];
    // Duplicate every 'B' in the array right after itself
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === 'B') {
            letters.splice(i + 1, 0, 'B');
            i++;
        };
    }
    console.log(letters);
}

// 5. Reverse First N Elements
{
    let arr = [1, 2, 3, 4, 5, 6];
    // Reverse the first 4 elements only using slice/splice
    
    // Logic:
    // Get the first 4 elements.
    // Reverse it.
    // Insert back to original array.

    let firstFour = arr.slice(0, 4);
    firstFour.reverse();
    arr.splice(0, 4, ...firstFour);
    console.log(arr);
}

// Overview:
// 1. Use traditional for loops in splices/slice intead of forEach() method. forEach() doesn’t adjust to array length changes when you splice inside it.
// 2. Again, use traditional for loops. (Ps. my commeted code is crashing my computer when run though.)
// Question: what does i++ at the end do exatly?
// 3. Need to know a little about these i--, et the end.
// 4. I think I should know deep about this i++ at the end.
// 5. Thanks!

// Level 4: Slice & Splice + Array Restructuring Algorithms
// Challenge 1: Chunk an Array
{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    // Split the array into subarrays of size 3 dynamically
    // Result: [[1,2,3],[4,5,6],[7]]

    // Logic: loop array, splice(0, 3) push

    // Pseudocode:
    // START
    // SET subArrays to empty array
    // FOR i from 0 to length of arr - 1
    //      IF arr length >= 3 THEN
    //          PUSH arr.splice(0, 3) to subArrays
    //      ENDIF
    // ENDFOR
    //      PUSH arr to subArrays
    // DISPLAY subArrays
    // END

    // let subArrays = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.length >= 3 ) subArrays.push(arr.splice(0, 3));
    // }
    // subArrays.push(arr);
    // console.log(subArrays);

    // Refactoring using while loops:
    // Use while when array length is shrinking dynamically, avoids looping extra times.

    // let subArrays = [];
    // while (arr.length > 0) {
    //     subArrays.push(arr.splice(0, chunkSize));
    // }
    // console.log(subArrays); // [[1,2,3],[4,5,6],[7]]
    // We're not needing the push for [7] here.
}

// Challenge 2: Rotate Array Right by N
{
    let nums = [1, 2, 3, 4, 5];
    let n = 2; // rotate right by 2 positions
    // Goal: [4, 5, 1, 2, 3]

    // Logic: Loop array, 
}

// Challenge 3: Filter and Reorder.
// Filter numbers that are greater than or equal to 5.
// Logic: Get the number greater than 5, push it to new array
// Then push the rest of the array

// Pseudocode:
// START
// SET num to 5
// SET higher to empty array
// SET lower to empty array
// FOR i from 0 to length of items - 1
//      IF item[i] >= num THEN
//          push item[i] to higher
//      ELSE
//          push item[i] to lower
//      ENDIF
// ENDFOR
// return higher.concat(lower)

// Logic: Target the number that is less than 5, remove it then add it/them at the end.


// Pseducode for another way using splice():
// Start
// 

{
    let items = [5, 2, 9, 1, 5, 6];
    // let num = 5;
    // let higher = [];
    // let lower = [];
    // for (let i = 0; i < items.length; i++) {
    //     items[i] >= num ? higher.push(items[i]) : lower.push(items[i]);
    // }
    // console.log(higher.concat(lower));


    // let num = 5;
    // for (let i = 0; i < items.length; i++) {
    //     if (items[i] < num) {
    //         items.push(items[i]);
    //         items.splice(i, 1);
    //     }
    // }
    // console.log(items);
    let num = 5;

    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i] < num) {
            items.push(items[i]);
            items.splice(i, 1);
        }
    }
    console.log(items); // [5, 9, 5, 6, 2, 1]
}

// Moving on to challenge 4.
// Challenge 4: Merge Arrays Alternatively

// Logic: 
// Loop length of 2 arrays.
// Loop both inside total length.

// Pseudocode:
// start
// set length = arr1.length + arr2.length
// set result to []
// for i from 0 to length - 1
//      for j from 0 to length of arr1 - 1
//          push arr1[i] to result
//      endfor
//      for k from o to length of arr2 - 1
//          push arr[2] to result
//      endfor
// endfor
// display result
// end

{
    let arr1 = [1, 2, 3];
    let arr2 = ['A', 'B', 'C', 'D'];
    let result = [];

    let length = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < length; i++) {
        // let [num1] = arr1.slice(i, i + 1);
        // let [num2] = arr2.slice(i, i + 1);

        if (arr1[i] !== undefined) result.push(arr1[i]);
        if (arr2[i] !== undefined) result.push(arr2[i]);
    }
    console.log(result);
}