$(document).ready(function(){
    $(".cbtn").click(function(){
        $(".menu-bar").slideToggle(.2000);
    });
});


//counter 


const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 100;

counterNum.forEach((curElem) => {
    const updateNumber = () =>{
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);
        const incrementNumber = Math.trunc(targetNumber/speed);
        // console.log(incrementNumber);
        if(initialNum<targetNumber){
            curElem.innerText=`${initialNum+incrementNumber}+`;
            setTimeout(updateNumber,10);
        }
    };
    updateNumber();
});



//owl carousel

$(".carousel").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayhoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false,
        },
        1000:{
            items:3,
            nav:false
        },
    }
});


