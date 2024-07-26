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
const desButton = $("img-button-des");
const memeBackgroundColor = $("color-background-meme");
const memeBackgroundEfecto = $("efecto-background-meme");
const filtroBrillo = $("brillo");
const filtroOpacidad = $("opacidad");
const filtroContraste = $("contraste");
const filtroDesenfoque = $("desenfoque");
const filtroEscalaDeGrises = $("escalaDeGrises");
const filtroSepia = $("sepia");
const filtroHue = $("hue");
const filtroSaturacion = $("saturacion");
const filtroNegativo = $("negativo");
const valoresPredeterminados = {
  brillo: 1,
  opacidad: 1,
  contraste: 100,
  desenfoque: 0,
  escalaDeGrises: 0,
  sepia: 0,
  hue: 0,
  saturacion: 100,
  negativo: 0,
};
const reestablecerFiltros = $("reestablecerButton");

textButton.onclick = () => {
  imgSection.classList.add("hidden");
  textSection.classList.remove("hidden");
};

imgButton.onclick = () => {
  imgSection.classList.remove("hidden");
  textSection.classList.add("hidden");
};

function darkModeFuncion() {
  body.classList.add("dark-mode");
  body.classList.remove("ligth-mode");
  darkMode.classList.add("hidden");
  ligthMode.classList.remove("hidden");
  imgHeader.classList.add("invert-image");
  textHeader.classList.add("invert-image");
  desButton.classList.add("invert-image");
}
darkMode.addEventListener("click", darkModeFuncion);

function ligthModeFuncion() {
  body.classList.add("ligth-mode");
  body.classList.remove("dark-mode");
  ligthMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
  imgHeader.classList.remove("invert-image");
  textHeader.classList.remove("invert-image");
  desButton.classList.remove("invert-image");
}
ligthMode.addEventListener("click", ligthModeFuncion);

urlInput.onchange = (e) => {
  console.log("url(" + e.target.value + ")");
  memeImg.style.backgroundImage = "url(" + e.target.value + ")";
  memeImg.style.backgroundSize = "cover";
  memeImg.style.backgroundRepeat = "no-repeat";
  memeImg.style.backgroundPosition = "center";
};

function cambiarBackgroundColor(e) {
  memeImg.style.backgroundColor = e.target.value;
}
memeBackgroundColor.addEventListener("input", cambiarBackgroundColor);

function cambiarBackgroundEfecto(e) {
  memeImg.style.backgroundBlendMode = e.target.value;
}
memeBackgroundEfecto.addEventListener("change", cambiarBackgroundEfecto);

function cambiarFiltro() {
  memeImg.style.filter = `
    brightness(${filtroBrillo.value})
    opacity(${filtroOpacidad.value})
    contrast(${filtroContraste.value / 100})
    blur(${filtroDesenfoque.value}px)
    grayscale(${filtroEscalaDeGrises.value}%)
    sepia(${filtroSepia.value}%)
    hue-rotate(${filtroHue.value}deg)
    saturate(${filtroSaturacion.value}%)
    invert(${filtroNegativo.value})
  `;
}
filtroBrillo.addEventListener("input", cambiarFiltro);
filtroOpacidad.addEventListener("input", cambiarFiltro);
filtroContraste.addEventListener("input", cambiarFiltro);
filtroDesenfoque.addEventListener("input", cambiarFiltro);
filtroEscalaDeGrises.addEventListener("input", cambiarFiltro);
filtroSepia.addEventListener("input", cambiarFiltro);
filtroHue.addEventListener("input", cambiarFiltro);
filtroSaturacion.addEventListener("input", cambiarFiltro);
filtroNegativo.addEventListener("input", cambiarFiltro);

function reestablecer() {
  filtroBrillo.value = valoresPredeterminados.brillo;
  filtroOpacidad.value = valoresPredeterminados.opacidad;
  filtroContraste.value = valoresPredeterminados.contraste;
  filtroDesenfoque.value = valoresPredeterminados.desenfoque;
  filtroEscalaDeGrises.value = valoresPredeterminados.escalaDeGrises;
  filtroSepia.value = valoresPredeterminados.sepia;
  filtroHue.value = valoresPredeterminados.hue;
  filtroSaturacion.value = valoresPredeterminados.saturacion;
  filtroNegativo.value = valoresPredeterminados.negativo;
  cambiarFiltro();
}
reestablecerFiltros.addEventListener("click", reestablecer);

/* DESCARGAR MEME */

const descarga = document.getElementById("button-descargar");
const meme = document.getElementById("meme");

function descargarMeme() {
  domtoimage.toBlob(meme).then(function (blob) {
    saveAs(blob, "meme.png");
  });
}

descarga.addEventListener("click", descargarMeme);
