import Image00 from "../images/Image_Main.png";
import Image01 from "../images/Image (1).png";
import Image02 from "../images/Image (2).png";
import Image03 from "../images/Image (3).png";
import Image04 from "../images/Image (4).png";
import Image05 from "../images/Image (5).png";
import Image06 from "../images/Image (6).png";
import Image07 from "../images/Image (7).png";
import Image08 from "../images/Image (8).png";
import Image09 from "../images/Image (9).png";
import Image10 from "../images/Image (10).png";
import Image11 from "../images/Image (11).png";
import Image12 from "../images/Image (12).png";
import Image13 from "../images/Image (13).png";
import Image14 from "../images/Image (14).png";
import Image15 from "../images/Image (15).png";
import Image16 from "../images/Image (16).png";
import Image17 from "../images/Image (17).png";
import Image18 from "../images/Image (18).png";

import React from "react";



const Images = [
  Image00,
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
  Image09,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
];

let play = true; // MUSS "let" sein, kein "const"

// Fisher-Yates Shuffle
function shuffleArray(array : any) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function CreateArray() {
  const randomNumber = Math.floor(Math.random() * Images.length);
  const randomImage = Images[randomNumber];

  const randomArray = [
    randomImage,
    Image00,
    Image00,
    Image00,
    Image00,
    Image00,
    Image00,
    Image00,
    Image00,
  ];

  return shuffleArray(randomArray);
}

export default function CreateZebra() {
  
  let getRandomArray = CreateArray();
  const [isPlaying, setIsPlaying] = React.useState(true);

  // YOU WIN
  let YouWin = () => (
    <>
      <div className="win">
        <h2>Du hast gewonnen! 🎉</h2>
        <button onClick={handleNewGame} className="nochmalSpielen-btn">
          Noch mal spielen
        </button>
      </div>
    </>
  );

  // PLAYFIELD (Syntax gefixt)
  const Playfield = () => {
    return getRandomArray.map((item, index) => (
      <div className="cards">
        <button className="cards-btn" key={index}>
          <img
            onClick={() => handleClick(item)}
            src={item}
            alt={`Zebra ${index}`}
            width="200"
          />
        </button>
      </div>
    ));
  };

  // NEW GAME HANDLER
  const handleNewGame = () => {
    getRandomArray = CreateArray();
    setIsPlaying((prev) => !prev);
  };

  // CLICK-HANDLER
  const handleClick = (item : any) => {
    let wrongOrWrite = item.substring(item.length - 8, item.length - 4);
    play = wrongOrWrite === "Main";
    setIsPlaying(play);
  };

  return <>{isPlaying ? <Playfield /> : <YouWin />}</>;
}
