function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

if (isMobile()) {
  window.location.href = "indexMobile.html";
} else {
  console.log("Desktop device detected");
}
