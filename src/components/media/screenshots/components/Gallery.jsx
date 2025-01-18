import s from "../../../../assets/images/ss.png";
import s2 from "../../../../assets/images/ss2.png";

import ss2 from "../../../../assets/images/sss2.png";
import ss3 from "../../../../assets/images/ss3.png";
import ss5 from "../../../../assets/images/ss5.png";
import options from "../../../../assets/images/options.png";
import ss from "../../../../assets/images/screeenshot.png";
import red from "../../../../assets/images/redd.png";
import bl from "../../../../assets/images/blmsg.png";
import black from "../../../../assets/images/black.png";
import mob from "../../../../assets/images/mob.png";

function Gallery() {
  const imgs = [
    {
      img: s2,
      name: "screenshot-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    {
      img: options,
      name: "screenshot-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: bl, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: red, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
  ];

  const imgs2 = [
    {
      img: ss5,
      name: "screenshot-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: s2, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss3, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss2, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },

    {
      img: mob,
      name: "screenshot-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
    { img: black, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    { img: ss, name: "screenshot-3076877.jpg", desc: "20.052024-422.64 KB" },
    {
      img: options,
      name: "screenshot-3076877.jpg",
      desc: "20.052024-422.64 KB",
    },
  ];
  return (
    <div className="lg:mt-10 mt-0">
      <p className="pt-6 lg:py-7 lg:border-0 border-t text-gray-500 text-center text-xs">
        Today 8:02 AM
      </p>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:ms-0 ms-2.5 lg:me-0 me-2.5 lg:mx-5 mx-0 lg:mt-10 mt-5 ">
        {imgs.map((img, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img
                className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto"
                src={img.img}
              />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className=" text-xs text-gray-500 mx-auto text-center">
                {img.desc}
              </p>
            </div>
          );
        })}
      </div>
      <p className="lg:py-7 pt-6 text-gray-500 text-center text-xs">
        Yesterday 8:02 AM
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6 lg:mx-0 mx-2 lg:mt-10 mt-5 ">
        {imgs2.map((img, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img
                className="lg:h-32 lg:w-32 h-44 w-48 rounded-lg mx-auto"
                src={img.img}
              />
              <p className=" font-semibold text-sm mx-auto">{img.name}</p>
              <p className="text-xs text-gray-500 text-center">{img.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
