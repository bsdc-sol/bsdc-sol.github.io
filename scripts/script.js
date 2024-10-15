const facebook = document.getElementById("facebook");
const instagram = document.getElementById("instagram");
const linkedin = document.getElementById("linkedin");
const whatsapp = document.getElementById("whatsapp");
const twitter = document.getElementById("twitter");
const wBox = document.getElementById("wBoxButton");

facebook.addEventListener("click", function () {
  console.log("facebook")
  window.location.href = "https://www.facebook.com/profile.php?id=61567249191119";
});
instagram.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/sol_hacker_cyber/";
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
wBox.addEventListener("click",function(){
  window.location.href="wBox.html"
});