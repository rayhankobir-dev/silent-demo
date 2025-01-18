import wif from "../../../../assets/images/wif.png";
import whatsapp from "../../../../assets/images/SocialApps/whatsapp.png";
import messenger from "../../../../assets/images/SocialApps/messenger.png";
import facebook from "../../../../assets/images/SocialApps/facebook.png";
import youtube from "../../../../assets/images/yt.png";
import crome from "../../../../assets/images/crome.png";
import apple from "../../../../assets/images/apple.png";
import wiki from "../../../../assets/images/wikoi.png";
import google from "../../../../assets/images/googlee.png";

function Table() {
  const contents = [
    { name: "Mobile Hotspot", data: "740 Mb", b: true, img: wif },
    { name: "Youtube", data: "532 Mb", b: true, img: youtube },
    { name: "Chrome", data: "453 Mb", b: true, img: crome },
    { name: "Facebook", data: "142 Mb", b: true, img: facebook },
    { name: "Messenger", data: "62 Mb", b: true, img: messenger },
    { name: "WhatsApp", data: "60 Mb", b: true, img: whatsapp },
  ];
  const contents2 = [
    { name: "apple.com", data: "122 Mb", img: apple },
    { name: "youtube.com", data: "898 Mb", img: youtube },
    { name: "google.com", data: "122 Mb", img: google },
    { name: "facebook.com", data: "670 Mb", img: facebook },
    { name: "twitter.com", data: "990 Mb", img: whatsapp },
    { name: "wikipedia.org", data: "898 Mb", img: wiki },
  ];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-4 lg:px-0 px-2 lg:border-2 border-0 border-b-0 rounded-lg mt-2 lg:mt-7">
      <div className="lg:border-r-2 border-r-0 lg:border-b-0 border-b-2">
        <p className="text-2xl font-bold pt-3 px-3">
          1.42 GB
          <span className=" ml-2 text-lg">of App Data used</span>
        </p>
        <p className="text-gray-500 border-b-2 px-3 pb-3">Today</p>{" "}
        {contents.map((content, index) => {
          return (
            <div
              className={`p-2 flex align-middle   c ${
                content.name === "WhatsApp" ? "border-b-0" : "border-b-2"
              }`}
              key={index}
            >
              <img
                className="h-10 w-10 rounded-md mr-3 mt-1.5"
                src={content.img}
              ></img>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{content.name}</p>
                <p className="text-gray-500">{content.data}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="  lg:border-b-0 border-b-2 lg:grid hidden ">
        <p className="text-2xl font-bold pt-3 px-3">
          702 MB
          <span className=" ml-2 text-lg">of Website Data used</span>
        </p>
        <p className="text-gray-500 border-b-2 px-3 pb-3">Today</p>
        {contents2.map((content, index) => {
          return (
            <div
              className={`p-2 flex align-middle  ${
                content.name === "wikipedia.org" ? "border-b-0" : "border-b-2"
              }`}
              key={index}
            >
              <img
                className="h-12 w-12 rounded-md mr-3"
                src={content.img}
              ></img>
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{content.name}</p>
                <p className="text-gray-500">{content.data}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;
