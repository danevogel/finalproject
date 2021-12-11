var clicked = false;


document.body.querySelector(".menuIcon").addEventListener("click", function (){
    clicked=!clicked;
    if(clicked){
        document.body.querySelector(  ".menu").style.right="0";
    }else{
        document.body.querySelector( ".menu").style.right="-150px";
    }
})


document.body.querySelector(".pic1").addEventListener("click", function (){
    clicked=!clicked;
    if(clicked){
        document.body.querySelector(  ".pic1expand").style.left="0";
    }else{
        document.body.querySelector( ".pic1expand").style.left="-200px";
    }
})

