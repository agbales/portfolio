/*--- Hello, friend!  -------------*/
/*--- I'd love to hear from you. --*/
/*--- agbales@gmail.com -----------*/

function resize() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  if (windowWidth >= 768 ) {
    $('#overview').css({paddingTop: windowHeight});
  } else {
    $('#overview').css({paddingTop: 0});
  }

  headerType();
}

function headerType() {
  $('#hello').empty();
  $('#dev').empty();

  $('#hello').typed({
		strings: ["Hello.", "I'm Andrew Bales."],
		typeSpeed: 80,
    backDelay: 1400,
    showCursor: false,
    loop: false
	});
  $('#dev').typed({
		strings: ["I write code in Seattle."],
    startDelay: 6000,
		typeSpeed: 80,
    backDelay: 1000,
    showCursor: false,
    loop: false
	});
}

$('a').click(function() {
  var target = $(this.hash);
  var navOffset = $('#nav').outerHeight();
  console.log(this);
  target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  if ( target.length ) {
    $("html, body").animate({ scrollTop: target.offset().top - navOffset }, 700);
    return false;
  }
});

$(window).scroll(function() {
  var windowHeight = $(window).height();

  // Sticky Nav
  if ($(window).scrollTop() >= windowHeight - $('#nav').outerHeight()) {
    $('#nav').addClass('fixed-nav');
    $('#nav').removeClass('absolute-nav');
  } else {
    $('#nav').addClass('absolute-nav');
    $('#nav').removeClass('fixed-nav');
  }

  // Scroll Fade
  if ($(window).scrollTop() > 100) {
    $('#hello-text').css('opacity', '0');
  } else {
    $('#hello-text').css('opacity', '1');
  }
});

$(window).resize(resize);

$(document).ready(function(){
  $('#nav').addClass('absolute-nav');
  resize();
});
