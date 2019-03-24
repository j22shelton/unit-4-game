
var randomNum = 19 + Math.floor(Math.random() * 120);


$("#numToGuess").html(randomNum);
console.log(randomNum);


var purpleGem = 1 + Math.floor(Math.random() * 12);
var yellowGem = 1 + Math.floor(Math.random() * 12);
var pinkGem = 1 + Math.floor(Math.random() * 12);
var greenGem = 1 + Math.floor(Math.random() * 12);


var userTotal = 0;
var wins = 0;
var losses = 0;
$("#totalNum").html(userTotal);
$("#wins").html(wins);
$("#losses").html(losses);


var reset = function() {
    userTotal = 0;
    randomNum = 19 + Math.floor(Math.random() * 120);
    purpleGem = 1 + Math.floor(Math.random() * 12);
    yellowGem = 1 + Math.floor(Math.random() * 12);
    pinkGem = 1 + Math.floor(Math.random() * 12);
    greenGem = 1 + Math.floor(Math.random() * 12);
    console.log(randomNum);
    $("#numToGuess").html(randomNum);
    $("#totalNum").html(userTotal);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

var win = function() {
    if (userTotal == randomNum) {
        wins++;
        alert("Winner!");
        $("#wins").html(wins);
        reset();

    } else if (userTotal > randomNum) {
        losses++;
        alert("Sorry, maybe next time!");
        $("#losses").html(losses);
        reset();
    }
};

$("#purple").on("click", function() {
    userTotal = userTotal + purpleGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    win();
})

$("#yellow").on("click", function() {
    userTotal = userTotal + yellowGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    win();
})

$("#pink").on("click", function() {
    userTotal = userTotal + pinkGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    win();
})

$("#green").on("click", function() {
    userTotal = userTotal + greenGem;
    console.log(userTotal);
    $("#totalNum").html(userTotal);
    win();
})

