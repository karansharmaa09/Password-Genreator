<<<<<<< HEAD
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <Header />
      <Content />
=======
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [blue, setBlue] = useState();
  const [green, setGreen] = useState();
  const [yellow, setYellow] = useState();
  const [red, setRed] = useState();

  const [darkblue, setDarkblue] = useState();
  const [white, setWhite] = useState();

  const BlueColor = () => {
    const blue = (document.body.style.backgroundColor = "blue");
    setBlue(blue);
    console.log("backGround color has been changed");
  };

  const GreenColor = () => {
    const green = (document.body.style.backgroundColor = "green");
    setGreen(green);
    console.log("backGround color has been changed");
  };
  const YellowColor = () => {
    const yellow = (document.body.style.backgroundColor = "yellow");
    setYellow(yellow);
    console.log("backGround color has been changed");
  };
  const RedColor = () => {
    const red = (document.body.style.backgroundColor = "red");
    setRed(red);
    console.log("backGround color has been changed");
  };
  const DarkBlueColor = () => {
    const darkblue = (document.body.style.backgroundColor = "blue");
    setDarkblue(darkblue);
    console.log("backGround color has been changed");
  };
  const WhiteColor = () => {
    const white = (document.body.style.backgroundColor = "white");
    setWhite(white);
    console.log("backGround color has been changed");
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center pt-10 mb-4">
        Color Changer App
      </h2>
      <div className="flex justify-center pt-40 items-center h-screen">
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={BlueColor}
              className="p-4 rounded-lg bg-blue-400 hover:bg-blue-500 font-bold text-white shadow-lg shadow-blue-200 transition ease-in-out duration-200 translate-10"
            >
              Blue Button
            </button>

            <button
              onClick={GreenColor}
              className="p-4 rounded-lg bg-green-400 hover:bg-green-500 font-bold text-white shadow-lg shadow-green-200 transition ease-in-out duration-200 translate-10"
            >
              Green Button
            </button>

            <button
              onClick={YellowColor}
              className="p-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-bold text-white shadow-lg shadow-yellow-200 transition ease-in-out duration-200 translate-10"
            >
              Yellow Button
            </button>

            <button
              onClick={RedColor}
              className="p-4 rounded-lg bg-red-400 hover:bg-red-500 font-bold text-white shadow-lg shadow-red-200 transition ease-in-out duration-200 translate-10"
            >
              Red Button
            </button>

            <button
              onClick={DarkBlueColor}
              className="p-4 rounded-lg bg-indigo-400 hover:bg-indigo-500 font-bold text-white shadow-lg shadow-indigo-200 transition ease-in-out duration-200 translate-10"
            >
              DarkBlue Button
            </button>

            <button
              onClick={WhiteColor}
              className="p-4 rounded-lg bg-stone-400 hover:bg-stone-500 font-bold text-white shadow-lg shadow-stone-200 transition ease-in-out duration-200 translate-10"
            >
              White Button
            </button>
          </div>
        </div>
      </div>
>>>>>>> 3e834a9c3ac72b0b4313f3e4b06b43910e3273b5
    </>
  );
};

export default App;
