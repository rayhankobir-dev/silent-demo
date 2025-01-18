import { useState } from "react";

import img from "../../../../assets/images/img.png";
import ph1 from "../../../../assets/images/image 3.png";
import ph2 from "../../../../assets/images/ph2.png";
import ph3 from "../../../../assets/images/ph3.png";
import ph4 from "../../../../assets/images/ph4.png";
import ph5 from "../../../../assets/images/ph5.png";
import { RxCross2 } from "react-icons/rx";

// import ph2 from "../../../../assets/images/ph2.png";
import ph21 from "../../../../assets/images/DashControl/ph2.1.png";
import ph22 from "../../../../assets/images/DashControl/ph2.2.png";
import ph23 from "../../../../assets/images/DashControl/ph2.3.png";
import ph24 from "../../../../assets/images/DashControl/ph2.4.png";
import dogbook from "../../../../assets/images/dogbook.png";
import racoon from "../../../../assets/images/racoon.png";

import r31 from "../../../../assets/images/r3.1.png";
import r32 from "../../../../assets/images/r3.2.png";
import r33 from "../../../../assets/images/r3.3.png";
import r34 from "../../../../assets/images/r3.4.png";
import r35 from "../../../../assets/images/r3.5.png";
import r36 from "../../../../assets/images/r3.6.png";

import r41 from "../../../../assets/images/r41.png";
import r42 from "../../../../assets/images/r42.png";
import r43 from "../../../../assets/images/r43.png";
import r44 from "../../../../assets/images/r44.png";
import r45 from "../../../../assets/images/r45.png";
import r46 from "../../../../assets/images/r46.png";

import r51 from "../../../../assets/images/r51.png";
import r52 from "../../../../assets/images/r52.png";
import r53 from "../../../../assets/images/r53.png";
import r54 from "../../../../assets/images/r54.png";
import r55 from "../../../../assets/images/r55.png";
import r56 from "../../../../assets/images/r56.png";

