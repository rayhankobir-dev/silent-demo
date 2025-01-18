/* eslint-disable react/prop-types */
import rect from "../../../assets/images/rect.png";
import i2 from "../../../assets/images/i2.png";
import i4 from "../../../assets/images/i4.png";
import i5 from "../../../assets/images/i5.png";
import i6 from "../../../assets/images/i6.png";
import gallery from "../../../assets/images/gallery.png";
import i51 from "../../../assets/images/i51.png";
import i52 from "../../../assets/images/i52.png";
import i53 from "../../../assets/images/i53.png";
import i61 from "../../../assets/images/i61.png";
import i62 from "../../../assets/images/i62.png";
import i63 from "../../../assets/images/i63.png";
import i71 from "../../../assets/images/i71.png";
import i72 from "../../../assets/images/i72.png";
import i73 from "../../../assets/images/i73.png";
import i81 from "../../../assets/images/i81.png";
import i82 from "../../../assets/images/i82.png";
import i83 from "../../../assets/images/i83.png";

function Gallery(props) {
  const images = [
    { src: rect },
    { src: i2 },
    { src: gallery, onClick: props.onClick },
    { src: i4 },
    { src: i5 },
    { src: i6 },
    { src: i51 },
    { src: i52 },
    { src: i53 },
    { src: i61 },
    { src: i62 },
    { src: i63 },
    { src: i71 },
    { src: i72 },
    { src: i73 },
    { src: i81 },
    { src: i82 },
    { src: i83 },
  ];
  return (
    <div>
      <div className="p-4 border-r-2">
        <h3 className="font-semibold text-lg lg:text-xl lg:text-gray-800 text-gray-500">
          Recent Captures
        </h3>
      </div>
      <div className="grid grid-cols-3">
        {images.map((img, idx) => {
          return (
            <img
              className="border-2"
              src={img.src}
              key={idx}
              onClick={img.onClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
