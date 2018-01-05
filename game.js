


var compScore = 0;
var yourScore = 0;
var gemOne = 0;
var gemTwo = 0;
var gemThree = 0;
var gemFour = 0;


// Score count
var wins = 0;
var losses = 0;

// functions

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

    // click function
    $("#gem1").click(function() {

        // Add gems
        yourScore = yourScore + gemOne;
        console.log(yourScore);
        // win 
        if (yourScore == compScore) {
            won();
        }
        // loss
        else if (yourScore > compScore) {
            lost();

        }
        
        $('#yourScore').html(yourScore);
        

    });
    // gem 2 click
    $("#gem2").click(function() {

        // adds scores
        yourScore = yourScore + gemTwo;
        console.log(yourScore);
        // won   
        if (yourScore == compScore) {
            won();
        }
        // loss
        else if (yourScore > compScore) {
            lost();

        }
        
        $('#yourScore').html(yourScore);
        

    });
    // gem 3 function
    $("#gem3").click(function() {

        // adds score
        yourScore = yourScore + gemThree;
        console.log(yourScore);
        // won  
        if (yourScore == compScore) {
            won();
            // loss
        } else if (yourScore > compScore) {
            lost();
        }
        
        $('#yourScore').html(yourScore);
        
    });

    // gem 4 score
    $("#gem4").click(function() {

        // adds scores
        yourScore = yourScore + gemFour;
        console.log(yourScore);
        // won  
        if (yourScore == compScore) {
            won();
            // loss
        } else if (yourScore > compScore) {
            lost();
        }
        
        $('#yourScore').html(yourScore);
        
    });


    $('#yourScore').html(yourScore);
    $('#randomScore').html(compScore);
    $('#wins').html(wins);
    $('#losses').html(losses);

    
}

// restarts game afer loss or win
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