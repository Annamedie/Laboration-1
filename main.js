//window.addEventListener("DOMContentLoaded", main);

const backgroundEl = document.getElementById("background");
const btnEl = document.querySelector(".btn-options");
const nextBtnElement = document.getElementById("next-btn");
const pEl = document.querySelector("p");
const h1El = document.querySelector("h1");
let content = document.getElementById("content");
let textConEl;
let inputEl;
let inputBtn;
let inputName;
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
  resetBtn = document.createElement("button");

  inputBtn.innerText = "Sänd";
  resetBtn.innerText = "Nollställ Fuji-Q";

  inputEl.className = "input-field";
  inputBtn.className = "input-btn";
  resetBtn.className = "input-btn";

  let checkStorage = localStorage.getItem("name");
  inputEl.value = checkStorage || "";

  inputBtn.onclick = function () {
    inputName = inputEl.value;
    if (!inputName && !checkStorage) {
      inputName = "Britt-Börje";
    }
    localStorage.setItem("name", inputName);
    inputEl.value = "";
    renderWelcome(inputEl, inputBtn, inputName);
  };
  resetBtn.onclick = function () {
    localStorage.clear();
  };
  textConEl.appendChild(inputEl);
  textConEl.appendChild(inputBtn);
  textConEl.appendChild(resetBtn);
}

//iname följde med
function renderWelcome(inputEl, inputBtn, inputName) {
  textConEl.removeChild(inputEl);
  textConEl.removeChild(resetBtn);
  let savedName = localStorage.getItem("name") || "Britt-Börje";
  inputBtn.innerText = "Click here to enter the park";
  pEl.textContent = "";
  h1El.textContent = "Välkommen till FUJI-Q Highland, " + savedName + "!!";
  inputBtn.onclick = renderScenes;
}

let hasRemovedInputExecuted = false;

function renderScenes() {
  if (!hasRemovedInputExecuted) {
    textConEl.removeChild(inputBtn);
    hasRemovedInputExecuted = true;
  }
  nextBtnElement.style.display = "none";

  cleanSlate();

  const scene = scenes[activeSceneIndex];
  removeCollectiblesPage(scene);
  loadFromLocalstorage();

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

  const iframe = document.createElement("iframe");

  let iframeYoutube = document.getElementById("youtube-iframe");

  if (iframeYoutube) {
    textConEl.removeChild(iframeYoutube);
  }
  if (scene.video) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("id", "youtube-iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = scene.video;
    iframe.title = "YouTube video player";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    textConEl.appendChild(iframe);
  }

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
  inventoryButton.textContent = "Kolla i fickan";
  buttonOptionsContainer.appendChild(inventoryButton);

  let isInventoryVisible = false;

  inventoryButton.onclick = function () {
    loadFromLocalstorage();
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
    startQuiz();
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
  scenes[activeSceneIndex].collectible = "";
  saveToLocalStorage();
}
function removeCollectiblesPage(scene) {
  if (!scene.collectible) {
    return;
  }
  let storedInventory = [];

  if (localStorage.key("inventory")) {
    const inventoryString = localStorage.getItem("inventory");
    if (inventoryString) {
      storedInventory = JSON.parse(inventoryString);
      console.log("Stored Inventory:", storedInventory);
    }
  }
  const sceneCollectible = scene.collectible;

  /*storedInventory.forEach((item) => {
    console.log("Comparison:", item === sceneCollectible);
  });*/
  //"img[src^='/iventory/']"
  storedInventory.forEach((item) => {
    if (item === sceneCollectible) {
      console.log("prutt1");
      let previousColletible = document.querySelector("img[src^='/iventory/']");
      if (
        /*previousColletible &&*/ document.body.contains(previousColletible)
      ) {
        document.body.removeChild(previousColletible);
        console.log("prutt");
      }
    }
  });
}

function cleanSlate() {
  const removedElements = document.querySelectorAll(
    ".collectible-container, .potrait-container, .subtitles, .dots, img, .btn"
  );
  removedElements.forEach((element) => {
    element.remove();
  });
}
function saveToLocalStorage() {
  const inventoryString = JSON.stringify(inventory);
  localStorage.setItem("inventory", inventoryString);
}
function loadFromLocalstorage() {
  const inventoryString = localStorage.getItem("inventory");
  if (inventoryString) {
    const savedInventory = JSON.parse(inventoryString);
    inventory = savedInventory;
  } else {
    inventory = [];
  }
}

/*code for the quiz*/
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtnElement.innerHTML = "Next";
  renderQuiz();
  //answers;
}
function renderQuiz() {
  cleanSlate();
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  numberQuestion = currentQuestionIndex + 1;
  h1El.innerHTML = numberQuestion + ". " + currentQuestion.question;
  for (let answer of currentQuestion.answers) {
    const quizBtns = document.createElement("button");
    quizBtns.textContent = answer.text;
    quizBtns.classList.add("btn-quiz");
    btnEl.appendChild(quizBtns);
    if (answer.correct) {
      quizBtns.dataset.correct = answer.correct;
    }
    quizBtns.addEventListener("click", selectedAnswer);
  }
  if (inventory.length >= 4) {
    pEl.innerHTML = "Fyra stjärnor ger en ledtråd!<br>Dee är öken!";
  }
  console.log(inventory);
}
function resetState() {
  pEl.innerHTML = "";
  nextBtnElement.style.display = "none";
  while (btnEl.firstChild) {
    btnEl.removeChild(btnEl.firstChild);
  }
}
function selectedAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  const buttons = btnEl.children;
  for (let button of buttons) {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  }
  nextBtnElement.style.display = "block";
}
nextBtnElement.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    goToNextQuestion();
  } else {
    renderScenes();
  }
});
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuiz();
  } else {
    showScore();
  }
}
function showScore() {
  resetState();
  h1El.innerHTML = `Du hade rätt på ${score} utav ${questions.length}!`;
  if (score === 10) {
    pEl.textContent = "Alla rätt en riktig fantast!";
  } else if (score < 10 && score > 5) {
    pEl.textContent = "Grymt jobbat!";
  } else {
    pEl.textContent = "Bättre lycka nästa gång!";
  }

  nextBtnElement.innerHTML = "Gå ut i parken!";
  nextBtnElement.style.display = "block";
}
