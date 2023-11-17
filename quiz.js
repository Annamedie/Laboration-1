let currentQuestionIndex = 0;
score = 0;
/**
 * @typedef {{question: string, answers:[]}} Question
 * @typedef {{text: string, correct: boolean}} Answer
 */
/**
 * A list of properties that build the Quiz, infromation collected by the function renderquiz.
 * @type {Question[]}
 * @type {Answer[]}
 */
const questions = [
  {
    question: "Vilket år öppnade Fuji-Q Highland?",
    answers: [
      {
        text: "År 1950",
        correct: false,
      },
      {
        text: "År 1968",
        correct: true,
      },
      {
        text: "År 1979",
        correct: false,
      },
    ],
  },
  {
    question: "Vad är maxfarten för Do-Dodonpa?",
    answers: [
      {
        text: "180km/h",
        correct: true,
      },
      {
        text: "190km/h",
        correct: false,
      },
      {
        text: "170km/h",
        correct: false,
      },
    ],
  },
  {
    question: "Vilket företag har tillverkat Takabisha?",
    answers: [
      {
        text: "Intamin",
        correct: false,
      },
      {
        text: "Gerstlauer",
        correct: true,
      },
      {
        text: "TOGO",
        correct: false,
      },
    ],
  },
  {
    question: "Vad är maxåldern för att åka Fujiyama?",
    answers: [
      {
        text: "75 år",
        correct: false,
      },
      {
        text: "Finns ingen maxålder",
        correct: false,
      },
      {
        text: "64 år",
        correct: true,
      },
    ],
  },
  {
    question: "Vilken typ av berg- och dalbana är Eejanaika?",
    answers: [
      {
        text: "3D",
        correct: false,
      },
      {
        text: "Zac-spin",
        correct: false,
      },
      {
        text: "4D",
        correct: true,
      },
    ],
  },
  {
    question: "Vad får Do-Dodonpa att accelerera så fort?",
    answers: [
      {
        text: "Tryckluft",
        correct: true,
      },
      {
        text: "Hydraulik",
        correct: false,
      },
      {
        text: "LSM- Linear synchronous Motor",
        correct: false,
      },
    ],
  },
  {
    question: "Hur brant är droppet på Takabisha?",
    answers: [
      {
        text: "100 grader",
        correct: false,
      },
      {
        text: "138 grader",
        correct: false,
      },
      {
        text: "121 grader",
        correct: true,
      },
    ],
  },
  {
    question: "Varför uppmärksammades Fujiyama år 2000",
    answers: [
      {
        text: "Flera besökare bröt ben på attraktionen",
        correct: false,
      },
      {
        text: "Var med i en studie om subduralblödning",
        correct: true,
      },
      {
        text: "Orsakade amblyopi hos vuxna",
        correct: false,
      },
    ],
  },
  {
    question: "Vad betyder Eejanaika?",
    answers: [
      {
        text: "Är den inte bra?!",
        correct: true,
      },
      {
        text: "Något extra!",
        correct: false,
      },
      {
        text: "Högt flygande bilar",
        correct: false,
      },
    ],
  },
  {
    question:
      "I vilket land kommer väldens högsta, längsta och snabbaste berg- och dalbana byggas?",
    answers: [
      {
        text: "USA",
        correct: false,
      },
      {
        text: "Saudi Arabien",
        correct: true,
      },
      {
        text: "Kina",
        correct: false,
      },
    ],
  },
];
