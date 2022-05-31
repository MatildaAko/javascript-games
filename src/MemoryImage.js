import React, { useState } from "react";
import memoryImagesJson from "./memory.json";
const background = require("./images/memory/background.jpeg");

const MemoryImage = ({ image, index, setMatch, setScore, matchedCards, setMatchedCards }) => {
  const [flipped, setFlipped] = useState(false);
  const [cardChosen, setCardChosen] = useState([])
  const [cardChosenId, setCardChosenId] = useState([])

  
  const checkForMatch = () => {
    if (cardChosen.length === 2) {
      setTimeout(() => {
        if (cardChosen[0] === cardChosen[1]) {
          setMatch(true);
          setScore((score) => (score += 1));
          setMatchedCards(arr => [...arr, cardChosenId[0], cardChosenId[1]])
          console.log("match found"); //create
          console.log(matchedCards);
        } else {
          setMatch(false);
          setCardChosen([]);
          setCardChosenId([]);
        }
      }, 1000);
    }
  };
  return (
    <img
      className={flipped ? "card-image" : "card-background"}
      id={index}
      src={flipped ? require(`${image.image}`) : background}
      alt={flipped ? `${image.name}` : "background"}
      onClick={(e) => {
        console.log(memoryImagesJson);

        if (cardChosenId.includes(index) || matchedCards.includes(index)) {
          return;
        } else {
          setCardChosen(arr => [...arr, memoryImagesJson[e.target.id].name]);
          setCardChosenId(arr => [...arr, index]);
          checkForMatch();
          setFlipped(true);
        }
        console.log({ cardChosen, cardChosenId });
      }}
    />
  );
};

export default MemoryImage;
