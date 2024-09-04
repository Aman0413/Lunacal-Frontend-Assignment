import "./App.css";

import { useState } from "react";
import Tabs from "./components/Tabs";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="bg-primary h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-5 p-5">
      <div className="left w-[90%] md:w-[48%] h-[80%] bg-[#565758] rounded-xl text-white p-3 border-[0.3px] border-[#96BEE7]"></div>

      <div className="  w-[90%] md:w-[43%]  gap-4 p-2">
        <Tabs />

        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
