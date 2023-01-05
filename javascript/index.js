
//Voir plus > qui une fois cliqué dessu s'agrandit
var moreButton1 = document.getElementById("more-button-1");
var hiddenText1 = document.getElementById("hidden-text-1");
var closeButton1 = document.getElementById("close-button-1");

moreButton1.addEventListener("click", function() {
  hiddenText1.style.display = "block";
  moreButton1.style.display = "none";
});

closeButton1.addEventListener("click", function() {
  hiddenText1.style.display = "none";
  moreButton1.style.display = "block";
});

var moreButton2 = document.getElementById("more-button-2");
var hiddenText2 = document.getElementById("hidden-text-2");
var closeButton2 = document.getElementById("close-button-2");

moreButton2.addEventListener("click", function() {
  hiddenText2.style.display = "block";
  moreButton2.style.display = "none";
});

closeButton2.addEventListener("click", function() {
  hiddenText2.style.display = "none";
  moreButton2.style.display = "block";
});

var moreButton3 = document.getElementById("more-button-3");
var hiddenText3 = document.getElementById("hidden-text-3");
var closeButton3 = document.getElementById("close-button-3");

moreButton3.addEventListener("click", function() {
  hiddenText3.style.display = "block";
  moreButton3.style.display = "none";
});

closeButton3.addEventListener("click", function() {
  hiddenText3.style.display = "none";
  moreButton3.style.display = "block";
});



