"use client";

import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState<any>("olive");
  return (
    <div
      style={{
        background: color,
      }}
      className="flex flex-col 
       items-center font-bold
       px-6 py-2 text-4xl w-full max-w-md"
    >
      <button
        className="border border-gray-700 m-3 p-2 gap-5"
        style={{
          background: color,
        }}
        onClick={() => setColor("blue")}
      >
        Blue
      </button>
      <button
        className="border  border-gray-700 m-3 p-2 gap-2"
        style={{
          background: color,
        }}
        onClick={() => setColor("red")}
      >
        Red
      </button>
      <button
        className="border  border-gray-700 m-3 p-2 gap-2"
        style={{
          background: color,
        }}
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button
        className="border  border-gray-700 rounded-lg 
       m-3 p-2 gap-2"
        style={{
          background: color,
        }}
        onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="border m-3 p-2 gap-2"
        style={{
          background: color,
        }}
        onClick={() => setColor("Pink")}
      >
        Pink
      </button>
      <button
        className="border  border-gray-700 m-3 p-2 gap-2"
        style={{
          background: color,
        }}
        onClick={() => setColor("Orange")}
      >
        Orange
      </button>
    </div>
  );
};

export default BgChanger;
