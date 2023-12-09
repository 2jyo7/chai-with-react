import Image from "next/image";
import React from "react";
import Cards from "./Card";

const Tailwind = () => {
  return (
    <div
      className="flex flex-col justify-center
    p-8 m-6"
    >
      <h1
        className=" bg-green-500 text-black
        p-4 m-b-4"
      >
        Tailwind Test
      </h1>
      <div
        className="flex flex-wrap m-8 px-8 py-3
     "
      >
        <Cards username="Delba" btnText="click me" />
        <Cards username="Kinsley" btnText="visit me" />
      </div>
    </div>
  );
};

export default Tailwind;
