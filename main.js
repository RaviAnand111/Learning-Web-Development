const reloadbtn = document.getElementById("again");
reloadbtn.addEventListener('click', reloadWindow);

function reloadWindow(){
  window.location.reload();
}
const correctNumber = Math.floor(Math.random() * 3) + 1;

let score = document.getElementById("score-value");
let checkbtn = document.getElementById("check-box");
let inputValue = document.getElementById("input-bar");
let highscore_value = document.getElementById("highscore-value");

var highscore = 0;

if(sessionStorage.getItem("highscore") == null){
  sessionStorage.setItem("highscore",highscore.toString());
  highscore_value.innerHTML = sessionStorage.getItem("highscore");
}else{
   highscore_value.innerHTML = sessionStorage.getItem("highscore");
}

 checkbtn.addEventListener("click", checkFunction);


  function checkFunction(){
     checkInput();
     decreaseScore(); 
  }

  function decreaseScore(e){
     score.innerHTML = (parseInt(score.innerHTML)-1).toString();

     if(score.innerHTML == '0'){
         document.body.style.background ="red";
         document.getElementById("highscore-para").style.color = "red";
         

         setTimeout(() => {
         document.body.style.background ="black";
         document.getElementById("highscore-para").style.color = "white"}, 1000);
         
         e.preventDefault();
         reloadWindow();
     }

  }


  function checkInput(){
     if((inputValue.value == correctNumber)){

         document.body.style.background ="#04fc04";
         document.getElementById("highscore-para").style.color = "green";

         setTimeout(() => {
          document.body.style.background ="black";
          document.getElementById("highscore-para").style.color = "white"}, 2000);
         
         if(inputValue.value > highscore){
         
          highscore = parseInt(score.innerHTML);
         sessionStorage.setItem("highscore",highscore.toString());
         highscore_value.innerHTML = sessionStorage.getItem("highscore");
         
        }
        preventDefault();
        reloadWindow();

     }else{
       document.getElementById("msg").classList.add("wrong");
       setTimeout(() => {  
       document.getElementById("msg").classList.remove("wrong");}, 500);
     }
  }

