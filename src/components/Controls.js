import React, { useState } from "react";

const Controls = () => {
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div>
      <button>New Colors</button>
      <button
        onClick={() => {
          setDifficulty("easy");
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          setDifficulty("hard");
        }}
      >
        Hard
      </button>
      <span>Current difficulty: {difficulty}</span>
    </div>
  );
};

export default Controls;
