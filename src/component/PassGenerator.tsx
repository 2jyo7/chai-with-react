"use client";
import { useState, useRef, useCallback, useEffect } from "react";

const PassGenerator = () => {
  const [length, setLength] = useState<any>(8);
  const [numberAllowed, setNumberAllowed] = useState<any>(false);
  const [charAllowed, setCharAllowed] = useState<any>(false);
  const [password, setPassword] = useState<any>("");

  const passwordRef = useRef<any>(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstiuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+=[]{}~`";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, setPassword, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div
      className="w-full max-w-md bg-gray-800
     mx-auto shadow-md rounded-lg px-4 py-3 my-auto
     text-orange-500"
    >
      <h1
        className="text-white text-center my-3
           font-bold"
      >
        Password Generator
      </h1>
      <div
        className="flex shadow rounded-lg
        overflow-hiddenmb-4"
      >
        <input
          type="text"
          ref={passwordRef}
          value={password}
          readOnly
          placeholder="password"
          className="outline-none w-full py-1 px-3"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0 font-bold 
         hover:bg-blue-600"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className=" cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          className=" cursor-pointer"
          onChange={() => {
            setNumberAllowed((prev: any) => !prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          className=" cursor-pointer"
          onChange={() => {
            setCharAllowed((prev: any) => !prev);
          }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  );
};

export default PassGenerator;
