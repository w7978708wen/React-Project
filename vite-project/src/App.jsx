import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./Component1.jsx";
import Component2 from "./Component2.jsx";
import Component3 from "./Component3.jsx";
import Component4 from "./Component4.jsx";
import Component5 from "./Component5.jsx";

const DISPLAYS = [
  {
    q1: "Name:",
    a1: "W i n g c h e e",
    q2: "Bucket list item:",
    a2: "Go to Summit One Vanderbilt",
    imageUrl:
      "https://github.com/w87895wen/React-Project/blob/main/vite-project/images/component2pic1.png?raw=true",
    caption: "Photo from Unsplash, designed in Canva",
  },
  {
    q1: "Fun fact:",
    a1: "♡ pastel colours",
    q2: "Ideal holiday spot:",
    a2: "Hong Kong",
    imageUrl:
      "https://github.com/w87895wen/React-Project/blob/main/vite-project/images/component2_pic2.png?raw=true",
    caption: "Graphic from Canva, designed in Canva",
  },
  {
    q1: "Favourite season:",
    a1: "Summer",
    q2: "Favourite holiday:",
    a2: "Christmas",
    imageUrl:
      "https://github.com/w87895wen/React-Project/blob/main/vite-project/images/about_me_pic3_pic.png?raw=true",
    caption: "Photo from Canva, designed in Canva",
  },
];

function App() {
  const [imageIndx, setImageIndx] = useState(0);
  return (
    <div>
      <img
        className="object-cover h-[175px] w-[1400px]"
        src="https://github.com/w87895wen/React-Project/blob/main/vite-project/images/header(1100%20x%20300%20px).png?raw=true"
      />
      <Component1>Header text</Component1>
      <div className="bg-[#012746] h-[10px]"></div>
      <div className="flex flex-row items-center justify-center text-green-200 bg-[#7a36d9] text-xl p-3">
        Nice to meet you!
      </div>
      <div className="bg-[#012746]">
        <div className="flex flex-row justify-between ml-2 p-4 text-5xl">
          <button
            className="text-[#7a36d9] hover:text-yellow-200 mr-2"
            onClick={() => {
              setImageIndx(imageIndx - 1);
            }}
          >
            <i className="fa-regular fa-circle-left"></i>
          </button>
          <button
            className="text-[#7a36d9] hover:text-yellow-200 mr-2"
            onClick={() => {
              setImageIndx(imageIndx + 1);
            }}
          >
            <i className="fa-regular fa-circle-right"></i>
          </button>
        </div>
      </div>
      <Component2 display={DISPLAYS[imageIndx]} />
      <div className="bg-[#7a36d9] text-xl text-green-200 p-3">
        Next, I hope this section can better explain why I , with a
        non-traditional major in Business Analytics, am serious about taking a
        chance on this application.
      </div>
      <Component3>text</Component3>
      <div className="bg-[#012746] text-purple-600  text-2xl text-right">.</div>
      <img
        className="object-cover h-[320px] w-[1400px]"
        src="https://github.com/w7978708wen/React-Project/blob/main/vite-project/images/paper(1100%20x%20400%20px).png?raw=true"
      />
      <Component4>text</Component4>
      <div className="bg-[#012746] text-purple-600  text-2xl text-right">.</div>
      <Component5>text</Component5>
    </div>
  );
}

export default App;
