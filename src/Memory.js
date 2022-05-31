import React, { useState } from "react";
import memoryImagesJson from "./memory.json";
import MemoryImage from "./MemoryImage"


const Memory = () => {
  // const [numOfFlippedCards, setNumOfFlippedCards] = useState(0);
  const [match, setMatch] = useState(false)
  const [score, setScore] = useState(0);
  const [matchedCards, setMatchedCards] = useState([])

  
  return (
    <div>
      <h3>
        Score: <span>{score}</span>
      </h3>
      {match && <p>You found a match!</p>}
      <div className="grid">
        {memoryImagesJson
          .sort(() => 0.5 - Math.random())
          .map((image, index) => (
            <MemoryImage
              key={index}
              index={index}
              image={image}
              matchedCards={matchedCards}
              setMatchedCards={setMatchedCards}
              setMatch={setMatch}
              setScore={setScore}
            />
          ))}
      </div>
    </div>
  );
};

export default Memory;
