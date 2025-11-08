// Project: Lowest possible change
// Goal:
//      Find a way to change an amount to lowest possible change.
//      Return and object with bills and it's value

// Objectives:
// We have 13,968 - the total cash we need to distribute evenly on a number of person.
// We have 8 person.

// Algorithm:
// Get cashPerPerson - Divide the total cash by the number of person.
// Find the highest possible bill needed. Bills are [1000, 500, 100, 50, 20, 10, 5, 1]

// Pseudocode:
// START
// Create a function getLowestPossibleChange() that accepts arguments totalCash and the person
// SET bills TO {1000: 0, 500: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0}
// SET cashPerPerson = totalCash / person
// FOR EACH keys in bills
//      IF cashPerPerson >= key
//          SET billsFit TO cash / keys
//          key += billsFit
//          cashPerPerson = cashPerperson - key * billsFit
//      ENDIF
// ENDFOR
// return bills
//END

function getLowestPossibleChange(totalCash, person) {
    let bills = {1000: 0, 500: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0};
    let cashPerPerson = totalCash / person

    let denominations = Object.keys(bills).map(Number).sort((a, b) => b - a);

    for (let key of denominations) {
        if (cashPerPerson >= key) {
            let billsFit = Math.floor(cashPerPerson / key);
            bills[key] += billsFit * person;
            cashPerPerson -= key * billsFit;
        }
    }
    return bills;
}
console.log(getLowestPossibleChange(13968, 8));
console.log(getLowestPossibleChange(12222, 7));