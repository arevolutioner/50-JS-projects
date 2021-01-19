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

// Boo who

// function booWho(bool) {
//     if (bool===true || bool === false) {
//       return true;
//     }
//     return false
    
//   }
  
//   booWho(null);

// Title Case a Sentence

// function titleCase(str) {
//   let result = []

//   for ( let i = 0; i < str.split(" ").length; i++) {
//     result = str.split(" ")[i].toUpperCase();
//   }

//     // for ( let item of str.split(" ")) {
//     //   result = item.toUpperCase()
//     // }

      
//     return result;
//   }
  
//   titleCase("I'm a little tea pot");
//   console.log(titleCase("I'm a little tea pot"));

// The global variable
// var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add (arr, bookName) {
//   let newArray = [...arr];

//   newArray.push(bookName);
//   return newArray;
  
//   // Change code above this line
// }

// // Change code below this line
// function remove (arr, bookName) {
//   let newArray= [...arr];
//   if (newArray.indexOf(bookName) >= 0) {
//     newArray.splice(newArray.indexOf(bookName),1);
//     return newArray;

//     // Change code above this line
//     }
// }

// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);

// The global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line

// // var ratings = [];
// // for(var i=0; i < watchList.length; i++){
// //   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// // const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
// const ratings = watchList.map(item => ({
//   title: item["Title"],
//   rating: item["imdbRating"]
// }));

// // Only change code above this line

// console.log(JSON.stringify(ratings));

// The global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// // Only change code below this line

// var filteredList = watchList.map(({"Title": title, "imdbRating": ratings}) => ({title, ratings}))
// .filter(item => item.ratings >= 8.0);

// // Only change code above this line

// console.log(filteredList);

// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   // Only change code below this line
//   var newArray = [];
//   for (let i = 0; i <= this.length; i++) {
//     if (callback(this[i])  === true) {
//       newArray.push(this[i]);
//     }
//   }
//   // Only change code above this line
//   return newArray;
// };

// var new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

// let s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback){
//   // Only change code below this line
//   let newArray = [];
//   this.forEach(function(x) {
//     if (callback(x) == true) {
//       newArray.push(x);
//     }
//   });
//   // Only change code above this line
//   return newArray;
// };

// let new_s = s.myFilter(function(item){
//   return item % 2 === 1;
// });

// The global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// function getRating(watchList) {
//   // Add your code below this line
//   const averageRating = watchList.reduce(({ sum, count }, { Director: dir, imdbRating: rating },  idx, arr) => {
//     if (dir === 'Christopher Nolan') {
//       count++;
//       sum += Number(rating);
//     }
//     return idx === arr.length - 1
//       ? sum / count
//       : { sum, count };
//   }, { sum: 0, count: 0 });
//   // Add your code above this line
//   return averageRating;
// }
// console.log(getRating(watchList));

// function getRating(watchList){
//   // Add your code below this line
//   var count = 0;
//   var averageRating = watchList.reduce((sum,movie) =>  {
//     if (movie.Director == "Christopher Nolan") {
//       count+=1;
//       return sum + parseFloat(movie.imdbRating);
//     }
//     return sum;
//   }, 0) / count;
//   // Add your code above this line
//   return averageRating;
// }
// console.log(getRating(watchList));

// function getRating(watchList){
//   // Add your code below this line
//   var averageRating =
//   watchList
//     // Use filter to find films directed by Christopher Nolan
//     .filter(film => film.Director === "Christopher Nolan")
//     // Use map to convert their ratings from strings to numbers
//     .map(film => Number(film.imdbRating))
//     // Use reduce to add together their ratings
//     .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
//   // Divide by the number of Nolan films to get the average rating
//   watchList.filter(film => film.Director === "Christopher Nolan").length;
//   // Add your code above this line
//   return averageRating;
// }
// console.log(getRating(watchList));

/*/
We have defined a function named squareList. 
You need to complete the code for the squareList function using any combination of map(), 
filter(), and reduce() so that it returns a new array containing only the square of only the 
positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. 
An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
/*/


// const squareList = arr => {
//   // Only change code below this line
//   let newArr = [];
//   newArr = arr.filter(item => {
//     if (item > 0 && item % parseInt(item) === 0) {
//       return newArr.push(item)
//     }
//   }).map(item => item ** 2);
//   console.log(newArr)


//   return newArr;
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// function alphabeticalOrder(arr) {
//   // Only change code below this line
//   return arr.sort(function(a,b) {
//     return a === b ? 0 : a > b ? 1 : -1;
//   });


//   // Only change code above this line
// }
// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// Only change code below this line
function urlSlug(title) {
  //replace the spaces between words with (-)
   let newStr = title.split(" ").join("-");
   console.log(newStr);

  //convert all of the str's words into lower-cased letters
  // the output should not have any emtpy spaces
  
  newStr = title.map()


  return newStr;


}
// Only change code above this line
urlSlug(" Winter Is  Coming")