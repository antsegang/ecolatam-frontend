$(document).ready(function () {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const private = JSON.parse(sessionStorage.getItem("private"));
  const paises = JSON.parse(localStorage.getItem("paises"));
  const provincias = JSON.parse(localStorage.getItem("provincias"));
  const cantones = JSON.parse(localStorage.getItem("cantones"));
  const distritos = JSON.parse(localStorage.getItem("distritos"));

  let uPais = "";
  let uProvincia = "";
  let uCanton = "";
  let uDistrito = "";
  let monthParsed = "";
  let bDYear = "";
  let bDMonth = "";
  let bDDate = "";
  let uPaisId = "";
  let uProvinciaId = "";
  let uCantonId = "";
  let uDistritoId = "";
  let paisData = "";
  let provinciaData = "";
  let cantonData = "";
  let distritoData = "";
  let paisS = $("#paisS").val();
  let provinciaS = $("#provinciaS").val();
  let cantonS = $("#cantonS").val();
  let distritoS = $("#distritoS").val();

  function setData(user, paises, provincias, cantones, distritos, private) {
    viewPais(paises, user.id_pais);

    viewProvincia(provincias, user.id_provincia);

    viewCanton(cantones, user.id_canton);

    viewDistrito(distritos, user.id_distrito);

    viewBirthdate(user.birthdate);

    paisOpt(paises, user.id_pais);

    provinciaOpt(provincias, user.id_provincia);

    cantonOpt(cantones, user.id_canton);

    distritoOpt(distritos, user.id_distrito);

    pintarData(
      user,
      uPais,
      uPaisId,
      uProvincia,
      uProvinciaId,
      uCanton,
      uCantonId,
      uDistrito,
      uDistritoId,
      private
    );
  }

  setData(user, paises, provincias, cantones, distritos, private);

  function pintarData(
    user,
    pais,
    paisId,
    provincia,
    provinciaId,
    canton,
    cantonId,
    distrito,
    distritoId,
    private
  ) {
    $("#name").val(user.name);
    $("#lastname").val(user.lastname);
    $("#birthdate").val(`${bDYear}-${monthParsed}-${bDDate}`);
    $("#username").val(private.username);
    $("#location").val(user.location);
    $("#zip").val(user.zip);
    $("#cellphone").val(user.cellphone);
    $("#phone").val(user.phone);
    $("#email").val(private.email);

    $("#paisS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su pais
            </option>
            ${paisData}
        </select>`);
    $("#provinciaS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
          <option id="" selected value="">
            Elija su provincia
          </option>
            
        </select>`);
    $("#cantonS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su canton
            </option>
        </select>
        `);
    $("#distritoS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su distrito
            </option>
        </select>
        `);
  }

  function viewBirthdate(birthdate) {
    bDDate = new Date(birthdate).getDate();
    bDMonth = new Date(birthdate).getMonth();
    bDYear = new Date(birthdate).getFullYear();
    monthParsed = parseMonth(bDMonth);
    return bDYear, monthParsed, bDDate;
  }
  function parseMonth(month) {
    const plus = month + 1;
    if (plus < 10) {
      let result = "0" + plus;
      return result;
    } else {
      let result = plus;
      return result;
    }
  }

  function viewPais(paises, userPais) {
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].id === userPais) {
        uPais = paises[i].name;
        uPaisId = paises[i].id;
      }
    }
    return uPais, uPaisId;
  }
  function viewProvincia(provincias, userProvincia) {
    for (let i = 0; i < provincias.length; i++) {
      if (provincias[i].id === userProvincia) {
        uProvincia = provincias[i].name;
        uProvinciaId = provincias[i].id;
      }
    }
    return uProvincia, uProvinciaId;
  }
  function viewCanton(cantones, userCanton) {
    for (let i = 0; i < cantones.length; i++) {
      if (cantones[i].id === userCanton) {
        uCanton = cantones[i].name;
        uCantonId = cantones[i].id;
      }
    }
    return uCanton, uCantonId;
  }
  function viewDistrito(distritos, userDistrito) {
    for (let i = 0; i < distritos.length; i++) {
      if (distritos[i].id === userDistrito) {
        uDistrito = distritos[i].name;
        uDistritoId = distritos[i].id;
      }
    }
    return uDistrito, uDistritoId;
  }

  function paisOpt(paises) {
    for (let i = 0; i < paises.length; i++) {
      paisData += `<option value="${paises[i].id}">${paises[i].name}</option>`;
    }
    return paisData;
  }

  function provinciaOpt(provincias) {
    $("#paisS").change(function () {
      paisS = parseInt($("#paisS").val());
      provinciaData = "";
      for (let i = 0; i < provincias.length; i++) {
        if (provincias[i].id_pais === paisS) {
          provinciaData += `<option value="${provincias[i].id}">${provincias[i].name}</option>`;
        }
      }
      $("#provinciaS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su provincia
            </option>
            ${provinciaData}
        </select>
        `);
    });
  }

  function cantonOpt(cantones) {
    $("#provinciaS").change(function () {
      provinciaS = parseInt($("#provinciaS").val());
      cantonData = "";
      for (let i = 0; i < cantones.length; i++) {
        if (cantones[i].id_provincia === provinciaS) {
          cantonData += `<option value="${cantones[i].id}">${cantones[i].name}</option>`;
        }
      }
      $("#cantonS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su canton
            </option>
            ${cantonData}
        </select>
        `);
    });
  }

  function distritoOpt(distritos) {
    $("#cantonS").change(function () {
      cantonS = parseInt($("#cantonS").val());
      distritoData = "";
      for (let i = 0; i < distritos.length; i++) {
        if (distritos[i].id_canton === cantonS) {
          distritoData += `<option value="${distritos[i].id}">${distritos[i].name}</option>`;
        }
      }
      $("#distritoS").html(`
        <select
            id=""
            class="form-select text-center"
            aria-label="Default select example"
        >
            <option id="" selected value="">
                Elija su distrito
            </option>
            ${distritoData}
        </select>
        `);
    });
  }
});
