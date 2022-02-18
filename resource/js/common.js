
const imageSequence = document.querySelector(".image_sequence");

let i=0;
let imgSeq = setInterval(()=>{
    if( i<74 ) i++; // 한 번 재생
    else i=0; // loop play
    imageSequence.src=`resource/img/${i}.png`;
},40)