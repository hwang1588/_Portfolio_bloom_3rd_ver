$(function () {
  var offset = 0; //스크롤을 얼마나 해야 보이는지

  var duration = 500; //완전히 나타나는데 걸리는 속도

  // Toggle view of button when scrolling.
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('#c-go-top').fadeIn(duration);
    } else {
      $('#c-go-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#c-go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});