// Theme change on click
$(document).ready(function(){
    $("#theme-button").click(function(){
      $("body").toggleClass("theme1");
    });
  });

$(document).ready(function () {
  setTimeout(function () {
    $('.loadermain').fadeOut()
  }, 3000)
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 5) {
    $('.section-1').addClass('section-1-add')
  } else {
    $('.section-1').removeClass('section-1-add')
  }
})

// drop down js
$(document).ready(function () {
  var _mwi = 991 // width mobile menu enable
  function toggleDropdown (e) {
    // min width window 991px - hover menu show
    if (window.innerWidth > _mwi) {
      var _d = $(e.target)
      setTimeout(function () {
        var shouldOpen = e.type !== 'click' && _d.is(':hover')
        _d.parents('.nav-item.dropdown').find('.dropdown-menu').toggleClass('show', shouldOpen)
        _d.parents('.nav-item.dropdown').toggleClass('show', shouldOpen)
        $(e.target).attr('aria-expanded', shouldOpen)
      }, e.type === 'mouseleave' ? 300 : 0)
    }
  }

  $(document)
    .on('mouseenter', '.nav-item.dropdown', toggleDropdown)
    .on('mouseleave', '.nav-item.dropdown.show', toggleDropdown)
})
// drop down js

$('.filtering').slick({
  // slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  arrows: true,
  fade: false,
  cssEase: 'linear',
  infinite: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 1500
})

var filtered = true

$('.js-filter').on('click', function () {
  if (filtered === true) {
    $('.filtering').slick('slickFilter', ':even')
    $(this).text('Unfilter Slides')
    filtered = true
  } else {
    $('.filtering').slick('slickUnfilter')
    $(this).text('Filter Slides')
    filtered = false
  }
})

$('.slider-1').owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

$('.SliderOne').owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 6000,
  nav: false,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2')
if(textWrapper)
{
    
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}   

anime.timeline({ loop: true })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 950,
    delay: (el, i) => 70 * i
  }).add({
  targets: '.ml2',
  opacity: 0,
  duration: 1000,
  easing: 'easeOutExpo',
  delay: 1000
})


