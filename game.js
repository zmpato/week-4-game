


var compScore = 0;
var yourScore = 0;
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;


// Score count
var wins = 0;
var losses = 0;

// FUNCTIONS
//-------------------------------------------------------------
function startGame() {
    // random number between 19 and 120 **not even sure this works cuz I saw 136 and idk what i did wrong**
    compScore = Math.floor(Math.random() * 120) + 19;
    console.log("compScore: " + compScore);

    // gemOne between 1 and 12
    gemOne = Math.floor(Math.random() * 12) + 1;
    console.log("gem1: " + gemOne);

    // gemTwo between 1 and 12
    gemTwo = Math.floor(Math.random() * 12) + 1;
    console.log("gem2: " + gemTwo);

    // gemThree between 1 and 12
    gemThree = Math.floor(Math.random() * 12) + 1;
    console.log("gem3: " + gemThree);

    gemFour = Math.floor(Math.random() * 12) + 1;
    console.log("gem4: " + gemFour);

    wins = 0;
    losses = 0;

    // Won function   
    function won() {
        alert("You Won!")
        wins++
        $('#wins').html(wins);
        reset();
    }

    // Lost function
    function lost() {
        alert("You Lost!")
        losses++
        $('#losses').html(losses);
        reset();
    }

    // Crystal 1 click function
    $("#gem1").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + gemOne;
        console.log(yourScore);
        // If yourScore is the same as compScore, run won function  
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking first crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 2 click function
    $("#gem2").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + gemTwo;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
        }
        // If your score is greater than compScore, run lost function
        else if (yourScore > compScore) {
            lost();

        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;

    });
    // Crystal 3 click function
    $("#gem3").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + gemThree;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
            // If your score is greater than compScore, run lost function
        } else if (yourScore > compScore) {
            lost();
        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;
    });

    // Crystal 4 click function
    $("#gem4").click(function() {

        // Adds crystal scores together
        yourScore = yourScore + gemFour;
        console.log(yourScore);
        // If yourScore is the same as compScore run won function   
        if (yourScore == compScore) {
            won();
            // If your score is greater than compScore, run lost function
        } else if (yourScore > compScore) {
            lost();
        }
        // Selects Id yourScore from HTML and displays score selected from clicking second crystal
        $('#yourScore').html(yourScore);
        // document.querySelector("#yourScore").innerHTML = yourScore;
    });


    $('#yourScore').html(yourScore);
    $('#randomScore').html(compScore);
    $('#wins').html(wins);
    $('#losses').html(losses);

    // document.querySelector("#yourScore").innerHTML = yourScore;
    // document.querySelector("#randomScore").innerHTML = compScore;
    // document.querySelector("#wins").innerHTML = wins;
    // document.querySelector("#losses").innerHTML = losses;
}

// Resets the game once you have either won or lost
function reset() {
    yourScore = 0;

    compScore = Math.floor(Math.random() * 120) + 19;
    console.log("compScore: " + compScore);

    crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log("gem1: " + gemOne);

    crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log("gem2: " + gemTwo);

    crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("gem3: " + gemThree);

    crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log("gem4: " + gemFour);


    $('#yourScore').html(yourScore);
    $('#randomScore').html(compScore);
    $('#wins').html(wins);
    $('#losses').html(losses);

}
// *CRIES TEARS OF JOY CUZ FINALLY DONE*



startGame();