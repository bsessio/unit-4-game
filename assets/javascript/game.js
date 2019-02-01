// All defined variables for the page.
let
    win = 0,
    loss = 0,
    score = 0,
    currentScore = 0,
    crystalNumber = 0,
    diamond = 0,
    amber = 0,
    emerald = 0,
    sapphire = 0;

// Random Number Generator for all functional needs throughout the page
let rng = function (x, y) {
    return Math.floor((Math.random() * x) + y);
}

// Core game chassis, which is used when page loads, and on every reset of the game.
let gameCore = function () {
    // Defines the crystal number (the target to be achieved)
    crystalNumber = rng(102, 19);
    // Places the crystal number, wins, losses, and sets current total to 0.
    $(".crystalNumber").html(crystalNumber);
    $(".winHolder").html("Wins: " + win)
    $(".lossHolder").html("Losses: " + loss)
    currentScore = 0;
    $(".score").html(currentScore);
    // Defines the value of each crystal button.
    diamond = rng(12, 1);
    amber = rng(12, 1);
    emerald = rng(12, 1);
    sapphire = rng(12, 1);
}
// Starting the game off right.
gameCore();

// The four click functions for each of the crystal buttons.
$(".diamond").on("click", function () {
    currentScore = currentScore + diamond;
    $(".score").html(currentScore);
    winLoss();
});
$(".amber").on("click", function () {
    currentScore = currentScore + amber;
    $(".score").html(currentScore);
    winLoss();
});
$(".emerald").on("click", function () {
    currentScore = currentScore + emerald;
    $(".score").html(currentScore);
    winLoss();
});
$(".sapphire").on("click", function () {
    currentScore = currentScore + sapphire;
    $(".score").html(currentScore);
    winLoss();
});

// The function which decides win and loss.
let winLoss = function () {
    if (parseInt(currentScore) === parseInt(crystalNumber)) {
        win++;
        gameCore();
    }
    else if (parseInt(currentScore) > parseInt(crystalNumber)) {
        loss++;
        gameCore();
    }
}