let activeSceneIndex = 0;
const scenes = [
  {
    headLine: "Spänningen i luften",
    text: "Wow vi är inne i parken.",
    buttonOptions: [
      {
        text: "Gå längre in",
        nextSceneIndex: 1,
      },
    ],
    background: "url('fujipark.jpg')",
  },
  {
    headline: "Do-Dodonpa",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Åk den",
        nextSceneIndex: 2,
      },
      {
        text: "Åk inte urk",
        nextSceneIndex: 3,
      },
    ],
    background: "url('dodompa.jpg')",
  },
  {
    headline: "Fujiyama",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Åk den",
        nextSceneIndex: 3,
      },
      {
        text: "Åk inte urk",
        nextSceneIndex: 3,
      },
    ],
    background: "url('dodompa.jpg')",
  },
  {
    headline: "Eejanaika",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Åk den",
        nextSceneIndex: 0,
      },
      {
        text: "Åk inte urk",
        nextSceneIndex: 1,
      },
    ],
    background: "url('eenjanka.jpg')",
  },
];
