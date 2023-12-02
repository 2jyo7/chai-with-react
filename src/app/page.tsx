"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center m-8 p-16">
      <h1 className="text-2xl font-bold">Chai aur Code !</h1>
      <h2 className="text-2xl font-bold">Counter collection: {counter}</h2>
      <button
        className="border border-gray-500
      bg-slate-500 m-3 p-2"
        onClick={addValue}
        disabled={counter >= 20}
      >
        Add Value {counter}
      </button>
      <br />
      <button
        className="border border-gray-500
         bg-slate-500 m-3 p-2"
        onClick={removeValue}
        disabled={0 >= counter}
      >
        Remove Value {counter}
      </button>
      <p className="text-2xl font-bold">footer: {counter}</p>
    </div>
  );
}
