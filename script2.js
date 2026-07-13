const images=[

"duo.jpg",
"lobby.jpg",
"lover.jpg",
"match.jpg"

];

const captions=[

"My love ❤️",
"You Always Make Me Smile 😊",
"My Favorite Person 💖",
"Forever With You ❤️"

];

const img=document.getElementById("galleryImage");
const caption=document.getElementById("caption");

const prev=document.getElementById("prevBtn");
const next=document.getElementById("nextBtn");

const page=document.getElementById("pageNumber");

const letterCard=document.getElementById("letterCard");

const openLetter=document.getElementById("openLetter");

if(img){

let current=0;

function updateGallery(){

img.src=images[current];

caption.innerHTML=captions[current];

page.innerHTML=current+1;

if(current==images.length-1){

letterCard.style.display="block";

}else{

letterCard.style.display="none";

}

}

next.onclick=()=>{

if(current<images.length-1){

current++;

updateGallery();

}

}

prev.onclick=()=>{

if(current>0){

current--;

updateGallery();

}

}

openLetter.onclick=()=>{

window.location.href="letter.html";

}

updateGallery();

}