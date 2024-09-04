import React, { useState } from "react";
import { BsGrid1X2Fill, BsQuestionCircle } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../public/jimmy-chang-ACt8ycSzpdE-unsplash (1).jpg";

function ImageSlider() {
  const [images, setImages] = useState([
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img1,
    },
  ]);
  return (
    <div className="w-full  right-2 flex items-center flex-col ">
      <div
        style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)" }}
        className="  w-full bg-[#363C43]  rounded-xl my-3 p-2 flex gap-2"
      >
        <div className="flex flex-col items-center space-y-7">
          <BsQuestionCircle className="text-[rgba(74,78,84,1)]" />
          <BsGrid1X2Fill className="text-[#4A4E54]" />
        </div>
        <div className="w-[90%] ">
          <div className="  flex-1 flex justify-between h-10">
            <button className="bg-black text-white py-2 px-6 rounded-xl">
              Gallery
            </button>

            <div className="flex space-x-4">
              <button
                style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)" }}
                className="bg-[#40454c] text-white py-2 px-6 text-sm rounded-xl uppercase"
              >
                + Add Image
              </button>

              <div className="flex space-x-2">
                <span
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(48,52,57,1) 0%, rgba(22,23,24,1) 100%)",
                  }}
                  className=" p-3  rounded-full"
                >
                  <FaArrowLeft className="text-[#6F787C]" />
                </span>
                <span
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(48,52,57,1) 0%, rgba(22,23,24,1) 100%)",
                  }}
                  className=" p-3  rounded-full "
                >
                  {" "}
                  <FaArrowRight className="text-[#6F787C]" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 mb-2 flex items-center  space-x-6">
            {images.map((item) => {
              return (
                <div key={item.id} className="w-48 ">
                  <img
                    src={img1}
                    alt="img"
                    className="z-10 block w-full rounded-3xl grayscale hover:grayscale-0 transition-all ease-in-out duration-300 hover:scale-110 hover:-rotate-2  hover:shadow-[4px_4px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(30,30,30,1) 14%, rgba(54,60,67,1) 76%)",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
        }}
        className="w-[90%] h-1 rounded-xl"
      ></div>
    </div>
  );
}

export default ImageSlider;
