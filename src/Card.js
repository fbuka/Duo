import React from "react";
import "./styles.css";

export default function Card(option) {
  const [isActive, setIsActive] = React.useState(false);
  let player = new Audio(`/${option.option.word}.mp3`);

  function handleClick() {
    setIsActive(isActive => !isActive);
    if (!isActive) {
      player.play();
    }
  }

  return (
    <div
      onClick={handleClick}
      className={isActive ? "answer highlight" : "answer"}
    >
      <img src={`/${option.option.image}.png`} alt="animal" />
      <div className="word">{option.option.word}</div>
    </div>
  );
}
