// Following Scroll
$('.nav-menu > ul > li > a').on( 'click', function(){ 
  let link = $(this);
  let dest = link.attr('href'); 
  if(dest !== undefined && dest !== '') {
    $('html').animate({ 
      scrollTop: $(dest).offset().top - 86
    }, 1000);
  }
  return false;
});

// Mobile menu
$('.js-burger').on('click', function() {
  $(this).toggleClass('active');
  $('html').toggleClass('o-hidden');
  $('.header-wrap').toggleClass('open-menu');
})