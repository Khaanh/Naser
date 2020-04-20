  // Start from top page script
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
})

  // Init Wow.js
let wow = new WOW(
{
  boxClass:     'wow',
  animateClass: 'animated',
  offset:       0,
  mobile:       true,
  live:         true,
  scrollContainer: null,
  resetAnimation: true,
}
);
wow.init();

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