var clicked = false;


document.body.querySelector(".menuIcon").addEventListener("click", function (){
    clicked=!clicked;
    if(clicked){
        document.body.querySelector(  ".menu").style.right="0";
    }else{
        document.body.querySelector( ".menu").style.right="-150px";
    }
})