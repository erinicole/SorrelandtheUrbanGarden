console.log("Webpack is working!");
import Character from "./character";
import { allText, changePage } from "./text";

window.Character = Character;

window.addEventListener("DOMContentLoaded", event => {
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
    const pageWordsArray = allText()[1].text.split(" ");
    const grammar =
      "#JSGF V1.0; grammar pageWordsArray; public <word> = " +
      pageWordsArray.join(" | ") +
      " ;";
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    //recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // const diagnostic = document.querySelector(".text-area");
    // const wordBackground = document.querySelector("html");

    let wordHTML = "";
    pageWordsArray.forEach(function(word, index) {
      console.log(word, index);
      wordHTML +=
        `<span class="word ${word.toLowerCase()}"> `+ word + " </span>";
    });
    const talkArea = document.getElementById("talk-area");
    talkArea.innerHTML = wordHTML

    document.body.onclick = function() {
      recognition.start();
      console.log("Ready to receive a color command.");
    };

    recognition.onresult = function(event) {
        // debugger
      const last = event.results.length - 1;
      const spokenWords = event.results[last][0].transcript.toLowerCase().split(" ");
      spokenWords.forEach( spokenWord => {
          const htmlWord = document.getElementsByClassName(spokenWord)[0];
          console.log(spokenWord)
          htmlWord.classList.remove('word')
          console.log(htmlWord)
      })
    //   diagnostic.textContent = "Result received: " + words + ".";
    //   bg.style.backgroundColor = color;
      console.log("Confidence: " + event.results[0][0].confidence);
    };

  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const canvasWidth = width / 2;
  const str = String(canvasWidth) + "px";
  console.log(str);
  const body = document.getElementById("body");
  const canvas = document.getElementById("story-canvas");
  const textArea = document.getElementById("text-area");
  let page = 0
  textArea.innerHTML = allText()[page].text;
  body.style.backgroundColor = `rgb(227, 254, 255)`;
  canvas.style.width = str;
  canvas.style.height = "100vh";
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
  const girl = new Character({ x: 0, y: 100, ctx });
  girl.drawImage();
  // this paints the sky
  ctx.fillStyle = `rgb(227, 254, 255)`;
  ctx.fillRect(0, 0, width, height);
  //this paints the ground
  ctx.beginPath();
  ctx.rect(0, 140, width, 10);
  ctx.fillStyle = `rgb(130, 79, 43)`;
  ctx.fill();
  //this is the array that holds the grass image
  const grassXs = [];
  for (let i = 0; i < 4; i++) {
    grassXs.push(i * 100);
  }

   document.onkeydown = event => {
     switch (event.keyCode) {
       case 37:
           if (page === 0){
            textArea.innerHTML = allText()[0].text;
           }
           else if (page >= 0) {
               page--
             textArea.innerHTML = allText()[page].text;
           }
         break;
       case 39:
           if (page === 2){
            textArea.innerHTML = allText()[2].text;
           }
           else if (page <= 2){
               page++
            textArea.innerHTML = allText()[page].text;}
         break;
     }
   };
//   const drawGrass = () => {
//     girl.drawImage();
//     // ctx.fillStyle = `rgb(227, 254, 255)`;
//     // ctx.fillRect(0, 0, width, height);
//     // this paints the ground
//     // ctx.beginPath();
//     // ctx.rect(0, 140, width, 10);
//     // ctx.fillStyle = `rgb(130, 79, 43)`;
//     // ctx.fill();
//     for (let i = 0; i < grassXs.length; i++) {
//       const img = new Image();
//       img.src = "../images/grass.png";
//       img.onload = () => {
//         ctx.drawImage(img, grassXs[i], 130, 100, 20);
//       };
//       grassXs[i] -= 1;
//       if (grassXs[i] <= -100) {
//         grassXs[i] = 300;
//       }
//     }
//     ctx.clearRect(0, 0, width, height);
   

//   };
  //   const loopGrass = () => setInterval(() => drawGrass(), 100)
  //   loopGrass()
});
