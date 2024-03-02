$(document).ready(function () {
  let token = sessionStorage.getItem("token");
  if (!token) {
    $("#nav")
      .html(`<div class="shadow-lg container-fluid rounded-pill d-none d-md-block" style="background-color: RGBA(5, 242, 219, 0.2); width:95%; backdrop-filter: blur(10px); height:75px ;">
      <div class="row justify-content-center align-items-center ">
        <div class="col-2 d-none d-md-block"><img src="./public/logo.jpg" class="card-img rounded-circle" alt="logo" style="width: 75px; height: 75px" /></div>
        <div class="col-10"> 
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html" style="color: black; font-weight: bold;">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#projects" style="color: black; font-weight: bold;">Nuestros Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="btn text-black shadow-sm" href="guide.html" style=" background-color: orange; font-weight: bold;">Ecoguía</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="login.html" style="color: black; font-weight: bold;">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="signup.html" style="color: black; font-weight: bold;">Registro</a>
        </li>
      </ul>
      </div>
    </div>
      
     
      </div>
      <div class="d-md-none d-block" >
      <div class="row justify-content-center align-items-center ">
      <div class="row justify-content-center align-items-center " style="background-color: RGBA(5, 242, 219, 0.2); backdrop-filter: blur(10px); height:75px ;">
        <a class="text-white mt-2 text-center" style=" font-size: 25px;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fas fa-stream"></i></a>
      </div>
      <div class="offcanvas offcanvas-start" style="background-color: RGBA(255, 255, 255, 0.2); backdrop-filter: blur(10px);" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-black" id="offcanvasScrollingLabel">EcoLATAM | Innovación y sostenibilidad</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
        <ul class="nav d-inline">
        <li class="nav-item my-4">
          <a class="nav-link" aria-current="page" href="index.html" style="color: black; font-weight: bold;">Inicio</a>
        </li>
        <li class="nav-item my-4">
          <a class="nav-link" href="index.html#projects" style="color: black; font-weight: bold;">Nuestros Proyectos</a>
        </li>
        <li class="nav-item my-4">
          <a class="btn text-black shadow-sm" href="guide.html" style=" background-color: orange; font-weight: bold;">Ecoguía</a>
        </li>
        <li class="nav-item my-4">
          <a class="nav-link" href="login.html" style="color: black; font-weight: bold;">Login</a>
        </li>
        <li class="nav-item my-4">
          <a class="nav-link" href="signup.html" style="color: black; font-weight: bold;">Registro</a>
        </li>
      </ul>
        </div>
      </div></div></div> `);
  } else {
    $("#nav")
      .html(`<div class="shadow-lg container-fluid rounded-pill d-none d-md-block" style="background-color: RGBA(5, 242, 219, 0.2); width:95%; backdrop-filter: blur(10px); height:75px ;">
      <div class="row justify-content-center align-items-center ">
        <div class="col-2 d-none d-md-block"><img src="./public/logo.jpg" class="card-img rounded-circle" alt="logo" style="width: 75px; height: 75px" /></div>
        <div class="col-10"> 
        <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="index.html" style="color: black; font-weight: bold;">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#projects" style="color: black; font-weight: bold;">Nuestros Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="btn text-black shadow-sm" href="guide.html" style=" background-color: orange; font-weight: bold;">Ecoguía</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="profile.html" style="color: black; font-weight: bold;">Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" id="logout" style="color: black; font-weight: bold;">Cerrar Sesión</a>
        </li>
      </ul>
      </div>
    </div>
      
     
    </div>
    <div class="d-md-none d-block" >
    <div class="row justify-content-center align-items-center ">
    <div class="row justify-content-center align-items-center " style="background-color: RGBA(5, 242, 219, 0.2); backdrop-filter: blur(10px); height:75px ;">
      <a class="text-white mt-2 text-center" style=" font-size: 25px;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="fas fa-stream"></i></a>
    </div>
    <div class="offcanvas offcanvas-start" style="background-color:RGBA(255, 255, 255, 0.2); backdrop-filter: blur(10px);" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-black" id="offcanvasScrollingLabel">EcoLATAM | Innovación y sostenibilidad</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul class="nav d-inline">
      <li class="nav-item my-4">
        <a class="nav-link" aria-current="page" href="index.html" style="color: black; font-weight: bold;">Inicio</a>
      </li>
      <li class="nav-item my-4">
        <a class="nav-link" href="index.html#projects" style="color: black; font-weight: bold;">Nuestros Proyectos</a>
      </li>
      <li class="nav-item my-4">
        <a class="btn text-black shadow-sm" href="guide.html" style=" background-color: orange; font-weight: bold;">Ecoguía</a>
      </li>
      <li class="nav-item my-4">
        <a class="nav-link" href="profile.html" style="color: black; font-weight: bold;">Perfil</a>
      </li>
      <li class="nav-item my-4">
        <a class="nav-link" href="" id="logout" style="color: black; font-weight: bold;">Cerrar sesión</a>
      </li>
    </ul>
      </div>
    </div></div></div> `);
  }
});
