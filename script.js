const letsPlay = prompt('Would you like to play a 2 player game? [yes] or [no]: ');

// Declaring maximum number used for random function that doesn't change (global variable)
const maxNum = 5;

//Function based on what the user chooses 
function startGame() {
    
    if(letsPlay.toUpperCase() === 'YES') {
        userName = prompt('Enter name: ');
        startCombat(userName);
        alert('Results of the game are logged to console.');
    }
    else if (letsPlay.toUpperCase() === 'NO') {
        alert('Have a nice day!');
    }
    else {
        alert('Invalid input.')
    }
    console.log('Exit game.')
    }
    startGame();

//Function to run the game
function startCombat() {
    let userPts = 40;
    let grantName = 'Grant the Mighty Chicken';
    let grantPts = 10;
    let numOfWins = 0;

  // While loop to keep iterating when the user has more than 0 points and less than 3 wins
    while (userPts > 0 && numOfWins !=3) {
    let ranNum = getDamage(); //Get a random number
    userPts = userPts - ranNum; 
    grantPts = grantPts - ranNum;
    

    console.log(`${userName} has ${userPts} health left.`);
    console.log(`${grantName} has ${grantPts} health left.`);

    // Resets Grants points to 10 if less or equal to 0
    if (grantPts <= 0) {
        grantPts = 10;
        numOfWins++;

        console.log(`\n${grantName} defeated. ${userName} has ${numOfWins} out of 3 wins. \n\n`);
        }
        }
        getResults(userName, numOfWins);
        continueGame();
}

  //Function to generate num for random number of 1 or 2
function getDamage() {
  return Math.floor(Math.random() * maxNum) + 1;
}

// Function that ask for user's input to continue above while loop or exit out of loop
function continueGame() {
    var continueFlag = true;

    while (continueFlag) {
        var input = prompt('Would you like to attack or quit? Enter [attack] or [quit]: ');

        if(input.toUpperCase() === 'ATTACK') {
            startCombat();
            
            continueFlag = false;
        }
        else if (input.toUpperCase() === "QUIT") {
            alert('Thank you for playing!');
            
            continueFlag = false;
        }
        else {
            alert('Invalid input.');
        }
    }
}

//Function that determines win or loss
function getResults(userName, numOfWins) {
    if (numOfWins === 3)
        console.log(`${userName} has won the game with ${numOfWins} wins.\n\n`);
    else
        console.log(`${userName} has no points left.  ${numOfWins} lost the game.\n\n`);
}