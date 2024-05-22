import { useRef, useCallback, useEffect } from "react";
import { useState } from "react";

const content = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  // useref
  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    //  check if the user want number
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$*{}()~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator]);

  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
          <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Generate Your Password !
          </p>

          <form action="/search">
            <label
              className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
              htmlFor="search-bar"
            >
              <input
                id="search-bar"
                name="q"
                value={password}
                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                required
                ref={passwordRef}
              />
              <button
                onClick={CopyPassword}
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
              >
                <div className="flex items-center transition-all opacity-1">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Copy
                  </span>
                </div>
              </button>
            </label>
          </form>
        </div>

        {/* below part */}
        <div className="min-w-sm  max-w-2xl flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center gap-x-1 pl-16">
            <input
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
              type="range"
              max={100}
              min={8}
            />
            <label className="font-medium">Length : {length}</label>
          </div>
          {/* num box */}
          <div className="min-w-sm max-w-2xl pl-5 flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center gap-x-1">
              <input
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
                defaultChecked={numAllowed}
                className="cursor-pointer"
                type="checkbox"
                id="numberInput"
              />
              <label className="font-medium">Numbers</label>
            </div>
          </div>
          {/* char box */}
          <div className="min-w-sm max-w-2xl pl-5 flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center gap-x-1">
              <input
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                defaultChecked={charAllowed}
                className="cursor-pointer"
                type="checkbox"
                id="characterInput"
              />
              <label className="font-medium">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default content;
