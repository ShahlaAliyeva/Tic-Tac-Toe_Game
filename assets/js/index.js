let columns = document.querySelectorAll('.column');
columns = Array.from(columns);
console.log(columns);

let currentPlayer = 'X'
let fisrtUser = 0;
let secondUser = 0;
let fisrtUserScore = document.getElementById('firstScore');
let secondUserScore = document.getElementById('secondScore');

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8]
];

function checkWinner() {
    winningCombinations.forEach(function (combination) {
        let check = combination.every(indx => columns[indx].innerText.trim() == currentPlayer);
        if (check) {
            console.log('Check current value: '+check)
            // alert(currentPlayer + ' has won')
            if (currentPlayer == 'X') {
                fisrtUser++;
                fisrtUserScore.innerText = fisrtUser;
                console.log('First user score: ' + fisrtUserScore.innerText)
            } else if (currentPlayer == 'O') {
                secondUser++;
                secondUserScore.innerText = secondUser;
                console.log('Second user score: ' + secondUserScore.innerText)
            } 
            // window.location.reload();
            playGameAgain();
        } 
    })
}

function playGameAgain() {
    $('.column').empty();
    playGame();
    console.log('Play game again function is called')
}



function playGame() {
    currentPlayer = 'X'
    columns.forEach(function (column) {
        $(column).on('click', function () {
            if ($(column).text().trim() != '') {
                return
            }
            $(column).text(currentPlayer);
            
            checkWinner();
            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
            // if (currentPlayer == 'X') {
            //     currentPlayer = 'O';
            // } else {
            //     currentPlayer = 'X';
            // }
            
        })
    })
}

playGame();












/*
var userChoice = '';
var firstBoardCount = 0;
var secondBoardCount = 0;
var thirdBoardCount = 0;
var forthBoardCount = 0;
var fifthBoardCount = 0;
var sixthBoardCount = 0;
var seventhBoardCount = 0;
var eighthBoardCount = 0;
var ninthBoardCount = 0;


function chooseYourSide() {
    userChoice = prompt('X or O please choose one of them');
    userChoice = userChoice.toUpperCase();
}
$('.column').on('click', function writeYourChoice() {
    chooseYourSide();
    if (userChoice !== null && (userChoice === 'O' || userChoice === 'X')) {
        $(this).html(userChoice);
    } else {
        alert("Your choice isn't true. Please choose true one");
        writeYourChoice();
    }

})
 */

/*
var computerChoice = 0;
var choicesArray = ['X', 'O'];
//Columns JSON
var columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

var columnChoice = 0;

//Computer Choice with random
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choiceComputerSide() {
    computerChoice = random(0, 1);
    columnChoice = random(0, 8);
    console.log(choicesArray[computerChoice]);

    // var column = $('.column').attr('data-column');

    if (columns[columnChoice] === dataColumns.data.column) {

        $('.column').text(choicesArray[computerChoice]);
    }

    console.log('Column random: ', columns[columnChoice]);
    console.log('Data JSON: ', dataColumns.data.column)
    console.log($('.column').attr('data-column'))

}

choiceComputerSide()
*/