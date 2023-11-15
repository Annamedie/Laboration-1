let activeSceneIndex = 0;
const scenes = [
  // 0
  {
    headline: "Spänningen i luften",
    text: "Wow vi är inne i parken.",
    buttonOptions: [
      {
        text: "Gå till Fujiyama!",
        nextSceneIndex: 3,
      },
      {
        text: "Knalla längre vi ska!",
        nextSceneIndex: 1,
      },
      {
        text: "Gå till Do-Dodonpa!",
        nextSceneIndex: 2,
      },
      {
        text: "Quizdags?!",
        nextSceneIndex: 100,
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
        nextSceneIndex: 5,
      },
      {
        text: "Ska vi gå tillbaka?",
        nextSceneIndex: 0,
      },
      {
        text: "Gå till Eejanaika!",
        nextSceneIndex: 4,
      },
    ],
    collectible: "/iventory/star3.png",
    potrait: "url('/background-pics/excited.jpg')",
    background: "url('/background-pics/fujiqinside.jpg')",
  },
  //2
  {
    headline: " Vill du åka Do-Dodonpa?",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "OMG kom igen så åker vi!",
        nextSceneIndex: 6,
      },
      {
        text: "Finns inte på kartan!!",
        nextSceneIndex: 0,
      },
    ],
    potrait: "url('/background-pics/exi4.png')",
    background: "url('/background-pics/dodompa.jpg')",
  },
  //3
  {
    headline: "Fujiyama",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Let's goooooo!",
        nextSceneIndex: 9,
      },
      {
        text: "Nope, Niet, Nien",
        nextSceneIndex: 0,
      },
    ],
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/fujiyama.jpg')",
  },
  //4
  {
    headline: "Eejanaika",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Jaa! Har väntat eoner på detta!",
        nextSceneIndex: 8,
      },
      {
        text: "Aldrig i livet!",
        nextSceneIndex: 1,
      },
    ],
    collectible: "/iventory/star2.png",
    potrait: "url('/background-pics/exit3.png')",
    background: "url('/background-pics/eenjanka.jpg')",
  },
  //5
  {
    headline: "Takabisha",
    text: "Detta här är världens tredje snabbaste bergodalbana 180km/h snabbast acceleriton men avstängd mycket skador",
    buttonOptions: [
      {
        text: "Vamos Muchachos!",
        nextSceneIndex: 7,
      },
      {
        text: "Ni madres!!",
        nextSceneIndex: 1,
      },
    ],
    collectible: "/iventory/starny.png",
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/Takabashi.jpg')",
  },
  //6
  {
    headline: "Do-Dodonpa",
    text: "Vilket åk",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 0,
      },
    ],
    video: "https://www.youtube.com/embed/XXGKrIE5tq4?si=yTcdmN8vx_Yn8ukY",
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/moonsault.webp')",
  },
  //7
  {
    headline: "Takabisha",
    text: "Vilket åk",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 1,
      },
    ],
    video: "https://www.youtube.com/embed/zozg3nFpu2w?si=HVR-gu9s6JjinvA8",
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/moonsault.webp')",
  },
  //8
  {
    headline: "Eejanaika",
    text: "Vilket åk",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 1,
      },
    ],
    video: "https://www.youtube.com/embed/GdeWu8-kASw?si=g_9Uq5M934gv6uya",
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/moonsault.webp')",
  },
  //9
  {
    headline: "Fujiyama",
    text: "Vilket åk",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 0,
      },
    ],
    video: "https://www.youtube.com/embed/GGF2i-tjvts?si=RN0SyE4KIkHEvyvv",
    potrait: "url('/background-pics/excited2.png')",
    background: "url('/background-pics/moonsault.webp')",
  },
];
//
