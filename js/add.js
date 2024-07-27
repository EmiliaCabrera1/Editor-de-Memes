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
const cerrarButton = $("cerrar-button");
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
const topText = $("top-text");
const bottomText = $("bottom-text");
const inputTopText = $("texto-superior");
const inputBottomText = $("texto-inferior");
const sinTextoSuperiorCheck = $("sin-texto-superior");
const sinTextoInferiorCheck = $("sin-texto-inferior");
const selectFuente = $("fuente");
const fuenteSize = $("fuente-size");
const izquierdaTexto = $("izquierda-texto");
const centroTexto = $("centro-texto");
const derechaTexto = $("derecha-texto");
const colorFuente = $("color-fuente");
const colorFondo = $("color-fondo");
const fondoTransparente = $("fondo-transparente");
const sinContorno = $("ningun-contorno");
const contornoClaro = $("contorno-claro");
const contornoOscuro = $("contorno-oscuro");
const espaciadoText = $("espaciado");
const interlineadoText = $("interlineado");
const descarga = $("button-descargar");
const meme = $("meme");
const aside = $("aside");

textButton.onclick = () => {
  imgSection.classList.add("hidden");
  textSection.classList.remove("hidden");
  aside.style.display = "flex";
};

imgButton.onclick = () => {
  imgSection.classList.remove("hidden");
  textSection.classList.add("hidden");
  aside.style.display = "flex";
};

function darkModeFuncion() {
  body.classList.add("dark-mode");
  body.classList.remove("ligth-mode");
  darkMode.classList.add("hidden");
  ligthMode.classList.remove("hidden");
  imgHeader.classList.add("invert-image");
  textHeader.classList.add("invert-image");
  desButton.classList.add("invert-image");
  cerrarButton.classList.add("invert-image");
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
  cerrarButton.classList.remove("invert-image");
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

function textoSuperior() {
  topText.textContent = inputTopText.value;
}
inputTopText.addEventListener("input", textoSuperior);

function textoInferior() {
  bottomText.textContent = inputBottomText.value;
}
inputBottomText.addEventListener("input", textoInferior);

function sinTextoSuperior() {
  if (sinTextoSuperiorCheck.checked) {
    topText.classList.add("hidden");
  } else {
    topText.classList.remove("hidden");
  }
}
sinTextoSuperiorCheck.addEventListener("click", sinTextoSuperior);

function sinTextoInferior() {
  if (sinTextoInferiorCheck.checked) {
    bottomText.classList.add("hidden");
  } else {
    bottomText.classList.remove("hidden");
  }
}
sinTextoInferiorCheck.addEventListener("click", sinTextoInferior);

function cambiarFuente() {
  topText.style.fontFamily = selectFuente.value;
  bottomText.style.fontFamily = selectFuente.value;
}
selectFuente.addEventListener("change", cambiarFuente);

function cambiarTamañoFuente() {
  topText.style.fontSize = fuenteSize.value + "px";
  bottomText.style.fontSize = fuenteSize.value + "px";
}
fuenteSize.addEventListener("input", cambiarTamañoFuente);

function alineacionTextoIzquierda() {
  topText.style.textAlign = "left";
  bottomText.style.textAlign = "left";
}
izquierdaTexto.addEventListener("click", alineacionTextoIzquierda);

function alineacionTextoCentro() {
  topText.style.textAlign = "center";
  bottomText.style.textAlign = "center";
}
centroTexto.addEventListener("click", alineacionTextoCentro);

function alineacionTextoDerecha() {
  topText.style.textAlign = "right";
  bottomText.style.textAlign = "right";
}
derechaTexto.addEventListener("click", alineacionTextoDerecha);

function cambiarColorFuente(e) {
  topText.style.color = e.target.value;
  bottomText.style.color = e.target.value;
}
colorFuente.addEventListener("input", cambiarColorFuente);

function cambiarColorFondo(e) {
  topText.style.backgroundColor = e.target.value;
  bottomText.style.backgroundColor = e.target.value;
}
colorFondo.addEventListener("input", cambiarColorFondo);

function fondoTransparenteCheck() {
  if (fondoTransparente.checked) {
    topText.style.backgroundColor = "transparent";
    bottomText.style.backgroundColor = "transparent";
  } else {
    topText.style.backgroundColor = colorFondo.value;
    bottomText.style.backgroundColor = colorFondo.value;
  }
}
fondoTransparente.addEventListener("click", fondoTransparenteCheck);

function aplicarSinContorno() {
  topText.style.webkitTextStrokeWidth = "0px";
  topText.style.webkitTextStrokeColor = "#FFF";
  bottomText.style.webkitTextStrokeWidth = "0px";
  bottomText.style.webkitTextStrokeColor = "#FFF";
}
sinContorno.addEventListener("click", aplicarSinContorno);

function aplicarContornoClaro() {
  topText.style.webkitTextStrokeWidth = "1px";
  topText.style.webkitTextStrokeColor = "#FFF";
  bottomText.style.webkitTextStrokeWidth = "1px";
  bottomText.style.webkitTextStrokeColor = "#FFF";
}
contornoClaro.addEventListener("click", aplicarContornoClaro);

function aplicarContornoOscuro() {
  topText.style.webkitTextStrokeWidth = "1px";
  topText.style.webkitTextStrokeColor = "#000";
  bottomText.style.webkitTextStrokeWidth = "1px";
  bottomText.style.webkitTextStrokeColor = "#000";
}
contornoOscuro.addEventListener("click", aplicarContornoOscuro);

function aplicarEspaciado() {
  topText.style.letterSpacing = espaciadoText.value + "px";
  bottomText.style.letterSpacing = espaciadoText.value + "px";
}
espaciadoText.addEventListener("input", aplicarEspaciado);

function aplicarInterlineado() {
  topText.style.lineHeight = interlineadoText.value;
  bottomText.style.lineHeight = interlineadoText.value;
}
interlineadoText.addEventListener("input", aplicarInterlineado);

function cerrarAside() {
  aside.style.display = "none";
}

cerrarButton.addEventListener("click", cerrarAside);

function descargarMeme() {
  domtoimage.toBlob(meme).then(function (blob) {
    saveAs(blob, "meme.png");
  });
}

descarga.addEventListener("click", descargarMeme);
