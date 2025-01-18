import Switch from "../../../UI/Switch";
import whatsapp from "../../../assets/images/SocialApps/whatsapp.png";
import messenger from "../../../assets/images/SocialApps/messenger.png";
import facebook from "../../../assets/images/SocialApps/facebook.png";
import youtube from "../../../assets/images/yt.png";
import crome from "../../../assets/images/crome.png";
import wif from "../../../assets/images/wif.png";
import sheet from "../../../assets/images/sheet.png";
import gmail from "../../../assets/images/gmaill.png";

function UsageTable() {
  const contents = [
    { name: "Mobile Hotspot", img: wif },
    { name: "Youtube", img: youtube },
    { name: "Chrome", img: crome },
    { name: "Facebook", img: facebook },
    { name: "Messenger", img: messenger },
    { name: "WhatsApp", img: whatsapp },
    { name: "Google Sheets", img: sheet },
    { name: "Gmail", img: gmail },
  ];
  return (
    <div className="grid grid-cols-1 lg:border-2 border-0 lg:mx-4 mx-0 lg:mt-9 rounded-xl">
      {contents.map((content, index) => {
        return (
          <div
            key={index}
            className={`flex align-middle justify-between lg:p-4 py-4 px-3  border-b ${
              content.name === "Gmail" ? "lg:border-b-0" : "lg:border-b-2"
            } `}
          >
            <div className="flex">
              <img className="w-8 h-8 rounded-lg mr-3" src={content.img}></img>
              <h3 className="text-lg font-semibold mt-1">{content.name}</h3>
            </div>
            <Switch />
          </div>
        );
      })}
    </div>
  );
}

export default UsageTable;
