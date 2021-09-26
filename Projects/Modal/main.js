const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal-bg");
const close = document.querySelector(".close");
const modal_bg = document.querySelector(".modal-bg");
const modal_content = document.querySelector(".modal-content");

function removehidden(){
 modal.classList.remove("hidden");
}

function addhidden(){
 modal.classList.add("hidden");
}


btn.addEventListener('click', removehidden);
close.addEventListener('click', addhidden);