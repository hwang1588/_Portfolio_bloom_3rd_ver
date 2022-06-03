// const circle = document.querySelector(".circle");
// document.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   circle.style.left = mouseX + 'px';
//   circle.style.top = mouseY + 'px';
// });

// var $circle = $(".circle"); //변수 할당=특정요소를 지정
// function moveCircle(e) {
//   gsap.to($circle, 1000, { //숫자가 높으면 커서이동후 원 반응속도 느려짐
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }


window.setTimeout(function () {
  $("#loading-wrapper2").fadeOut(2000); //요소를 2000ms동안 fadeout시킴
  $(".ready").addClass("aaa bbb"); //요소에 요소를 추가함
}, 4000); //settimeout 4000ms의 딜레이를 준 다음 기능작동

window.setTimeout(function () {
  $(".drama").addClass("est"); //요소에 요소를 추가함
}, 1000); //settimeout 1000ms의 딜레이를 준다음 기능 작동



$(".header-container").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(this).addClass("bg-white").removeClass("bg-transparent");
  $(".header-logo").addClass("header-logo-black").removeClass("header-logo-white");
  $(".nav-link").addClass("text-black").removeClass("text-white");
  $(".header_sns_black").addClass("d-block").removeClass("d-none");
  $(".header_sns_white").addClass("d-none").removeClass("d-block");

}, function () {
  $(this).addClass("bg-transparent").removeClass("bg-white");
  $(".header-logo").addClass("header-logo-white").removeClass("header-logo-black");
  $(".nav-link").addClass("text-white").removeClass("text-black");
  $(".header_sns_white").addClass("d-block").removeClass("d-none");
  $(".header_sns_black").addClass("d-none").removeClass("d-block");
});

$(".avatar1").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(".bubble1").addClass("visible").removeClass("invisible");
  $(".bubble2, .bubble3, .bubble4, .bubble5").addClass("invisible").removeClass("visible");
});
$(".avatar2").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(".bubble2").addClass("visible").removeClass("invisible");
  $(".bubble1, .bubble3, .bubble4, .bubble5").addClass("invisible").removeClass("visible");
});
$(".avatar3").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(".bubble3").addClass("visible").removeClass("invisible");
  $(".bubble1, .bubble2, .bubble4, .bubble5").addClass("invisible").removeClass("visible");
});
$(".avatar4").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(".bubble4").addClass("visible").removeClass("invisible");
  $(".bubble1, .bubble2, .bubble3, .bubble5").addClass("invisible").removeClass("visible");
});
$(".avatar5").hover(function () { //"test_enter"요소에 '마우스가진입'하면
  $(".bubble5").addClass("visible").removeClass("invisible");
  $(".bubble1, .bubble2, .bubble3, .bubble4").addClass("invisible").removeClass("visible");
});

$(".button_su_inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({
    "left": relX,
    "top": relY
  });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$(".button_su_inner").mouseleave(function (e) {

  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({
    "left": relX,
    "top": relY
  });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");

});