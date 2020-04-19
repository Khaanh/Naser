$(function() {
	//= include/default
	//= include/popup
  //= include/animation

  $('.js-form-registr').on('focus', function() {
    $(this).parent().addClass('active')
  })

  $('.js-form-registr').on('blur', function() {
    if ($(this).val() == '') {
      $(this).parent().removeClass('active')
    }
  })

  // Scroll Animate btn

  function btnLightn() {
    let btnLight = $('.info-btn'),
    height = btnLight.offset().top + btnLight.height() + 100;
    if ($(document).scrollTop() + windowHeight >= height) {
      btnLight.addClass('active')
    }
  }

  function stageLight() {
    $('.stages-descr').each(function() {
      let $this = $(this),
      height = $this.offset().top + $this.height() + 100;
      if ($(document).scrollTop() + windowHeight >= height) {
        $this.addClass('active')
      }
    })
  }

  function mapLight() {
    $('.map-indicator').each(function() {
      let $this = $(this),
      height = $this.offset().top + $this.height() + 115;
      if ($(document).scrollTop() + windowHeight >= height) {
        $this.addClass('active')
      }
    })
  }

  function progressLine() {
    $('.chart-control').each(function() {
      let $control = $(this).data('percent'),
          $percent = $(this).prev(),
          $this = $(this),
          counter = 0,
          id = setInterval(fillLine, 10);

      function fillLine() {
        if ( $control > counter) {
          counter++;
          $percent.text(`${counter}` + '%')
          $this.addClass('active')
        } else {
          clearInterval(id)
        }
      }
    })
  }

  function progressCircle() {
    let $this = $('.details-diagram'),
    height = $this.offset().top + $this.height() + 115;
    if ($(document).scrollTop() + windowHeight >= height) {
      $('.fill').each(function() {
        $(this).addClass('active')
      })
    }
  }

  const windowHeight = $(window).height();
  $(document).on('scroll', function() {
    let height = $('.chart-control').offset().top + $('.chart-control').height() + 115;
    if ($(document).scrollTop() + windowHeight >= height) {
      progressLine();
    }
    btnLightn();
    stageLight();
    mapLight();
    progressCircle();
  });

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

  // $(window).on('beforeunload', function() {
  //   $(window).scrollTop(0);
  // })

  // Mobile menu
  $('.js-burger').on('click', function() {
    $(this).toggleClass('active');
    $('html').toggleClass('o-hidden');
    $('.header-wrap').toggleClass('open-menu');
  })


});




