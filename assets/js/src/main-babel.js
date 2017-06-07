'use strict';

var VivusHoola;
var myLazyLoad = new LazyLoad();

(function ($) {
  var windowWidth, windowHeight, whatson, whatson_bg, section_stages, section;
  windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  console.log('What');
  if (windowWidth >= 768) {
    var sources = document.querySelectorAll('video.background-video source');
    var video = document.querySelector('video.background-video');
    console.log('run');
    for (var i = 0; i < sources.length; i++) {
      console.log('Touch video ' + i);
      sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
    }
    video.load();
  }
  VivusHoola = new Vivus('hoola-bg', {
    duration: 100,
    file: '/wp-content/themes/hooch/assets/svg/Hoola-bg.svg',
    pathTimingFunction: Vivus.EASE_OUT_BOUNCE
  }, function (obj) {
    obj.parentEl.classList.add('finished');
  });

  //Events
  $('.finder input[type="submit"]').on("click", function () {
    alert('Error: awaiting database');
  });

  document.addEventListener('touchmove', check_scroll, { capture: true });
  document.addEventListener('scroll', check_scroll, { capture: true });
  function check_scroll() {
    var scroll = $(window).scrollTop();
    if (section === 2 && scroll >= section_stages.three || section === 3 && scroll <= section_stages.three) {
      $("#lemon-bg path").each(function (index) {
        $(this).css({
          'transition-delay': 0.5 + 0.01 * index + 's'
        });
      });
      lemon_slot.addClass('animate');
      section = section === 2 ? 3 : 2;
    } else if (section === 3 && scroll >= section_stages.four || section === 4 && scroll <= section_stages.four) {
      hoochlife_bg.toggle();
      VivusHoola.play();
      hoola_slot.addClass('animate');
      section = section === 3 ? 4 : 3;
    } else if (section === 4 && scroll >= section_stages.five || section === 5 && scroll <= section_stages.five) {
      $(whatson).toggleClass('fixed');
      section = section === 4 ? 5 : 4;
    }
  }

  $('.mobile-menu').click(function () {
    $('#mobile-nav').toggleClass('active');
    return false;
  });
  $('#mobile-nav a:not(.mobile-menu)').click(function () {
    $('#mobile-nav').toggleClass('active');
  });
  function cacheElements() {
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    //Cache elements
    hoochlife_bg = $('#hoochlife').children('.fixed-backdrop');
    liquidgold = $('#liquidgold');
    whatson = $('#whatson');
    lemon_slot = $('#lemon-slot');
    hoola_slot = $('#hoola-slot');

    //Scrolling variables
    section_stages = {
      two: liquidgold.offset().top,
      three: hoola_slot.offset().top - 1.75 * windowHeight,
      four: whatson.offset().top - 1.75 * windowHeight,
      five: whatson.offset().top + whatson.outerHeight(true) - windowHeight
    };
    section = 2;
    console.log(section_stages);
  }
  Pace.on('done', function () {
    document.documentElement.className = document.documentElement.className.replace(/\bintro\b/, '');
    cacheElements();
  });
})(jQuery);
