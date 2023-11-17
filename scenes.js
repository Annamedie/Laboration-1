let activeSceneIndex = 0;
/**
 * @typedef {{headline: string, text:string, buttonoptions:[], collectible: number, potrait: string, background:string, video:string }} Scene
 * @typedef {{text: string, nextSceneIndex: number}} ButtonOption
 */
/**
 * A list of propities that build a scene used by the renderScenes function in the main.js
 * @type {Scene[]}
 * @type {ButtonOption[]}
 */
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
    collectible: "iventory/star.png",
    potrait: "url('potraits/maninfr3.jpg')",
    background: "url('background-pics/fujipark.jpg')",
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
    collectible: "iventory/star3.png",
    potrait: "url('potraits/maninfr4.jpg')",
    background: "url('background-pics/fujiqinside.jpg')",
  },
  //2
  {
    headline: " Vill du åka Do-Dodonpa? 180km/h",
    text: "Do-Dodonpa öppnade år 2001, tillverkad av S&S-Sansei Technologies och använder sig av tryckluft för att skjuta iväg tågen. Det är världens tredje snabbaste berg- och dalbanan med en max fart på 180km/h vilket nås på 1,8sek. Vilket är världens snabbaste acceleration. Namnet kommer ifrån de dova trummande ljud besökaren möts av i kön till attraktionen och ska symbolisera Japans styrka. Sedan 2020 är Do-Dodonpa stängd pga att flera passagerare skadas och 9 av dessa brutit ett ben.",
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
    potrait: "url('potraits/exi4.png')",
    background: "url('background-pics/dodompa.jpg')",
  },
  //3
  {
    headline: " Ska vi åka Fujiyama? 130km/h",
    text: "Tillverkad av TOGO och vid öppning 1996 var den högsta berg- och dalbanan i världen på 79 meter. Namnet kommer från berget vid nöjesfältet, Fuji som av utlänningar missbenämns Fujiyama, egentligen kallas berget Fujisan. Attraktionen har en maxålder för att åka på 64år. Den ingick även i en studie om subduralblödning år 2000.",
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
    potrait: "url('potraits/excited2.png')",
    background: "url('background-pics/fujiyama.jpg')",
  },
  //4
  {
    headline: " Vill du åka Eejanaika? 126km/h",
    text: "Detta är en 4D berg- och dalbana, en av fyra i världen och tillverkad av S&S Arrow år 2006 (senare Sansei Technologies) 4D betyder att stolarna kan rotera 360 grader samtidigt som själva tåget roterar längs banan. Detta sker  med extra spår i rälsen som styr stolarnas rörelse. Av många anses detta vara en av världens främsta berg- och dalbanor. Namnet betyder ungefär: Är den inte bra?!",
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
    collectible: "iventory/star2.png",
    potrait: "url('potraits/exit3.png')",
    background: "url('background-pics/eenjanka.jpg')",
  },
  //5
  {
    headline: "Vill du åka Takabisha? 100km/h",
    text: "Byggd av Gerstlauer år 2011 är känd för sitt dropp på 121 grader och var världens brantaste berg- och dalbana. Namnet betyder: Högt flygande bil. Attraktionen består av flera lopar och en launch förutom det berömde droppet.",
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
    collectible: "iventory/starny.png",
    potrait: "url('potraits/sloth.jpg')",
    background: "url('background-pics/takabisha.jpg')",
  },
  //6
  {
    headline: "Do-Dodonpa",
    text: "One, Two, Threeee!!",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 0,
      },
    ],
    video: "https://www.youtube.com/embed/XXGKrIE5tq4?si=yTcdmN8vx_Yn8ukY",
    potrait: "url('potraits/womanonr2.jpg')",
    background: "url('background-pics/moonsault.webp')",
  },
  //7
  {
    headline: "Takabisha",
    text: "Phu snurrigt asså",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 1,
      },
    ],
    video: "https://www.youtube.com/embed/GGF2i-tjvts?si=RN0SyE4KIkHEvyvv",
    potrait: "url('potraits/volonr4.jpg')",
    background: "url('background-pics/moonsault.webp')",
  },
  //8
  {
    headline: "Eejanaika",
    text: "Var det där tyska eller holländska?",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 1,
      },
    ],
    video: "https://www.youtube.com/embed/GdeWu8-kASw?si=g_9Uq5M934gv6uya",
    potrait: "url('potraits/peopleonr.jpg')",
    background: "url('background-pics/moonsault.webp')",
  },
  //9
  {
    headline: "Fujiyama",
    text: "Wieee, I am king of the world!",
    buttonOptions: [
      {
        text: "Woop nästa åk!",
        nextSceneIndex: 0,
      },
    ],
    video: "https://www.youtube.com/embed/zozg3nFpu2w?si=HVR-gu9s6JjinvA8",
    potrait: "url('potraits/slothonrr.jpg')",
    background: "url('background-pics/moonsault.webp')",
  },
];
//
