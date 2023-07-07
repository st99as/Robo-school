let otstyp = 0;
const slider_line = document.querySelector('.trainers_cards');

document.querySelector('.knopka_slider').addEventListener('click', function(){
    otstyp =  otstyp - 375 ;
    if (otstyp < -750){
        otstyp = 0;
    }
    slider_line.style.left = otstyp + "px";
})
document.querySelector('.knopka_slider_p').addEventListener('click', function(){
    otstyp =  otstyp + 375 ;
    if (otstyp > 0){
        otstyp = -750;
    }
    slider_line.style.left = otstyp + "px";
})

const trainer_more_1 = document.querySelector("#trainer_more_1");
const modal = document.querySelector("#modal_1");

document.querySelector("#trainer_more_1").addEventListener("click",function(){
    modal_1.style.visibility = "visible";
})
const modal1 = document.querySelector("#modal1");
document.querySelector("#trainer_more_1").addEventListener("click",function(){
    modal1.style.visibility = "visible";
})
const close_modal = document.querySelector('.close_modal');
document.querySelector('.close_modal').addEventListener("click", function(){
    modal_1.style.visibility = "hidden";
    modal1.style.visibility = "hidden";
})

