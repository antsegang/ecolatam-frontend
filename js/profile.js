$(document).ready(function () {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const private = JSON.parse(sessionStorage.getItem("private"));
  const paises = JSON.parse(localStorage.getItem("paises"));
  const provincias = JSON.parse(localStorage.getItem("provincias"));
  const cantones = JSON.parse(localStorage.getItem("cantones"));
  const distritos = JSON.parse(localStorage.getItem("distritos"));
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let uPais = "";
  let uProvincia = "";
  let uCanton = "";
  let uDistrito = "";
  let bDate = "";

  function setData(user, paises, provincias, cantones, distritos, private) {
    viewPais(paises, user.id_pais);

    viewProvincia(provincias, user.id_provincia);

    viewCanton(cantones, user.id_canton);

    viewDistrito(distritos, user.id_distrito);

    viewBirthdate(user.birthdate);

    pintarData(user, uPais, uProvincia, uCanton, uDistrito, bDate, private);
  }

  setData(user, paises, provincias, cantones, distritos, private);

  function pintarData(
    user,
    pais,
    provincia,
    canton,
    distrito,
    birthdate,
    private
  ) {
    $("#data").html(`
  <div class="card">
    <div class="card-header" style=" height: 40vh; width: 100%; background: url(https://cdn.pixabay.com/photo/2016/02/03/08/34/banner-1176681_1280.jpg); background-size: cover;"> </div>
    <div class="card-body">
      <div class="row justify-content-center align-items-center g-2" style="transform: translate(0%, -30%)">
        <div class="col" >
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile photo" class="rounded-circle w-75 " />
          <button
            type="button"
            name=""
            id=""
            class="btn btn-primary rounded-pill"
            style="position:absolute; transform: translate(-100%, 200%); "
          >
            <i  class="fa-solid fa-pen-to-square"></i>
          </button>
        </div>
        <div class="col">
        </div>
        <div class="col">
          <div class="d-grid align-items-end ">
            <button
              type="button"
              name=""
              id=""
              class="btn btn-primary rounded-pill"
            >
              <i class="fa-solid fa-pen-to-square"></i>      Editar
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center g-2">
        <div class="col">
          <p class="" style="font-size:20px; font-weight: bold;"><i class="fa-solid fa-address-card"></i>      ${user.name} ${user.lastname}</p>
          <p style="font-size:11px; font-weight: bold;"><a href="profile.html" style=" text-decoration: none;"><i class="fa-solid fa-clipboard-user"></i>      @${private.username}</a></p>
          <p class="" style="color:gray; font-size:11px; font-weight: bold;"><i class="fa-solid fa-location-dot"></i>      ${user.zip}, ${distrito}, ${canton}, ${provincia}, ${pais}</p>
          <p style="color:gray; font-size:11px; font-weight: bold;"><i class="fa-solid fa-location-dot"></i>      ${user.location}</p>
          <p style="font-size:11px; font-weight: bold;"><i class="fa-solid fa-cake-candles"></i>      ${birthdate}</p>
          
        </div>
      </div>
    </div>
  </div>

      
      <a
        type="button"
        class="btn btn-primary"
        href="edit_profile.html"
      >
        Editar Perfil
      </a>
    </div>
  </div>
        <table class="text-center">
            <theader>
                <td class="text-center"><h3>Personal Data</h3></td>
            </theader>
            <tbody>
                <td class="text-center">
                    <ul>
                        <li>${user.name} ${user.lastname}</li>
                        <li>${birthdate}</li>
                        <li></li>
                    </ul>
                </td>
            </tbody>
        </table>
        <table class="text-center">
            <theader>
                <td class="text-center"><h3>Location</h3></td>
            </theader>
            <tbody>
                <td class="text-center">
                    <ul>
                        <li>${pais}</li>
                        <li>${provincia}</li>
                        <li>${canton}</li>
                        <li>${distrito}</li>
                        <li>${user.location}</li>
                        <li>${user.zip}</li>
                    </ul>
                </td>
            </tbody>
        </table>
        <table class="text-center">
            <theader>
                <td class="text-center"><h3>Contact data</h3></td>
            </theader>
            <tbody>
                <td class="text-center">
                    <ul>
                        <li>${user.cellphone}</li>
                        <li>${user.phone}</li>
                        <li>${private.email}</li>
                    </ul>
                </td>
            </tbody>
        </table>
        `);
  }

  function viewBirthdate(birthdate) {
    const bDDate = new Date(birthdate).getDate();
    const bDMonth = new Date(birthdate).getMonth();
    const bDYear = new Date(birthdate).getFullYear();
    console.log(bDDate);
    bDate = `${meses[bDMonth]}, ${bDDate}, ${bDYear}`;
    return bDate;
  }

  function viewPais(paises, userPais) {
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].id === userPais) {
        uPais = paises[i].name;
      }
    }
    return uPais;
  }
  function viewProvincia(provincias, userProvincia) {
    for (let i = 0; i < provincias.length; i++) {
      if (provincias[i].id === userProvincia) {
        uProvincia = provincias[i].name;
      }
    }
    return uProvincia;
  }
  function viewCanton(cantones, userCanton) {
    for (let i = 0; i < cantones.length; i++) {
      if (cantones[i].id === userCanton) {
        uCanton = cantones[i].name;
      }
    }
    return uCanton;
  }
  function viewDistrito(distritos, userDistrito) {
    for (let i = 0; i < distritos.length; i++) {
      if (distritos[i].id === userDistrito) {
        uDistrito = distritos[i].name;
      }
    }
    return uDistrito;
  }
});
