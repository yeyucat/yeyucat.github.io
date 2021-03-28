$('.badge').on("click", function() {
	$('.wrapper').fadeOut(2000, function() {
		$('.cat-wrapper').fadeIn(2000).css("display", "flex");
	});
});

$('#transition').on("click", function() {
  loadCSS();
	$('.cat-wrapper').fadeOut(2000, function() {
		$('.container').show();
		loader(2);
	})
});

function loader(delay) {
  var $body = $('body');
  setTimeout(function(){
    $body.addClass('loading');
  }, delay);

  setTimeout(function(){
    $body.addClass('loaded');
  }, delay + 2500);

  setTimeout(function(){
    $body.removeClass('restart').addClass('new-page');
  }, delay + 2750);

  setTimeout(function(){
    $('.container').remove();
    $('video').show();
  }, delay + 3800);
}

function loadCSS() {
  $('head').append('<link rel="stylesheet" type="text/css" href="transition.css">');
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}