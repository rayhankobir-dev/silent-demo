import SocialAppsHeader from "../components/SocialApps/SocialAppsHeader";
import instagram from "../../src/assets/images/SocialApps/Instagram.png";
import facebook from "../../src/assets/images/SocialApps/facebook.png";
import whatsapp from "../../src/assets/images/SocialApps/whatsapp.png";
import snapchat from "../../src/assets/images/SocialApps/snapchat.png";
import skype from "../../src/assets/images/SocialApps/skype.png";
import teams from "../../src/assets/images/SocialApps/Teams.png";
import viber from "../../src/assets/images/SocialApps/viber.png";
import tinder from "../../src/assets/images/SocialApps/tinder.png";
import slack from "../../src/assets/images/SocialApps/slack.png";
import discord from "../../src/assets/images/SocialApps/discord.png";
import gmail from "../../src/assets/images/SocialApps/gmail.png";
import outlook from "../../src/assets/images/SocialApps/outlook.png";
import telegram from "../../src/assets/images/SocialApps/telegram.png";
import signal from "../../src/assets/images/SocialApps/signal.png";
import hangout from "../../src/assets/images/SocialApps/hangouts.png";
import line from "../../src/assets/images/SocialApps/Line.png";
import kik from "../../src/assets/images/SocialApps/kik.png";
import tango from "../../src/assets/images/SocialApps/tango.png";
import kakao from "../../src/assets/images/SocialApps/kokao.png";
import hike from "../../src/assets/images/SocialApps/hike.png";
import imo from "../../src/assets/images/SocialApps/imo.png";
import zolo from "../../src/assets/images/SocialApps/zolo.png";
import twitter from "../../src/assets/images/SocialApps/twitter.png";
import messenger from "../../src/assets/images/SocialApps/messenger.png";
import SocialApp from "../components/SocialApps/SocialApp";
import Button from "../components/Shared/Button";
import More from "../assets/images/more.png";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const SocialAppsData = [
  {
    id: "1",
    heading: "Instagram",
    usage: "123.24 MB",
    icon: instagram,
  },
  {
    id: "2",
    heading: "Facebook",
    usage: "123.24 MB",
    icon: facebook,
  },
  {
    id: "3",
    heading: "WhatsApp",
    usage: "123.24 MB",
    icon: whatsapp,
  },
  {
    id: "4",
    heading: "Snapchat",
    usage: "123.24 MB",
    icon: snapchat,
  },
  {
    id: "5",
    heading: "Skype",
    usage: "123.24 MB ",
    icon: skype,
  },
  {
    id: "6",
    heading: "Teams",
    usage: "123.24 MB",
    icon: teams,
  },
  {
    id: "7",
    heading: "Viber",
    usage: "123.24 MB",
    icon: viber,
  },
  {
    id: "8",
    heading: "Tinder",
    usage: "123.24 MB",
    icon: tinder,
  },

  {
    id: "9",
    heading: "Slack",
    usage: "123.24 MB",
    icon: slack,
  },
  {
    id: "10",
    heading: "Discord",
    usage: "123.24 MB",
    icon: discord,
  },
  {
    id: "11",
    heading: "Gmail",
    usage: "123.24 MB",
    icon: gmail,
  },
  {
    id: "12",
    heading: "Outlook",
    usage: "123.24 MB",
    icon: outlook,
  },
  {
    id: "13",
    heading: "Telegram",
    usage: "123.24 MB",
    icon: telegram,
  },
  {
    id: "14",
    heading: "Signal",
    usage: "123.24 MB",
    icon: signal,
  },
  {
    id: "15",
    heading: "Hangouts",
    usage: "123.24 MB",
    icon: hangout,
  },
  {
    id: "16",
    heading: "Line",
    usage: "123.24 MB",
    icon: line,
  },
  {
    id: "17",
    heading: "Kik",
    usage: "123.24 MB",
    icon: kik,
  },
  {
    id: "18",
    heading: "Tango",
    usage: "123.24 MB",
    icon: tango,
  },
  {
    id: "19",
    heading: "KakaoTalk",
    usage: "123.24 MB",
    icon: kakao,
  },
  {
    id: "20",
    heading: "Hike",
    usage: "123.24 MB",
    icon: hike,
  },
  {
    id: "21",
    heading: "IMO",
    usage: "123.24 MB",
    icon: imo,
  },
  {
    id: "22",
    heading: "Zolo",
    usage: "123.24 MB",
    icon: zolo,
  },
  {
    id: "23",
    heading: "Twitter",
    usage: "123.24 MB",
    icon: twitter,
  },
  {
    id: "24",
    heading: "Messenger",
    usage: "123.24 MB",
    icon: messenger,
  },
];
const SocialApps = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <SocialAppsHeader />
      <ul className="grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4   sm:grid-cols-4 grid-cols-4 ">
        {SocialAppsData.map((SocialApps) => (
          <li key={SocialApps.id} className="my-4 pe-5 sm:pe-0 sm:ps-0 ps-5">
            <SocialApp SocialApps={SocialApps} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4 mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button
              onClick={viewMore}
              className="text-[18px]   shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]   py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default SocialApps;
