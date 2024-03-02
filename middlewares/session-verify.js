$(document).ready(function () {
  // Check if the user is logged in
  if (localStorage.getItem("token") === null) {
    window.location.href = "/login.html";
  }
});
