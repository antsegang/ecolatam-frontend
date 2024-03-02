$(document).ready(function () {
  // Al hacer clic en un botón o cualquier evento que desee desencadenar la solicitud POST
  $("#btnLogin").click(function () {
    // Datos de usuario y contraseña
    const username = $("#usernameInput").val();
    const password = $("#passwordInput").val();

    // Objeto de datos que se enviará en el cuerpo de la solicitud
    const requestData = {
      username: username,
      password: password,
    };

    // Realizar la solicitud POST
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/api/auth/login",
      contentType: "application/json", // Establecer el tipo de contenido a JSON
      data: JSON.stringify(requestData), // Convertir el objeto de datos a JSON
      success: function (response) {
        getUserData(response);
      },
      error: function (error) {
        console.error("Error en la solicitud POST", error);
      },
    });
  });
  async function getUserData(response) {
    await $.ajax({
      type: "GET",
      data: [],
      processData: true,
      url: `http://localhost:4000/api/users/${response.body.id}`,
      success: function (res) {
        sessionStorage.setItem("user", JSON.stringify(res.body[0]));
        sessionStorage.setItem("private", JSON.stringify(response.body.data));
        sessionStorage.setItem("token", JSON.stringify(response.body.token));
        window.location.href = "http://127.0.0.1:5500/index.html";
      },
      error: function (error) {
        console.error("Error en la solicitud GET", error);
      },
    });
  }
});
