$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= $(window).height()-100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});