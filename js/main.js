let botPick = [" &#9994; Rock", " &#9995; Paper", " &#128406; scissors"];
let historyList = document.querySelector("#history");
let playerScore = document.querySelector("#playerScore");
let botScore = document.querySelector("#botScore");
let resultDisplay = document.querySelector("#display");
let botDisplay = document.querySelector("#botDisplay");
let newPlayerScore = 0;
let newBotScore = 0;
//create a historyItem and historyList here for them to be universal
let historyItem = document.createElement("h1");
   //append the historyItem from its parent historyList
   historyList.appendChild(historyItem);

  //  creating cover image for practice
 const coverImg = document.createElement("img");
       coverImg.src = "../images/cover1.png";
       coverImg.classList ="coverImg";
       gameCon.appendChild(coverImg);
    //coverImg function on mouseOver
 coverImg.addEventListener("mouseover", gameStart);
 function gameStart(){
   coverImg.style.display = "none";
 } 
 coverImg.addEventListener("mouseout", gameStop);
 function gameStop(){
   coverImg.style.display = "block";
 }  
   // creating images in header for practice

const rockImg = document.createElement("img");
      rockImg.src = "../images/rock.png";
      rockImg.id = "rock";
      rockImg.classList = "img",
      header.appendChild(rockImg);

const paperImg = document.createElement("img");
      paperImg.src = "../images/paper.png";
      paperImg.id = "paper";
      paperImg.classList = "img",
      header.appendChild(paperImg);

const scrImg = document.createElement("img");
      scrImg.src = "../images/scissor.png";
      scrImg.id = "rock";
      scrImg.classList = "img"
      header.appendChild(scrImg);
    //create reset button
 const rstBtn = document.createElement("btn");
       rstBtn.style.color = "white";
       rstBtn.innerHTML = "reset";
       rstBtn.classList = "reset";
       header.insertBefore(rstBtn,header.querySelectorAll("img")[3]);
       //addEventListener to rstBtn
       rstBtn.addEventListener("click",reset);
       // add function to rstBtn
       function reset(){
         playerScore.innerHTML  = 0;
         botScore.innerHTML = 0;
         historyItem.innerHTML = "";
         botDisplay.innerHTML = "";
         resultDisplay.innerHTML = "";
       }
//rockBtn function
let rockBtn = document.querySelector("#rockBtn");
    rockBtn.addEventListener("click", rockFunc);
   
function rockFunc(){
  let i = Math.floor(Math.random() * 3);
  
  botDisplay.innerHTML = "&#128520;BOT picks " + botPick[i];

  if (i == 0) {
    resultDisplay.innerHTML = "&#129307;" + "DRAW" +"&#129308;";
    botDisplay.innerHTML = "&#128562;BOT picks " + botPick[i];
    historyItem.innerHTML = "Rock vs. Rock";
    historyItem.style.color= "red";
    display.style.color = "white";
  
  } else if (i == 1) {
    resultDisplay.innerHTML  = "&#128078;" + "You Lose!" + "&#129322;";
    botDisplay.innerHTML = "&#129322;BOT picks " + botPick[i];
    // match history
    historyItem.textContent = "Rock vs. Paper ";
    historyItem.style.color= "red";
    display.style.color = "red";
    //scoring
    newBotScore++;
    botScore.textContent = newBotScore;
  
  }else {
    resultDisplay.innerHTML = "&#128077;" + "you win!" + "&#128548;";
    botDisplay.innerHTML = "&#128548;BOT picks " + botPick[i];
    // match history
    historyItem.textContent = "Rock vs. Scissors";
    historyItem.style.color = "red";
    display.style.color = "yellow";
    // scoring
    newPlayerScore++;
    playerScore.textContent = newPlayerScore;
  }

}

//paper btnFunction

let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", paperFunc);

function paperFunc(){
  let i = Math.floor(Math.random() * 3);
  
  botDisplay.innerHTML = "&#128520;BOT picks " +  botPick[i];

  if (i == 0) {
    display.innerHTML = "&#128077;" + "you win!" + "&#128548;";
    botDisplay.innerHTML = "&#128548;BOT picks " + botPick[i];
    historyItem.textContent = "Paper vs Rock";
    historyItem.style.color = "red";
    display.style.color = "yellow";
    // increment newPlayerScore
    newPlayerScore++;
    playerScore.textContent = newPlayerScore;
  }else if (i == 1) {
    display.innerHTML = "&#129307;" + "DRAW" +"&#129308;"; 
    botDisplay.innerHTML = "&#128562;BOT picks " + botPick[i];
    historyItem.textContent = "Paper vs Paper";
    historyItem.style.color = "red"; 
    display.style.color = "white";
  }else {
    display.innerHTML = "&#128078;" + "You Lose!" + "&#129322;";
    botDisplay.innerHTML = "&#129322;BOT picks " + botPick[i];
    historyItem.textContent = "Paper vs Scissors";
    historyItem.style.color= "red";
    display.style.color = "red";
    //increment newBotScore
     newBotScore++;
     botScore.textContent = newBotScore;
  }
}

// scissorBtn function

let scissorBtn = document.querySelector("#scissorsBtn");
scissorBtn.addEventListener("click", scrFunc);

function scrFunc () {
  let i = Math.floor(Math.random() * 3);

  botDisplay.innerHTML = "&#128520;BOT picks " + botPick[i];

  if (i == 2){
    display.innerHTML = "&#129307;" + "DRAW" +"&#129308;";
    botDisplay.innerHTML = "&#128562;BOT picks " + botPick[i];
    historyItem.textContent = "Scissors vs Scissors";
    historyItem.style.color = "red";
    display.style.color = "white";

  }else if (i == 0){
    display.innerHTML = "&#128078;" + "You Lose!" + "&#129322;";
    botDisplay.innerHTML = "&#129322;BOT picks " + botPick[i];
    historyItem.textContent = "Scissor vs Rock";
    historyItem.style.color = "red";
    display.style.color = "red";
    //increment newBotScore
    newBotScore++;
    botScore.textContent = newBotScore;
  }else {
    display.innerHTML = "&#128077;" + "you win!" + "&#128548;";
    botDisplay.innerHTML = "&#128548;BOT picks " + botPick[i];
    historyItem.textContent = "Paper vs Scissors";
    historyItem.style.color= "red";
    display.style.color = "yellow";
    //increment newBotScore
     newPlayerScore++;
     playerScore.textContent = newPlayerScore;
  }
  
}


