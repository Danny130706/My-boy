/* ===========================
   Letter
=========================== */

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

if(openLetter){

const message =
`Hi Sayang ❤️,

Thank you for always being with me.

Every moment with you is the happiest part of my life.

You always make my days brighter and my heart calmer.

I hope we can continue making beautiful memories together.

No matter what happens,
I'll always choose you.

I Love You ❤️`;

let index = 0;

openLetter.addEventListener("click",()=>{

    openLetter.style.display="none";

    letter.style.display="block";

    typeWriter();

});

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

}