$(document).ready(function () {
  $("#logout").click(function () {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location.href = "http://127.0.0.1:5500/index.html";
  });
});
