const defaultFile =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

const photo = document.getElementById("photo");
const img = document.getElementById("imgp");
photo.addEventListener("change", (e) => {
  if (e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      img.src = e.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  } else {
    img.src = defaultFile;
  }
});
