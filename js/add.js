const $ = (id) => document.getElementById(id);

const textButton = $("button-header-texto");
const imgButton = $("button-header-imagen");
const imgSection = $("section-img");
const textSection = $("section-text");
const urlInput = $("url");
const memeImg = $("meme-img");
const ligthMode = $("ligth-mode");
const darkMode = $("dark-mode");
const body = $("body");
const imgHeader = $("img-button-heder-img");
const textHeader = $("img-button-heder-text");

textButton.onclick = () => {
  imgSection.classList.add("hidden");
  textSection.classList.remove("hidden");
};

imgButton.onclick = () => {
  imgSection.classList.remove("hidden");
  textSection.classList.add("hidden");
};

urlInput.onchange = (e) => {
  memeImg.src = e.target.value;
};

function darkModeFuncion() {
  body.classList.add("dark-mode");
  body.classList.remove("ligth-mode");
  darkMode.classList.add("hidden");
  ligthMode.classList.remove("hidden");
  imgHeader.classList.add("invert-image");
  textHeader.classList.add("invert-image");
}
darkMode.addEventListener("click", darkModeFuncion);

function ligthModeFuncion() {
  body.classList.add("ligth-mode");
  body.classList.remove("dark-mode");
  ligthMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
  imgHeader.classList.remove("invert-image");
  textHeader.classList.remove("invert-image");
}
ligthMode.addEventListener("click", ligthModeFuncion);

/* DESCARGAR MEME */

const descarga = document.getElementById("button-descargar");
const meme = document.getElementById("meme");

function descargarMeme() {
  domtoimage.toBlob(meme).then(function (blob) {
    saveAs(blob, "meme.png");
  });
}

descarga.addEventListener("click", descargarMeme);
