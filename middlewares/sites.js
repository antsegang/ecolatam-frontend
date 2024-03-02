$(document).ready(function () {
  const paises = localStorage.getItem("paises");
  const provincias = localStorage.getItem("provincias");
  const cantones = localStorage.getItem("cantones");
  const distritos = localStorage.getItem("distritos");

  async function getPais() {
    if (!paises) {
      await $.ajax({
        type: "GET",
        data: [],
        processData: true,
        url: `http://localhost:4000/api/pais`,
        success: function (res) {
          localStorage.setItem("paises", JSON.stringify(res.body));
        },
        error: function (error) {
          console.error("Error en la solicitud GET", error);
        },
      });
    }
  }
  async function getProvincia() {
    if (!provincias) {
      await $.ajax({
        type: "GET",
        data: [],
        processData: true,
        url: `http://localhost:4000/api/provincia`,
        success: function (res) {
          localStorage.setItem("provincias", JSON.stringify(res.body));
        },
        error: function (error) {
          console.error("Error en la solicitud GET", error);
        },
      });
    }
  }
  async function getCanton() {
    if (!cantones) {
      await $.ajax({
        type: "GET",
        data: [],
        processData: true,
        url: `http://localhost:4000/api/canton`,
        success: function (res) {
          localStorage.setItem("cantones", JSON.stringify(res.body));
        },
        error: function (error) {
          console.error("Error en la solicitud GET", error);
        },
      });
    }
  }
  async function getDistrito() {
    if (!distritos) {
      await $.ajax({
        type: "GET",
        data: [],
        processData: true,
        url: `http://localhost:4000/api/distrito`,
        success: function (res) {
          localStorage.setItem("distritos", JSON.stringify(res.body));
        },
        error: function (error) {
          console.error("Error en la solicitud GET", error);
        },
      });
    }
  }
  getPais();
  getProvincia();
  getCanton();
  getDistrito();
});
