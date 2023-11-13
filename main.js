//window.addEventListener("DOMContentLoaded", main);

const backgroundEl = document.getElementById("background");
const btnEl = document.querySelector(".btn-options");
const pEl = document.querySelector("p");
const h1El = document.querySelector("h1");
let content = document.getElementById("content");
let textConEl;
let inputEl;
let inputBtn;
let inName;
let collectibleImage;
let inventory = [];
main();

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
  textConEl.removeChild(inputEl);
  inputBtn.innerText = "Click here to enter the park";
  pEl.textContent = "";
  h1El.textContent = "Välkommen till FUJI-Q Highland, " + inName + "!!";
  inputBtn.onclick = renderScenes;
}

let hasRemovedInputExecuted = false;

function renderScenes() {
  if (!hasRemovedInputExecuted) {
    textConEl.removeChild(inputBtn);
    hasRemovedInputExecuted = true;
  }
  cleanSlate();
  const scene = scenes[activeSceneIndex];

  let previousColletible = document.querySelector("img[src^='/iventory/']");
  if (previousColletible) {
    document.body.removeChild(previousColletible);
  }

  h1El.textContent = scene.headline;
  pEl.textContent = scene.text;
  backgroundEl.style.backgroundImage = scene.background;
  backgroundEl.style.backgroundPosition = "center";

  let collectibleContainer = document.createElement("div");
  collectibleContainer.className = "collectible-container";
  document.body.insertAdjacentElement("afterbegin", collectibleContainer);

  const photoContainer = document.createElement("div");
  photoContainer.className = "potrait-container";
  photoContainer.style.backgroundImage = scene.potrait;
  document.body.appendChild(photoContainer);

  const subtitlesContainer = document.createElement("div");
  subtitlesContainer.className = "subtitles";
  subtitlesContainer.textContent = "Paint me, with your mouse!";
  document.body.appendChild(subtitlesContainer);

  photoContainer.addEventListener("mousemove", moveMouseOver);
  collectibleImage = document.createElement("img");

  const collectibleInInventory = inventory.includes(scene.collectible);

  if (scene.collectible && !collectibleInInventory) {
    collectibleImage.setAttribute("src", scene.collectible);
    collectibleImage.setAttribute("width", "100");
    collectibleImage.setAttribute("height", "100");
    collectibleImage.setAttribute("alt", "Collectible image");
    collectibleImage.classList;
    document.body.appendChild(collectibleImage);
  }
  document.body.appendChild(collectibleImage);
  collectibleImage.addEventListener("click", putInInventory);

  buttonOptionsContainer = document.getElementById("btn-options");
  buttonOptionsContainer.className = "btn-options";
  buttonOptionsContainer.innerHTML = "";

  for (const buttonOption of scene.buttonOptions) {
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = buttonOption.text;
    buttonOptionsContainer.appendChild(button);
    button.onclick = function () {
      nextScene(buttonOption.nextSceneIndex);
    };
  }
  const inventoryButton = document.createElement("button");
  inventoryButton.className = "btn";
  inventoryButton.textContent = "View Inventory";
  buttonOptionsContainer.appendChild(inventoryButton);

  let isInventoryVisible = false;

  inventoryButton.onclick = function () {
    isInventoryVisible = !isInventoryVisible;

    collectibleContainer.innerHTML = "";

    if (isInventoryVisible) {
      inventory.forEach((star) => {
        const image = document.createElement("img");
        image.src = star;
        collectibleContainer.appendChild(image);
      });
    }
  };
}
function nextScene(sceneIndex) {
  if (sceneIndex === 100) {
    renderQuiz();
  } else {
    activeSceneIndex = sceneIndex;
    renderScenes();
  }
}
function moveMouseOver(event) {
  const getPaint = document.createElement("div");
  getPaint.className = "dots";
  document.body.appendChild(getPaint);
  getPaint.style.top = event.clientY + "px";
  getPaint.style.left = event.clientX + "px";
}
function putInInventory() {
  inventory.push(scenes[activeSceneIndex].collectible);
  document.body.removeChild(collectibleImage);
}
function cleanSlate() {
  const removedElements = document.querySelectorAll(
    ".collectible-container, .potrait-container, .subtitles, .dots, img"
  );
  removedElements.forEach((element) => {
    element.remove();
  });
}
