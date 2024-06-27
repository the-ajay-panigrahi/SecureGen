import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setlength] = useState(7);
  const [upperCaseCheck, setUpperCaseCheck] = useState(false);
  const [lowerCaseCheck, setLowerCaseCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [charCheck, setCharCheck] = useState(false);

  const passwordGenerator = useCallback(() => {}, []);

  useEffect(passwordGenerator(), []);

  return (
    <>
      <div className="bg-slate-800 min-h-screen flex justify-center items-center w-screen">
        <div className="flex flex-col gap-5 w-2/4">
          <h1 className="text-5xl mb-10 text-yellow-300 font-extrabold text-center">
            SecureGen
          </h1>
          <div className="rounded-xl overflow-hidden w-full grid sm:grid-cols-12">
            <input
              type="text"
              readOnly
              value={password}
              className=" py-5 px-2 font-bold text-xl sm:col-span-9 focus:outline-none cursor-not-allowed"
            />
            <button className="bg-blue-500 text-white py-5 px-5 font-bold text-xl sm:col-span-3">
              Copy
            </button>
          </div>
          <div className="rounded-xl bg-white p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-8">
              <div className="text-xl font-extrabold">Password Length</div>
              <div class=" text-xl font-extrabold text-red-500">{length}</div>
            </div>
            <div>
              <input
                type="range"
                min={5}
                max={20}
                value={length}
                onChange={(event) => {
                  setlength(event.target.value);
                }}
                class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-800"
              />
            </div>
            <div class="flex items-center">
              <input
                id="upperCheckBox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setUpperCaseCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="upperCheckBox"
                class="ms-2 text-lg font-medium text-black"
              >
                Includes Uppercase Letters
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="lowerCheckBox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setLowerCaseCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="lowerCheckBox"
                class="ms-2 text-lg font-medium text-black"
              >
                Includes Lowercase Letters
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="numberCheckBox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setNumberCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberCheckBox"
                class="ms-2 text-lg font-medium text-black"
              >
                Includes Numbers
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="charCheckBox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => {
                  setCharCheck((prev) => !prev);
                }}
              />
              <label
                htmlFor="charCheckBox"
                class="ms-2 text-lg font-medium text-black"
              >
                Includes Symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
