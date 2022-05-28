function mkDice(a) {
    if (a === 1) {
        return "<p class=\"diceElement\">*</p>";
    }
    else if (a === 2) {
        return "<p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p class='diceElement'>&nbsp;</p><p class='diceElement'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>";
    }
    else if (a === 3) {
        return "<p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p class='diceElement'>*</p><p class='diceElement'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>";
    }
    else if (a === 4) {
        return "<p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p><p class='diceElement'>&nbsp;</p><p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>";
    }
    else if (a === 5) {
        return "<p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p><p class='diceElement'>*</p><p class='diceElement'>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>";
    }
    else if (a === 6) {
        return "<p class='diceElement'>*&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;*</p><p class='diceElement'>&nbsp;</p><p class='diceElement'>*&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;*</p>";
    }
}
function endGame() {
    alert("Jab Khelna hi Nahi tha to aaya hi q APDSABD");
}
var p1, p2;
function startGame() {
    p1 = prompt("Enter the name of player 1");
    p2 = prompt("Enter the name of player 2");
    if (p1.length === 0)
        p1 = "Player 1";
    if (p2.length == 0)
        p2 = "Player 2";
    document.querySelectorAll(".playerName")[0].innerHTML = p1;
    document.querySelectorAll(".playerName")[1].innerHTML = p2;
    document.querySelector(".rollingButt").setAttribute("class", "visible");
}
function roll(p1, p2) {
    var p1d = Math.floor(6 * Math.random()) + 1;
    var p2d = Math.floor(6 * Math.random()) + 1;
    document.getElementById("dice1").innerHTML = mkDice(p1d);
    document.getElementById("dice2").innerHTML = mkDice(p2d);
    if (p1d > p2d) {
        document.querySelector("#winner").innerHTML = "Winner is " + p1 + " !!";
    }
    else if (p1d < p2d) {
        document.querySelector("#winner").innerHTML = "Winner is " + p2 + " !!";
    }
    else {
        document.querySelector("#winner").innerHTML = "Draw!!";
    }
}