//bakal navigasi
const tombolMenu = document.querySelector(".tombol-menu");
const navigasi = document.querySelector(".navigasi");

tombolMenu.addEventListener("click", () => {
  tombolMenu.classList.toggle("active");
  navigasi.classList.toggle("active");
});

//bakal gemser"
const btns = document.querySelectorAll(".bulet");
const srepet = document.querySelectorAll(".poto");
const kontens = document.querySelectorAll(".konten");

var gemser = function(manual){
   
    btns.forEach((btn) => {
    btn.classList.remove("active")
  });
  
srepet.forEach((slide) => {
    slide.classList.remove("active")
  });
  
kontens.forEach((konten) => {
    konten.classList.remove("active")
  });
  
  btns[manual].classList.add("active");
  srepet[manual].classList.add("active");
  kontens[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => { 
    gemser(i);
  });
});

let i = 0;
   const interval = setInterval(function()
{

gemser(i);
if(i<srepet.length-1){i++;}else{i=0;}
},4000);