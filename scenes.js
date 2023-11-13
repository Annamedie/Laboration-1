let activeSceneIndex = 0;
const scenes = [
  // 0
  {
    headline: "Spänningen i luften",
    text: "Wow vi är inne i parken.",
    buttonOptions: [
      {
        text: "Gå till Fujiyama!",
        nextSceneIndex: 1,
      },
      {
        text: "Knalla längre vi ska!",
        nextSceneIndex: 1,
      },
      {
        text: "Gå till Do-Dodonpa!",
        nextSceneIndex: 1,
      },
    ],
    collectible: "/iventory/star.png",
    potrait: "url('/background-pics/excited.jpg')",
    background: "url('/background-pics/fujipark.jpg')",
  },
  // 1
  {
    headline: "Jäklar vilken vy!",
    text: "Härifrån kan vi se två fantastiska berg-och dalbanor den ena är Eejanaika ser röd ut från denna vinkeln",
    buttonOptions: [
      {
        text: "Gå till Takabisha",
        nextSceneIndex: 1,
      },
      {
        text: "Ska vi gå tillbaka?",
        nextSceneIndex: 1,
      },
      {
        text: "Gå till Eejanaika",
        nextSceneIndex: 1,
      },
    ],
    collectible: "/iventory/star.png",
    potrait: "url('/background-pics/excited.jpg')",
    background: "url('/background-pics/fujipark.jpg')",
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
    potrait: "url('/background-pics/exi4.png')",
    background: "url('/background-pics/dodompa.jpg')",
  },
  //2
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
  //3
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
//