import r61 from "../../../../assets/images/r61.png";
import r62 from "../../../../assets/images/r62.png";
import r63 from "../../../../assets/images/r63.png";
import r64 from "../../../../assets/images/r64.png";
import r65 from "../../../../assets/images/r65.png";
import r66 from "../../../../assets/images/r66.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Gallery() {
  const [backdrop, setBackdrop] = useState(false);
  const [idx, setIdx] = useState("");
  const imgs = [
    {
      img: img,
      name: "nature-3076877.jpg",
      desc: "20.052024-422.64 KB",
      id: 1,
    },
    {
      img: ph2,
      name: "nature-3076879.jpg",
      desc: "20.052024-422.64 KB",
      id: 3,
    },
    {
      img: ph3,
      name: "nature-3076880.jpg",
      desc: "20.052024-422.64 KB",
      id: 4,
    },
    {
      img: ph4,
      name: "nature-3076881.jpg",
      desc: "20.052024-422.64 KB",
      id: 5,
    },
    {
      img: ph1,
      name: "nature-3076878.jpg",
      desc: "20.052024-422.64 KB",
      id: 2,
    },
    {
      img: ph5,
      name: "nature-3076882.jpg",
      desc: "20.052024-422.64 KB",
      id: 6,
    },

    {
      img: racoon,
      name: "nature-3076883.jpg",
      desc: "20.052024-422.64 KB",
      id: 7,
    },
    {
      img: dogbook,
      name: "nature-3076887.jpg",
      desc: "20.052024-422.64 KB",
      id: 11,
    },
    {
      img: ph21,
      name: "nature-3076888.jpg",
      desc: "20.052024-422.64 KB",
      id: 12,
    },
    {
      img: ph22,
      name: "nature-3076884.jpg",
      desc: "20.052024-422.64 KB",
      id: 8,
    },
    {
      img: ph23,
      name: "nature-3076885.jpg",
      desc: "20.052024-422.64 KB",
      id: 9,
    },
    {
      img: ph24,
      name: "nature-3076886.jpg",
      desc: "20.052024-422.64 KB",
      id: 10,
    },

    {
      img: r31,
      name: "space-3076889.jpg",
      desc: "20.052024-422.64 KB",
      id: 13,
    },
    {
      img: r32,
      name: "space-3076890.jpg",
      desc: "20.052024-422.64 KB",
      id: 14,
    },
    {
      img: r33,
      name: "space-3076891.jpg",
      desc: "20.052024-422.64 KB",
      id: 15,
    },
    {
      img: r34,
      name: "space-3076892.jpg",
      desc: "20.052024-422.64 KB",
      id: 15,
    },
    {
      img: r35,
      name: "space-3076893.jpg",
      desc: "20.052024-422.64 KB",
      id: 16,
    },
    {
      img: r36,
      name: "space-3076894.jpg",
      desc: "20.052024-422.64 KB",
      id: 17,
    },

    {
      img: r41,
      name: "technology-3076895.jpg",
      desc: "20.052024-422.64 KB",
      id: 18,
    },
    {
      img: r42,
      name: "technology-3076883.jpg",
      desc: "20.052024-422.64 KB",
      id: 7,
    },
    {
      img: r43,
      name: "technology-3076887.jpg",
      desc: "20.052024-422.64 KB",
      id: 11,
    },
    {
      img: r44,
      name: "technology-3076888.jpg",
      desc: "20.052024-422.64 KB",
      id: 12,
    },
    {
      img: r45,
      name: "technology-3076884.jpg",
      desc: "20.052024-422.64 KB",
      id: 8,
    },
    {
      img: r46,
      name: "technology-3076885.jpg",
      desc: "20.052024-422.64 KB",
      id: 9,
    },

    {
      img: r51,
      name: "business-3076895.jpg",
      desc: "20.052024-422.64 KB",
      id: 18,
    },
    {
      img: r52,
      name: "business-3076883.jpg",
      desc: "20.052024-422.64 KB",
      id: 7,
    },
    {
      img: r53,
      name: "business-3076887.jpg",
      desc: "20.052024-422.64 KB",
      id: 11,
    },
    {
      img: r54,
      name: "business-3076888.jpg",
      desc: "20.052024-422.64 KB",
      id: 12,
    },
    {
      img: r55,
      name: "business-3076884.jpg",
      desc: "20.052024-422.64 KB",
      id: 8,
    },
    {
      img: r56,
      name: "business-3076885.jpg",
      desc: "20.052024-422.64 KB",
      id: 9,
    },

    { img: r61, name: "food-3076895.jpg", desc: "20.052024-422.64 KB", id: 18 },
    { img: r62, name: "food-3076883.jpg", desc: "20.052024-422.64 KB", id: 7 },
    { img: r63, name: "food-3076887.jpg", desc: "20.052024-422.64 KB", id: 11 },
    { img: r64, name: "food-3076888.jpg", desc: "20.052024-422.64 KB", id: 12 },
    { img: r65, name: "food-3076884.jpg", desc: "20.052024-422.64 KB", id: 8 },
    { img: r66, name: "food-3076885.jpg", desc: "20.052024-422.64 KB", id: 9 },
  ];
  return (
    <>
      {backdrop && (
        <>
          <div
            className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-center items-center z-20"
            onClick={() => {
              setBackdrop(false);
            }}
            style={{ opacity: 0.7 }} // Set opacity for the backdrop here
          ></div>

          <div className="">
            <FaChevronLeft className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:left-1/4 left-2 lg:top-2/4 top-2/4" />
            <FaChevronRight className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:right-1/4 right-3 lg:top-2/4 top-2/4" />
            <RxCross2
              className="bg-gray-300 absolute h-8 w-8  p-2  z-50  rounded-full lg:right-36 right-10 cursor-pointer lg:top-24 top-10"
              onClick={() => {
                setBackdrop(false);
              }}
            />

            <img
              src={idx}
              className=" absolute h-72 lg:w-1/3 w-2/3 top-1/2 -translate-y-1/2   lg:left-2/4 left-1/2 -translate-x-1/2 mx-auto z-30 rounded-none "
              style={{ opacity: 1 }} // Ensure full opacity for the image
              alt="Detailed View"
            />
          </div>
        </>
      )}
      <p className="lg:py-7 pt-6 text-gray-500 text-center text-xs border-t lg:border-0 mt-0">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-2 me-2 lg:ms-0 ms-2.5 lg:mt-10 mt-5">
        {imgs.map((img, index) => {
          return (
            <div
              className="flex flex-col justify-center cursor-pointer"
              key={index}
              onClick={() => {
                setBackdrop(true);
                setIdx(img.img);
              }}
            >
              <img
                className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto"
                src={img.img}
              />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="lg:ml-3 xl:ml-5  text-xs text-gray-500 mx-auto">
                {img.desc}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
