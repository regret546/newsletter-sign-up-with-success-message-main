/* For responsive hero image  */

function changeImageSrc() {
  var image = document.getElementById("responsiveImage");
  if (window.matchMedia("(min-width: 43.75em)").matches) {
    image.src = "/assets/images/illustration-sign-up-desktop.svg";
  } else {
    image.src = "/assets/images/illustration-sign-up-mobile.svg";
  }
}
changeImageSrc();
window.addEventListener("resize", changeImageSrc);
