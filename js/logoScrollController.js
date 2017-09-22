$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  var height= 0;
  if (winScroll > height) {
    $('#logo').addClass('scrolling');
    $('#effectLogo').addClass('scrolling');
    $('#pageTitle').addClass('scrolling');
    $('#navRMSLogo').addClass('scrolling');
  } else {
    $('#logo').removeClass('scrolling');
    $('#effectLogo').removeClass('scrolling');
    $('#pageTitle').removeClass('scrolling');
    $('#navRMSLogo').removeClass('scrolling');
  }
});
