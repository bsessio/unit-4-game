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

let rng = function (x, y) {
    return Math.floor((Math.random() * x) + y);
}

let gameCore = function () {
    crystalNumber = rng(102,19);
    $(".crystalNumber").html(crystalNumber);
    $(".winHolder").html("Wins: " + win)
    $(".lossHolder").html("Losses: " + loss)
    currentScore = 0;
    $(".score").html(currentScore);
    diamond = rng(12, 1);
    amber = rng(12, 1);
    emerald = rng(12, 1);
    sapphire = rng(12, 1);
}

gameCore();

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

let winLoss = function() {
    if (parseInt(currentScore) === parseInt(crystalNumber)) {
        win++;
        gameCore();
    }
    else if (parseInt(currentScore) > parseInt(crystalNumber)) {
        loss++;
        gameCore();
    }
}
// Make .score field check against .randomNumber

            