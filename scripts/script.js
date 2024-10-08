const services = document.getElementById("servicesButton");
const about = document.getElementById("aboutButton");
const help = document.getElementById("helpButton");
const facebook = document.getElementById("facebook");
const instagram = document.getElementById("instagram");
const linkedin = document.getElementById("linkedin");
const whatsapp = document.getElementById("whatsapp");
const twitter = document.getElementById("twitter");

services.addEventListener("click", function () {
  document.getElementById("services").scrollIntoView();
});
about.addEventListener("click", function () {

});
help.addEventListener("click", function () {

});
facebook.addEventListener("click", function () {
  window.location.href = "http://www.facebook.com";
});
instagram.addEventListener("click", function () {
  window.location.href = "http://www.instagram.com";
});
linkedin.addEventListener("click", function () {
  window.location.href = "http://www.linkedin.com";
});
whatsapp.addEventListener("click", function () {
  alert("Mobile Number: +44 7589 549390");
});
twitter.addEventListener("click", function () {
  window.location.href = "http://www.x.com";
});
top.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
