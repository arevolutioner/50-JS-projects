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

const chessBoard = (n) => {
    let size = n;

    let board = "";

    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if ((x + y) % 2 == 0) {
            board += " ";
            } else {
            board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);

};

chessBoard(10)
