import React, { useEffect, useState } from "react";
import { IMath } from "../interfaces/users";

const MathButton: React.FC<IMath> = ({ text, action, numbers }: IMath) => {
  const [textToShow, setTextToShow] = useState("Loading");
  useEffect(() => {
    setTextToShow(`Show ${numbers[0]} ${text} ${numbers[1]} answer`);
  }, [numbers, text]);
  return (
    <button onClick={() => setTextToShow(action(numbers[0], numbers[1], text))}>
      {textToShow}
    </button>
  );
};

export default MathButton;
