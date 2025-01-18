import { useNavigate } from "react-router-dom";

import alb from "../../../../assets/images/album.png";
import alb2 from "../../../../assets/images/album2.png";
import alb3 from "../../../../assets/images/album3.png";

import a1 from "../../../../assets/images/al1.png";
import a2 from "../../../../assets/images/al2.png";
import a3 from "../../../../assets/images/al3.png";
import a4 from "../../../../assets/images/al4.png";

import a5 from "../../../../assets/images/al5.png";
import a6 from "../../../../assets/images/al6.png";
import a7 from "../../../../assets/images/al7.png";
import plants from "../../../../assets/images/plants.png";
import dogbook from "../../../../assets/images/dogbook.png";

function Gallery() {
  const navigate = useNavigate();
  const albums = [
    { img: alb, text: "Recents", desc: "1264 Photos, 164 Videos" },
    { img: alb2, text: "Nature", desc: "100 Photos, 5 Videos" },
    { img: dogbook, text: "Animals", desc: "100 Photos, 20 Videos" },
    { img: alb3, text: "Architecture", desc: "213 Photos, 90 Videos" },
    { img: plants, text: "Plants", desc: "83 Photos, 10 Videos" },
    { img: a6, text: "Interior", desc: "1264 Photos, 190 Videos" },
    { img: a7, text: "Wallpapers", desc: "14 Photos, 164 Videos" },
    { img: a5, text: "Food", desc: "124 Photos, 164 Videos" },
  ];
  const albumss = [
    { img: a1, text: "Videos", desc: "164 Videos" },
    { img: a2, text: "Screenshot", desc: "1264 Photos, 164 Videos" },
    { img: a3, text: "Hidden", desc: "1264 Photos, 164 Videos" },
    { img: a4, text: "Recently Deleted", desc: "1264 Photos, 164 Videos" },
  ];
  return (
    <div className="border-t lg:border-0 mt-0 lg:mx-4 mx-0">
      <p className="lg:p-4 mt-3  p-1 text-gray-400 lg:ml-0 ml-2 text-md">
        My Albums
      </p>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 lg:mx-0 ms-2.5 lg:ms-0  lg:mt-10 mt-3">
        {albums.map((album, index) => {
          return (
            <div
              className="flex flex-col justify-center cursor-pointer"
              key={index}
              onClick={() => {
                navigate("/media/photos");
              }}
            >
              <img
                className="lg:h-40 lg:w-40 h-44 w-48 rounded-lg mx-auto"
                src={album.img}
              ></img>
              <p className="text-sm text-center font-medium mt-2">
                {album.text}{" "}
              </p>
              <p className="text-xs text-gray-500 text-center">{album.desc} </p>
            </div>
          );
        })}
      </div>
      <p className="p-4 text-gray-400 mt-0 text-md ">Media Types</p>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 ms-2.5 lg:ms-0  lg:mx-0 lg:mt-10 mt-2">
        {albumss.map((album, index) => {
          return (
            <div className="flex flex-col justify-center" key={index}>
              <img
                className="lg:h-40 lg:w-40 h-44 w-48 rounded-lg mx-auto"
                src={album.img}
              ></img>
              <p className="text-sm text-center font-medium mt-2">
                {album.text}{" "}
              </p>
              <p className="text-xs text-gray-500 text-center">{album.desc} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
