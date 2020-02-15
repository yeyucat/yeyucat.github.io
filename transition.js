// imitation of new page loading
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
    initGiftBox();
  }, delay + 3800);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function clickme() {
  $('.wrapper').css("pointer-events", "none");
  $('.wrapper').fadeOut(2000, function() {
    $('.container').show();
    loader(2);
  });
}
