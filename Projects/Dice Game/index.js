const refresh_btn = document.querySelector(".refresh-btn");
const player1_img = document.querySelector(".player1-dice-img");
const player2_img = document.querySelector(".player2-dice-img");
let heading = document.querySelector("h1");
var player1_dice = 0, player2_dice = 0;

refresh_btn.addEventListener('click', function(){

 randomRoll_player1();
 randomRoll_player2();

 if(player1_dice > player2_dice){
    heading.textContent = "Player1 Wins🚩";
 }else if(player2_dice > player1_dice){
  heading.textContent = "Player2 Wins🚩";
 }else{
  heading.textContent = "Draw";
 }

});

function randomRoll_player1(){

     player1_dice = Math.round((Math.random() * 5)+1);
     let s = "./images/dice" + player1_dice + ".png";
     player1_img.src = s;

}

function randomRoll_player2(){

     player2_dice = Math.round((Math.random() * 5)+1);
     let s = "./images/dice" + player2_dice + ".png";
       player2_img.src = s;

}