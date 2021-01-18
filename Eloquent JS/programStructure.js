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

// let users = {
//     Alan: {
//       online: true
//     },
//     Jeff: {
//       online: true
//     },
//     Sarah: {
//       online: true
//     }
//   }



// function countOnline(usersObj) {
//     let count = 0;
//     for (let user in usersObj){

//         if (usersObj[user].online === true) {
//             count++;

//         } 
//     }
//     return count;

//   }

//   countOnline(users);
//   console.log('countOnline:', countOnline(users))

// Reverse string

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");
// console.log('reverseString:', reverseString("hello"))


// function reverseString(str) {
//     let newString = "";

//     for (let i = str.length-1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;



// }

// reverseString('hello');
// console.log('reverseString:', reverseString('hello'))

// function factorialize(num) {
//     console.log(num)
//     let result;
//     if (num ===1 || num === 0) {
//       return 1
//     }
//     if (num === 2) {
//       return 2
//     }
//     if ( num > 2) {
//        result = factorialize(num-1)*num;


//     }
//     return result;
//   }

//   factorialize(5);
//   console.log('factorialize:', factorialize(5))

// function findLongestWordLength(str) {
//     let arrayWords = str.split(" ");
//     let longestWord = 0;

//     for (let i = 0; i < arrayWords.length; i++) {
//         if (arrayWords[i].length > longestWord) {
//             longestWord = arrayWords[i].length

//         }

//     }
//     return longestWord;




//   }

//   findLongestWordLength("The quick brown fox jumped over the lazy dog");
//   console.log('findLongestWordLength:', findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largestNumber = arr[i][0];
//         for (let j = 1; j < arr[i].length; j++) {
//             if (arr[i][j] > largestNumber) {
//                 largestNumber = arr[i][j];
//             }

//         }
//          result[i] = largestNumber
//     }
//     return result;




//   }

//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// Confirm the Ending

// function confirmEnding(str, target) {
//     if (str.endsWith(target)) {
//         return true;

//     }

//   }

//   confirmEnding("Bastian", "n");
//   console.log('  confirmEnding("Bastian", "n");:',   confirmEnding("Bastian", "n"));

// function confirmEnding(str, target) {
//     return str.slice(str.length - target.length) === target;


//   }

//   confirmEnding("Bastian", "n");
//   console.log(' confirmEnding("Bastian", "n");:',  confirmEnding("Bastian", "n"));

// function confirmEnding(str, target) {
//     return str.slice(-target.length) === target
//   }

//   confirmEnding("Bastian", "n");

// Repeat a String Repeat a String

// function repeatStringNumTimes(str, num) {
//     if (num < 0) {
//       return "";
//     }else {
//         if( num === 10) {
//             return str
//         }
//     }
//     let repeat = ""
//     for (let i=0; i < num; i++) {
//         repeat += str;
//     }

//     return repeat;
//   }

//   repeatStringNumTimes("abc", 3);
//   console.log('  repeatStringNumTimes("abc", 3):',   repeatStringNumTimes("abc", 3))

// Truncate a String

// function truncateString(str, num) {
//     let result = "";
//     if (num === 0) {
<<<<<<< HEAD
//         return str;
//     }
//     if (str.length > num) {

//         result = str.slice(0, num) + "...";
//         return result;
//     }else {
//         return str;
//     }
    
    
    
//   }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
//   console.log('truncateString:', truncateString("A-tisket a-tasket A green and yellow basket", 8))
// Finders Keepers


// function findElement(arr, func) {
//     let num = 0;
//     for  (let i =0; i <arr.length; i++) {
//         num = arr[i];
//         if (func(num)) {
//             return num
//         }
//     }
//     return undefined 
   
//   }
  
//   findElement([1, 2, 3, 4], num => num % 2 === 0);
//   console.log('findElement:', findElement([1, 2, 3, 4], num => num % 2 === 0))
=======
//         return str
//     }
//     result = str.slice(0, num+1) + "...";


//     return result;

//   }

//   truncateString("A-tisket a-tasket A green and yellow basket", 8);

// function titleCase(str) {
//     str = str.split(' ');

//     for (let i = 0; i < str.length; i++) {
//       str[i] = str[i].toLowerCase().split('');
//       str[i][0] = str[i][0].toUpperCase();
//       str[i] = str[i].join('');
//     }

//     return str.join(' ');
//   }

//   titleCase("I'm a Little tea pot");

function frankenSplice(arr1, arr2, n) {
    let resultArray = [];
    let copiedArr2 = arr2.slice();
    let cutArr2 = copiedArr2.splice(n)
    for (let i = 0; i < arr1.length; i++) {
        copiedArr2.push(arr1[i])
    }
    resultArray = copiedArr2.concat(cutArr2)
    return resultArray;
}

frankenSplice([1, 2, 3], [4, 5, 6]);


>>>>>>> 2d6a5d497eac457c11cda246ae0f70cac7160bc9

// Boo who

// function booWho(bool) {
//     if (bool===true || bool === false) {
//       return true;
//     }
//     return false
    
//   }
  
//   booWho(null);

// Title Case a Sentence

function titleCase(str) {
  let result = []

  for ( let i = 0; i < str.split(" ").length; i++) {
    result = str.split(" ")[i].toUpperCase();
  }

    // for ( let item of str.split(" ")) {
    //   result = item.toUpperCase()
    // }

      
    return result;
  }
  
  titleCase("I'm a little tea pot");
  console.log(titleCase("I'm a little tea pot"));