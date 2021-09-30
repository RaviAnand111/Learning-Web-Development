var buttons = document.querySelectorAll(".drum");

for(let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener("click", function(){

       makeSound(this.textContent);
       buttonAnimation(this.textContent);
   });
}

document.addEventListener("keypress", function(event){

         makeSound(event.key);
         buttonAnimation(event.key);
});


function makeSound(key){

  let filelocation = "sounds/";

  switch(key){

      case 'w': filelocation += "tom-1.mp3";
                break;
      case 'a': filelocation += "tom-2.mp3";
                break;
      case 's': filelocation += "tom-3.mp3";
                break;
      case 'd': filelocation += "tom-4.mp3";
                break;
      case 'j': filelocation += "snare.mp3";
                break;
      case 'k': filelocation += "crash.mp3";
                break;
      case 'l': filelocation += "kick-bass.mp3";
                break;      
      default: console.log(" wrong key ");    

  }

  var audio = new Audio(filelocation);
  audio.play();

}

function buttonAnimation(key){

   var activebutton = document.querySelector("." + key);

   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed");
   }, 100);

}