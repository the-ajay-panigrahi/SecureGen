import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setlength] = useState(7);
  const [upperCaseCheck, setUpperCaseCheck] = useState(false);
  const [lowerCaseCheck, setLowerCaseCheck] = useState(true);
  const [numberCheck, setNumberCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);
  const [strength, setStrength] = useState("N/A");
  const [copyBtn, setCopyBtn] = useState("COPY");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let passString = "";
    if (upperCaseCheck) passString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowerCaseCheck) passString += "abcdefghijklmnopqrstuvwxyz";
    if (numberCheck) passString += "0123456789";
    if (charCheck) passString += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * passString.length + 1);
      pass += passString.charAt(index);
    }

    passwordStrength(length);
    setPassword(pass);
  }, [
    upperCaseCheck,
    lowerCaseCheck,
    numberCheck,
    charCheck,
    length,
    setPassword,
  ]);

  useEffect(passwordGenerator, [
    upperCaseCheck,
    lowerCaseCheck,
    numberCheck,
    charCheck,
    length,
  ]);

  function copyToClipBoard() {
    passwordRef.current?.select();
    setCopyBtn("COPIED");
    setTimeout(() => {
      setCopyBtn("COPY");
    }, 1000);
    window.navigator.clipboard.writeText(password);
  }

  function passwordStrength(length) {
    if (length <= 4) setStrength("Very weak");
    else if (length <= 6) setStrength("Weak");
    else if (length <= 8) setStrength("Decent");
    else if (length <= 12) setStrength("Strong");
    else if (length <= 20) setStrength("Excellent");
  }

  return (
    <>
      <div className="bg-slate-800 min-h-screen flex justify-center items-center w-screen overflow-hidden">
        <div className="flex flex-col flex-wrap gap-5 px-5 lg:w-2/4">
          <h1 className="text-4xl mb-5 text-white font-extrabold text-center  sm:mb-10 sm:text-5xl custom-font">
            SecureGen
          </h1>
          <div className="rounded-xl overflow-hidden w-full text-center grid sm:grid-cols-6 md:grid-cols-12 select-none">
            <input
              type="text"
              readOnly
              value={password}
              ref={passwordRef}
              className="py-5 font-bold text-xl text-slate-800 px-5 text-center sm:text-left sm:col-span-4 md:col-span-9 focus:outline-none "
            />
            <button
              className="bg-green-500 text-white py-5 px-5 font-bold text-xl transition-all 0.5s hover:bg-blue-500 sm:col-span-2 md:col-span-3"
              onClick={copyToClipBoard}
            >
              {copyBtn}
            </button>
          </div>
          <div className="rounded-xl bg-white p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-8">
              <div className="text-xl font-extrabold text-slate-700">
                Password Length
              </div>
              <div className=" text-xl font-extrabold text-red-500">
                {length}
              </div>
            </div>
            <div>
              <input
                type="range"
                min={1}
                max={20}
                value={length}
                onChange={(event) => {
                  setlength(event.target.value);
                }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-800"
              />
            </div>
            <div className="flex items-center">
              <input
                id="upperCheckBox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setUpperCaseCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="upperCheckBox"
                className="ms-2 text-lg font-medium text-black"
              >
                Includes Uppercase Letters
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="lowerCheckBox"
                type="checkbox"
                checked={lowerCaseCheck}
                value=""
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setLowerCaseCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="lowerCheckBox"
                className="ms-2 text-lg font-medium text-black"
              >
                Includes Lowercase Letters
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="numberCheckBox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setNumberCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberCheckBox"
                className="ms-2 text-lg font-medium text-black"
              >
                Includes Numbers
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="charCheckBox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setCharCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="charCheckBox"
                className="ms-2 text-lg font-medium text-black"
              >
                Includes Symbols
              </label>
            </div>
            <div className="flex justify-between items-center gap-8">
              <div className="text-xl font-extrabold text-slate-700">
                Password Strength
              </div>
              <div className=" text-xl font-extrabold text-white text-center bg-black py-1 px-3 rounded-lg">
                {strength}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
