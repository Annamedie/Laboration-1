//window.addEventListener("DOMContentLoaded", main);
//Gobal variable and function call for main() to start.
const backgroundElement = document.getElementById("background");
const btnElement = document.querySelector(".btn-options");
const nextBtnElement = document.getElementById("next-btn");
const pElement = document.querySelector("p");
const h1Element = document.querySelector("h1");
let content = document.getElementById("content");
let contentElement;
let inputElement;
let inputBtn;
let inputName;
let collectibleImage;
let inventory = [];
main();
/** Here is where the program starts*/
function main() {
  startPage();
}
/** Sets up the start page with html for the game and takes in a name and stores it to localstorage*/
function startPage() {
  contentElement = document.querySelector(".text-content");
  inputElement = document.createElement("input");

  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("placeholder", "Skriv ditt namn!");

  inputBtn = document.createElement("button");
  resetBtn = document.createElement("button");

  inputBtn.innerText = "Sänd";
  resetBtn.innerText = "Nollställ Fuji-Q";

  inputElement.className = "input-field";
  inputBtn.className = "input-btn";
  resetBtn.className = "input-btn";

  let checkStorage = localStorage.getItem("name");
  inputElement.value = checkStorage || "";

  inputBtn.onclick = function () {
    inputName = inputElement.value;
    if (!inputName && !checkStorage) {
      inputName = "Britt-Börje";
    }
    localStorage.setItem("name", inputName);
    inputElement.value = "";
    renderWelcome(inputElement, inputBtn, inputName);
  };
  resetBtn.onclick = function () {
    localStorage.clear();
  };
  contentElement.appendChild(inputElement);
  contentElement.appendChild(inputBtn);
  contentElement.appendChild(resetBtn);
}
/**
 * Takes in two elements and displays a welcome text with a button.
 * @param {string} inputElement A input field that is removed from the page.
 * @param {string} inputBtn Sets a new text to this button and a new onclick event.
 */
function renderWelcome(inputElement, inputBtn) {
  contentElement.removeChild(inputElement);
  contentElement.removeChild(resetBtn);
  let savedName = localStorage.getItem("name") || "Britt-Börje";
  inputBtn.innerText = "Click here to enter the park";
  pElement.textContent = "";
  h1Element.textContent = "Välkommen till FUJI-Q Highland, " + savedName + "!!";
  inputBtn.onclick = renderScenes;
}

let hasRemovedInputExecuted = false;
/**
 * Generates html elements from the scenes file, and render them on the screen. Also handles the iventory display from localstorage with a toggle button.
 */
