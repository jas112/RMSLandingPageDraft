$(window).scroll(function(){
  var winScroll = $(this).scrollTop();
  // console.log(winScroll);
  $('#parallaxL1').css({
    'transform': 'translate(-'+ winScroll/200 +'%, -'+ winScroll/450 +'%)'
  });

  $('#parallaxL2').css({
    'transform': 'translate(-'+ winScroll/150 +'%, -'+ winScroll/400 +'%)'
  });

  $('#parallaxL3').css({
    'transform': 'translate('+ winScroll/100 +'%, -'+ winScroll/350 +'%)'
  });

  $('#parallaxL4').css({
    'transform': 'translate('+ winScroll/50 +'%, -'+ winScroll/25 +'%)'
  });

  $('#parallaxL5').css({
    'transform': 'translate('+ winScroll/25 +'%, -'+ winScroll/250 +'%)'
  });

  // if(winScroll > $('.gallery_images').offset().top - ($(window).height()/1.15)){
  //   $('.gallery_images figure').each(function(i){
  //     setTimeout(function(){
  //       $('.gallery_images figure').eq(i).addClass('is-showing');
  //     }, 150 * (i+1));
  //   });
  // }

});
