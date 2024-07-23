const $ = (id) => document.getElementById(id);

const textButton = $("button-header-texto");
const imgButton = $("button-header-imagen");
const imgSection = $("section-img");
const textSection = $("section-text");
const urlInput = $("url");
const meme = $("meme");

textButton.onclick = () => {
  console.log("text button clicked");
  imgSection.classList.add("hidden");
  textSection.classList.remove("hidden");
};

imgButton.onclick = () => {
  console.log("img button clicked");
  imgSection.classList.remove("hidden");
  textSection.classList.add("hidden");
};

urlInput.onchange = (e) => {
  meme.src = e.target.value;
};
