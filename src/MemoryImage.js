import React, { useState } from "react";
import memoryImagesJson from "./memory.json";
const background = require("./images/memory/background.jpeg");

const MemoryImage = ({ image, index, cardChosen, cardChosenId, setMatch, setScore, matchedCards }) => {
  const [flipped, setFlipped] = useState(false);
  
  const checkForMatch = () => {
    if (cardChosen.length === 2) {
      setTimeout(() => {
        if (cardChosen[0] === cardChosen[1]) {
          setMatch(true);
          setScore((score) => (score += 1));
          matchedCards.push(cardChosenId[0], cardChosenId[1]);
          console.log("match found"); //create
          console.log(matchedCards);
        } else {
          setMatch(false);
          cardChosen = [];
          cardChosenId = [];
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
          cardChosen.push(memoryImagesJson[e.target.id].name);
          cardChosenId.push(index);
          checkForMatch();
          setFlipped(true);
        }
        console.log({ cardChosen, cardChosenId });
      }}
    />
  );
};

export default MemoryImage;
