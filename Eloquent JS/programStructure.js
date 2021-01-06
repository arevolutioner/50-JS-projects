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






