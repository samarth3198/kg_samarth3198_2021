var arguments = process.argv; // Getting Arguments from the command line
var numbers = arguments.slice(2); // Getting only the required arguments from the command line

// Declaring a mapping from integers to phonetic representations
const numberMap = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
};

let result = []; // Array of Strings for output

// For each number
for (let number of numbers) {
    let converted = ""; // Taking string variable to store string representation of each digit

    for(let digit of number)
        converted += numberMap[digit]; // Concatenating string mapping of each digit for a particular number

    result.push(converted); // Adding string representation of each number into array of strings
}

console.log(result.join(",")); // Printing out the resultant array to the console