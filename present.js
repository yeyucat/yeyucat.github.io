var to = 'cat team!!';
var gift_url = 'hpbd-cat.m4v';
var gift_image_url = 'cat_looking.gif';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

$('.above-fold').hide();

function initGiftBox() {
  $('.above-fold').show();
  $('body').css("background", "white");
  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
    $('.info-text').html("Click again for more cats!");
  }, false);

  nametag.innerText = to;
  $('.above-fold').css('display', 'flex !important');
}