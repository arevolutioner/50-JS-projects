// GETTING THE INPUT
// change the vlaues if you want to check the program with different inputs
const inputDimensions = [
    [2,4],
    [1,1,2,2],
    [3,3,4,4]
];


// assign the columns and rows from the input 
lines = inputDimensions[0][0];
console.log('rows:', rows)
columns = inputDimensions[0][1];
console.log('columns:', columns)

// VALIDATION

// check that - N and M should define a valid area of less than 100 lines/ columns.
if (lines > 100 && columns > 100 ) {
    console.log("The size must be smaller than 100.");
}
// check that - the input has even numbers of rows and columns.
if (lines % 2 !==0 && columns % 2 !== 0) {
    console.log("Please input even numbers");
}

// check that - the input has exactly that number of rows.
if (inputDimensions[0][0] !== inputDimensions.length-1){
    console.log("The rows have to have exactly the same number of rows as the input of M");
}

// check that - the input has exactly that number of  columns.
if (inputDimensions[0][1] !== inputDimensions[1].length){
    console.log("The columns have to have exactly the same number of columns as the input of N");

}