function renderScenes() {
  if (!hasRemovedInputExecuted) {
    contentElement.removeChild(inputBtn);
    hasRemovedInputExecuted = true;
  }
  nextBtnElement.style.display = "none";

  cleanSlate();

  const scene = scenes[activeSceneIndex];
  removeCollectibleIfInLocalStorage(scene);
  loadFromLocalstorage();

  h1Element.textContent = scene.headline;
  pElement.textContent = scene.text;
  backgroundElement.style.backgroundImage = scene.background;
  backgroundElement.style.backgroundPosition = "center";

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
    let randomIntTop =
      Math.floor(Math.random() * (window.innerHeight - 30)) + "px";
    let randomIntLeft =
      Math.floor(Math.random() * (window.innerWidth - 10)) + "px";
    collectibleImage.setAttribute("src", scene.collectible);
    collectibleImage.setAttribute("width", "100");
    collectibleImage.setAttribute("height", "100");
    collectibleImage.setAttribute("alt", "Collectible image");
    collectibleImage.className = "collectible";
    collectibleImage.style.top = randomIntTop;
    collectibleImage.style.left = randomIntLeft;
    document.body.appendChild(collectibleImage);
  }
  document.body.appendChild(collectibleImage);
  collectibleImage.addEventListener("click", putInInventory);

  let iframeYoutube = document.getElementById("youtube-iframe");

  if (iframeYoutube) {
    contentElement.removeChild(iframeYoutube);
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
    contentElement.appendChild(iframe);
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
  /**
   * onclick function displays the collected images. Toggle effect.
   */
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
/**
 * Sets the sceen by taking in the index for that sceen and calls on function to render that scene.
 * @param {number} sceneIndex takes in the activescene index.
 */
function nextScene(sceneIndex) {
  if (sceneIndex === 100) {
    startQuiz();
  } else {
    activeSceneIndex = sceneIndex;
    renderScenes();
  }
}
/**
 * Makes littles dots appear over an image when you mouve the mouse over the element.
 * @param {MouseEvent} event Takes in the movments of the mouse over a htmldivelement.
 */
function moveMouseOver(event) {
  const getPaint = document.createElement("div");
  getPaint.className = "dots";
  document.body.appendChild(getPaint);
  getPaint.style.top = event.clientY + "px";
  getPaint.style.left = event.clientX + "px";
}
/**
 * Based on the colletible images present in a particular scene pushes it in an array and removes it from the page. Called when user clicks on a collectible element.
 */
function putInInventory() {
  inventory.push(scenes[activeSceneIndex].collectible);
  document.body.removeChild(collectibleImage);
  scenes[activeSceneIndex].collectible = "";
  saveToLocalStorage();
}
/**
 * Takes in the active scene checks if its has a collectible if so checks if it present i localstorage, if so finds the matching image in the html document and removes it.
 * @param {number} scene the active scene that is renderd.
 * @returns {void} if scene dont contain collectible.
 */
function removeCollectibleIfInLocalStorage(scene) {
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

  storedInventory.forEach((item) => {
    if (item === sceneCollectible) {
      let previousColletible = document.querySelector("img[src^='/iventory/']");
      if (document.body.contains(previousColletible)) {
        document.body.removeChild(previousColletible);
      }
    }
  });
}
/**
 * Called from renderscenes before scene is renderd, finds all previous set htmlelements and removes them.
 */
function cleanSlate() {
  const removedElements = document.querySelectorAll(
    ".collectible-container, .potrait-container, .subtitles, .dots, img, .btn"
  );
  removedElements.forEach((element) => {
    element.remove();
  });
}
/**
 * Called from putInInventory. Saves the img Collectible in localstorage.
 */
function saveToLocalStorage() {
  const inventoryString = JSON.stringify(inventory);
  localStorage.setItem("inventory", inventoryString);
}
/**
 * Called from renderScenes and a clickevent for checking the inventory in localstorage. Checks if there is something saved under the key: inventory. If so puts in the savedInventory.
 */
function loadFromLocalstorage() {
  const inventoryString = localStorage.getItem("inventory");
  if (inventoryString) {
    const savedInventory = JSON.parse(inventoryString);
    inventory = savedInventory;
  } else {
    inventory = [];
  }
}

/* Here starts the code for the quiz*/
/**
 * Called from nextScene, starts the quiz by reseting variabels.
 */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtnElement.innerHTML = "Next";
  renderQuiz();
}
/**
 * Takes in objects from the quizfile and sets up the questions with html elements.
 */
function renderQuiz() {
  cleanSlate();
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  numberQuestion = currentQuestionIndex + 1;
  h1Element.innerHTML = numberQuestion + ". " + currentQuestion.question;
  for (let answer of currentQuestion.answers) {
    const quizBtns = document.createElement("button");
    quizBtns.textContent = answer.text;
    quizBtns.classList.add("btn-quiz");
    btnElement.appendChild(quizBtns);
    if (answer.correct) {
      quizBtns.dataset.correct = answer.correct;
    }
    quizBtns.addEventListener("click", selectedAnswer);
  }
  if (inventory.length >= 4) {
    pElement.innerHTML =
      "Fyra samlade stjärnor ger en ledtråd:<br>Dee är öken!";
  }
}
/**
 * Called from renderQuiz. Resets the html document when you move to the nextquestion.
 */
function resetState() {
  pElement.innerHTML = "";
  nextBtnElement.style.display = "none";
  while (btnElement.firstChild) {
    btnElement.removeChild(btnElement.firstChild);
  }
}
/**
 * Sets diffrent classes dependent on if the user marks the correct answer or not, shows the correct answer if the incorret on is choosen and disables them. If correct answer increment the score Then shows the a button to go the next question.
 * @param {MouseEvent} e What button element the user clicked on.
 */
function selectedAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  const buttons = btnElement.children;
  for (let button of buttons) {
    if (button.dataset.correct === "true") button.classList.add("correct");
    button.disabled = true;
  }
  nextBtnElement.style.display = "block";
}
/** If the currrent question index is lower then the length of the questions array go to the next question when clicked or go back to the scenes */
nextBtnElement.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    goToNextQuestion();
  } else {
    renderScenes();
  }
});
/**
 * Increment the currentQuestionIndex variables to move to the next question. If this is lower than the array of question render the next question or else show the final score.
 */
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    renderQuiz();
  } else {
    showScore();
  }
}
/**
 * Shows the score and a diffrent message dependet of how well the user did.
 */
function showScore() {
  resetState();
  h1Element.innerHTML = `Du hade rätt på ${score} utav ${questions.length}!`;
  if (score === 10) {
    pElement.textContent = "Alla rätt en riktig fantast!";
  } else if (score < 10 && score > 5) {
    pElement.textContent = "Inte helt illa!";
  } else {
    pElement.textContent = "Bättre lycka nästa gång!";
  }

  nextBtnElement.innerHTML = "Gå ut i parken!";
  nextBtnElement.style.display = "block";
}
