import React, { useEffect, useState } from "react";

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  // const [score, setScore] = useState({ player: 0, computer: 0 });
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [draw, setDraw] = useState(false)

  const choices = ["Rock", "Paper", "Scissors"];
  const capitalize = (word) => {
    return `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`;
  };
  const random = Math.floor(Math.random() * 3)
  const setChoices = (e) => {
    const userSelectedChoice = capitalize(e.target.id)
    const randomChoice = choices[random]

    setUserChoice(userSelectedChoice); 
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    const {userScore, computerScore} = determineRoundScores(computerChoice, userChoice)

    setUserScore(userTotal => userScore + userTotal)
    setComputerScore(computerTotal => computerScore + computerTotal)
    setDraw(userScore === computerScore);

  },[userChoice, computerChoice])


  const determineRoundScores = (computerValue, userValue) => {
    let computerScore = 0 
    let userScore = 0

    if (userValue === "Rock" && computerValue === "Paper") {
      computerScore += 1
    }

    if (userValue === "Rock" && computerValue === "Scissors") {
      userScore += 1
    }

    if (userValue === "Paper" && computerValue === "Rock") {
      userScore += 1
    }

    if (userValue === "Paper" && computerValue === "Scissors") {
      computerScore += 1
    }

    if (userValue === "Scissors" && computerValue === "Paper") {
      userScore += 1
    }

    if (userValue === "Scissors" && computerValue === "Rock") {
      computerScore += 1
    }

    return { userScore, computerScore }
  }

  // => 

  const reset = () => {
    setUserScore(0);
    setComputerScore(0)
  }
  if (userScore === 5 || computerScore === 5) {
    return (
      <div className="score-card">
        <h1>SCORE</h1>
        <h2>
          You: {userScore} Computer: {computerScore}
        </h2>
        <p>{userScore === 5 ? "Congratulations, You Won!!!" : "Sorry, You lost, try again"}</p>
        <button onClick={reset}>Retry</button>
      </div>
    );
  }
  return (
    <div>
      <h2>
        Computer Choice: <span>{computerChoice}</span>
      </h2>
      <h2>
        Your Choice: <span>{userChoice}</span>
      </h2>
      <h2>
        Result:
        <span id="result">
          You: {userScore} Computer: {computerScore}
        </span>
      </h2>
      {draw && <p>It's a draw</p>}
      <button id="rock" onClick={setChoices}>
        Rock
      </button>
      <button id="paper" onClick={setChoices}>
        Paper
      </button>
      <button id="scissors" onClick={setChoices}>
        Scissors
      </button>
    </div>
  );
};

export default RockPaperScissors;
