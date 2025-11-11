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