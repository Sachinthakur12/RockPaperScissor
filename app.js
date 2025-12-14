let userScore = 0;
let compScore = 0;
let cnt=0;
let f=true;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let game=document.querySelector(".game");
let start=document.querySelector(".start");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let ch=document.querySelectorAll(".choice_s");
let msggContainer = document.querySelector(".msgg-container");
let msgg = document.querySelector("#msgg");
let newGameBtn = document.querySelector("#new-btn");


const restartgame=()=>{
  userScore = 0;
  compScore = 0;
  cnt=0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
 msg.innerText="Play your move";
 msg.style.backgroundColor = "#081b31"
};

const resetGame = () => {
  cnt=0;
  restartgame();
  start.classList.remove("hide");
  msggContainer.classList.add("hide");
};



  const finalresult=(userScore,compScore) =>{
    msggContainer.classList.remove("hide");
    game.classList.add("hide");
    if(userScore>compScore){
      msgg.innerText=`You won the match by ${userScore}-${compScore}`;
    }
    else
    msgg.innerText=`You lost the match by ${userScore}-${compScore}`;
    newGameBtn.addEventListener("click", resetGame);
  };


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  if((userScore+compScore) ==cnt){
    finalresult(userScore,compScore);
  }
};

   


const playGame = (userChoice) => {
  
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }



};

 

const play=()=>{
 
    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
        
        
      });

    });
    
  };
  
  ch.forEach((choice_s) => {
 cnt=0;
 
    choice_s.addEventListener("click", () => {
      userScore = 0;
  compScore = 0;
      let  user = choice_s.getAttribute("id");
      if(user==="7")
      cnt=7;
    else if(user==="5")
    cnt=5;
  else
  cnt=-1;
  
      game.classList.remove("hide");
      start.classList.add("hide");
      while(f){
        play();
        f=false;
      }
    
    });
  });