// for (let i = '#'; i.length < 8; i +='#'){
//     console.log(i)
// };

// FIzzBuzz


// for (let i=0; i <= 100; i++){
    
//     if  (i % 3 == 0 && i % 5 ==0) {
//         console.log("FizzBuzz")
//     }  else if (i % 5 == 0){
//         console.log('Buzz')
//     }else if (i % 3 == 0){
//         console.log("Fizz")
//     }else {
//         console.log(i)
//     }

// };

// Chessboard
// for (let i=0; i<=7; i ++) {
//     if (i % 2 == 0){
//         console.log(" # # # #")
//     } else {
//        console.log("# # # # ")
//     }
// };

// const chessBoard = (n) => {
//     let size = n;

//     let board = "";

//     for (let y = 0; y < n; y++) {
//         for (let x = 0; x < n; x++) {
//             if ((x + y) % 2 == 0) {
//             board += " ";
//             } else {
//             board += "#";
//             }
//         }
//         board += "\n";
//     }

//     console.log(board);

// };

// chessBoard(10)

// FarmInventory

// function printFarmInventory(cow, chicken, pigs){
//     console.log(`${animalCounts(cow, 3)} Cows`);
//     console.log(`${animalCounts(chicken, 3)} Chicken`);
//     console.log(`${animalCounts(pigs, 3)} Pigs`);
// };

// function animalCounts(number, width){
//     let animalString = String(number);
//     while (animalString.length < width){
//          animalString =  "0" + animalString 

//     }
//     return animalString

// };

// printFarmInventory(10,34,20);

// MINIMUM FUNCTION

// const minNumber = (num1, num2) => {
//     if (num1 < num2){
//         return num1
//     } else if (num1 === num2){
//         return num1

//     } else {
//         return num2
//     };

// };
// minNumber(20, 40);
// console.log('minNumber:', minNumber(20,40))


// function isEven(num){
//     if (num < 0){
//         console.log("Input should be a positive number!")
//     };
//     if (num % 2 == 0){
//         return true

//     } else {
//         return false
//     }

// };

// function isEven(num){
//     if (num < 0){
//         console.log("Input should be a positive number!")
//     } else if (num == 0) {
//        return true
//     } else if (num == 1){
//         return false 
//     } else {
//         return isEven(num-2)

//     }
// };

// console.log('isEven:', isEven(30));

// Bs counting

// function countBs(str){
//     return countChar(str, "B");
    
   
// };

// function countChar(str, char){
//     let countChr = 0;
//     for (let position = 0; position < str.length; position++){
//         if (str[position] == char){
//             countChr++
//         }
//     }
//     return countChr


// };

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];

// function lookUpProfile(name, prop) {
//     for (var x = 0; x < contacts.length; x++) {
//         if (contacts[x].firstName === name) {
//           if (contacts[x].hasOwnProperty(prop)) {
//             return contacts[x][prop];
//           } else {
//             return "No such property";
//           }
//         }
//       }
//     return "No such contact";

// }




// lookUpProfile("Kristian", "lastName");


// Generate Random Fractions with JavaScript

// function randomFraction() {
//     var result = 0;
//     while (result === 0) {
//       result = Math.random();
//     }
  
//     return result;
   
// }

// Use Recursion to Create a Countdown

// function countdown(n){
//     return;
//   }

// function countup(n) {
 
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5)); 


// function rangeOfNumbers(startNum, endNum) {
//   let arr;
//   if (startNum > endNum){
//     return []
//   } else {
//     arr = rangeOfNumbers(startNum, endNum -1);
//     arr.push(endNum)
//     // return arr;
//   }
//   return arr;

  
// };

// rangeOfNumbers(3, 9);
// console.log('rangeOfNumbers:', rangeOfNumbers(3, 9))

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;
    
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });

// makeServerRequest.then(result => {
//   console.log(result);
// });
// makeServerRequest.catch(error => {
//   console.log(error)
// })

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     for (let i = 0; i < m; i++) {
//       // Adds the m-th row into newArray
//       let row = [];  //Initiate a new row after every iteration.
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push(0)
//         ;
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     }
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);


// function filteredArray(arr, elem) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].indexOf(elem) == -1) { //If the elem is not in the arr[i] then update the arr with the arr[i]
//         newArr.push(arr[i])
//       }
//     }
//     return newArr;
//   }
  
//   console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));