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