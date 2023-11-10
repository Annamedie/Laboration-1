let activeSceneIndex = 0;
const scenes = [
  // 0
  {
    headline: "Spänningen i luften",
    text: "Wow vi är inne i parken.",
    buttonOptions: [
      {
        text: "Gå längre in",
        nextSceneIndex: 1,
      },
    ],
    collectible: "/iventory/star.png",
    potrait: "url('/background-pics/excited.jpg')",
    background: "url('/background-pics/fujipark.jpg')",
  },
  // 1
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
    potrait: "url('/background-pics/exi4.png')",
    background: "url('/background-pics/dodompa.jpg')",
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
      {
        text: "Åk inte urk",
        nextSceneIndex: 3,
      },
    ],
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/dodompa.jpg')",
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
    collectible: "/iventory/star2.png",
    potrait: "url('/background-pics/exit3.png')",
    background: "url('/background-pics/eenjanka.jpg')",
  },
];
