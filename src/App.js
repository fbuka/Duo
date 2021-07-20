import React from "react";
import "./styles.css";
import Card from "./Card";

let options = [
  {
    index: 0,
    word: "monkey",
    image: "1"
  },
  {
    index: 0,
    word: "lion",
    image: "11"
  },
  {
    index: 0,
    word: "duck",
    image: "13"
  },
  {
    index: 0,
    word: "dog",
    image: "12"
  }
];

export default function App() {
  return (
    <div className="app-container">
      <div className="question">Question goes here</div>
      <div className="answers-container">
        {options.map(option => {
          return <Card option={option} />;
        })}
      </div>
      <div className="check-button">Check</div>
    </div>
  );
}
