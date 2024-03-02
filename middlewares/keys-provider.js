function setkey() {
  let script = document.createElement("script");
  const urlarmada = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBuOnFkPVtHfWEatvW0aipReR4R81R6CZ0&callback=initMap`;
  script.src = urlarmada;
  document.body.appendChild(script);
}

setkey();
