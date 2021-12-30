function init(){
    const imageSequence = document.querySelector(".image_sequence");
    const audioArea = document.querySelector(".audio_area");

    function imgSeq(){
        let i=0;
        setInterval(function(){
            if( i<74 ) i++;
            // else i=0; // loop play
            imageSequence.src=`resource/img/${i}.png`;
        },40)
    }
    imgSeq();
}
window.onload = init;