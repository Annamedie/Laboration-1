window.addEventListener("DOMContentLoaded", main);

const backgroundEl = document.getElementById("background");
const btnEl = document.querySelector(".btn-options");
const pEl = document.querySelector("p");
const h1El = document.querySelector("h1");
let textConEl;
let inputEl;
let inputBtn;
let inName;

function main() {
  startPage();
}

function startPage() {
  textConEl = document.querySelector(".text-content");
  inputEl = document.createElement("input");

  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("placeholder", "Skriv ditt namn!");

  inputBtn = document.createElement("button");
  inputBtn.innerText = "Sänd";

  inputEl.className = "input-field";
  inputBtn.className = "input-btn";

  inputBtn.onclick = function () {
    inName = inputEl.value;
    if (inName === "") {
      inName = "Britt-Börje";
    }

    inputEl.value = "";
    renderWelcome(inputEl, inputBtn, inName);
  };
  textConEl.appendChild(inputEl);
  textConEl.appendChild(inputBtn);
}

//iname följde med
function renderWelcome(inputEl, inputBtn, inName) {
  console.log("dasd");
  textConEl.removeChild(inputEl);
  inputBtn.innerText = "Click here to enter the park";
  pEl.textContent = "";
  h1El.textContent = "Välkommen till FUJI-Q Highland, " + inName + "!!";
  inputBtn.onclick = renderScenes;
}

function renderScenes() {
  textConEl.removeChild(inputBtn);
  const scene = scenes[activeSceneIndex];

  h1El.textContent = scene.headline;
  pEl.textContent = scene.text;
  backgroundEl.style.backgroundImage = scene.background;
  backgroundEl.style.backgroundPosition = "center";

  buttonOptionsContainer = document.getElementById("btn-options");
  buttonOptionsContainer.className = "btn-options";
  buttonOptionsContainer.innerHTML = "";
  for (const buttonOption of scene.buttonOptions) {
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = buttonOption.text;
    buttonOptionsContainer.appendChild(button);
  }
}
