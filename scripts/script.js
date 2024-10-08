const facebook = document.getElementById("#facebook")
const hobbyButton = document.querySelector("#hobbies")
const achieveButton = document.querySelector("#achieve")



facebook.addEventListener("click", function () {
  console.log("facebook");
  alert("Button");
});
hobbyButton.addEventListener("click", function () {
  window.location.href = "hobbies.html";
});
achieveButton.addEventListener("click", function () {
  window.location.href = "achieve.html";
});
