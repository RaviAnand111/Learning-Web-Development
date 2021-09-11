 'use strict';
 
   let ravi = false;
   const anand = true;
   
   if(anand == true) rav = true;
   else anand = false;

const submit = document.getElementById("submit");

submit.addEventListener('click', onSubmit);

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const msg = document.querySelector("#msg");
const userlist = document.getElementById('list')


function onSubmit(e){

   e.preventDefault();

if(inputName.value == "" || inputEmail.value == ""){
   
    msg.style.visibility = "visible";

   setTimeout( redMsg, 2000);
}else {
    const li = document.createElement('li');
   li.appendChild(document.createTextNode(inputName.value + " : " + inputEmail.value));

   userlist.appendChild(li);

   inputName.value = "";
   inputEmail.value = "";
}
}

function redMsg(){
   msg.style.visibility = "hidden";
}


