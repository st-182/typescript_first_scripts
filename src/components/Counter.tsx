import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  //Custom functions
  const [number, setNumber] = useState<number>(0);
  const [message, setMessage] = useState("");
  const increment = (): void => setNumber(number + 1);
  const decrement = (): void => setNumber(number - 1);
  return (
    <div>
      <h3>Counter</h3>
      <Button action={increment} text={`+1, ${number}`} />
      <Button action={decrement} text={`-1, ${number}`} />
    </div>
  );
};

export default Counter;
