
//Voir plus > qui une fois cliqué dessu s'agrandit
var moreButton = document.getElementById("more-button");
var hiddenText = document.getElementById("hidden-text");
var closeButton = document.getElementById("close-button");

moreButton.addEventListener("click", function() {
  hiddenText.style.display = "block";
  moreButton.style.display = "none";
});

closeButton.addEventListener("click", function() {
  hiddenText.style.display = "none";
  moreButton.style.display = "block";
});