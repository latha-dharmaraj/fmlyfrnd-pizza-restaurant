document.querySelector(".fa-bars").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.add("nav-open");
})

document.querySelector(".cancel-symbol").addEventListener("click",function(){
    document.querySelector(".side-nav-bar").classList.remove("nav-open");
})

// document.querySelector(".custom-acc-head").addEventListener("click",function(){
//     document.querySelector(".italy-food-img-parent img").style.height="270px";
// })

// document.querySelector(".custom-acc-head").addEventListener("click",function(){
//     document.querySelector(".italy-food-img-parent img").classList.add("increase-img-height");
//     var increaseImgHei = document.querySelector(".increase-img-height").style.height="300px";
// })



// alert("hello latha"); 


// Slick slider - seventh section
$('.slider-pizza-wraper').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  mobileFirst: true
});
