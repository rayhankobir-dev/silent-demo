/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useRef } from "react";
import { SubMenu2 } from "./SubMenu";
import { motion } from "framer-motion";
import SubMenu from "./SubMenu";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import logo2 from "../../assets/images/Logo-Symbol.png";
import Calendar from "../../assets/images/sideicon/Calendar.svg";
import Calls from "../../assets/images/sideicon/Calls.svg";
import Camera from "../../assets/images/sideicon/Camera.svg";
import Contacts from "../../assets/images/sideicon/Contacts.svg";
import DeviceControl from "../../assets/images/sideicon/Device Control.svg";
import Home from "../../assets/images/sideicon/Home.svg";
import Media from "../../assets/images/sideicon/Media.svg";
import Messages from "../../assets/images/sideicon/Messages.svg";
import Network from "../../assets/images/sideicon/Network.svg";
import notes from "../../assets/images/sideicon/notes.svg";
import Apps from "../../assets/images/sideicon/Apps.svg";
import Browser from "../../assets/images/sideicon/Browser.svg";
import Files from "../../assets/images/sideicon/Files.svg";
import Location from "../../assets/images/sideicon/Location.svg";
import KeyLogger from "../../assets/images/sideicon/KeyLogger.svg";
import Shield from "../../assets/images/sideicon/Shield.png";
import Bell from "../../assets/images/sideicon/Bell.png";
import Export from "../../assets/images/sideicon/Export.png";
import Logout from "../../assets/images/sideicon/Logout.png";
import Chat from "../../assets/images/sideicon/Chat.png";
import Discord from "../../assets/images/sideicon/SideBar/Discord.png";
import FacebookMessenger from "../../assets/images/sideicon/SideBar/Facebook Messenger.png";
import Gmail from "../../assets/images/sideicon/SideBar/Gmail.png";
import GoogleChat from "../../assets/images/sideicon/SideBar/Google Chat.png";
import Hike from "../../assets/images/sideicon/SideBar/Hike.png";
import IMO from "../../assets/images/sideicon/SideBar/IMO.png";
import Instagram from "../../assets/images/sideicon/SideBar/Instagram.png";
import KIK from "../../assets/images/sideicon/SideBar/KIK.png";
import KakaoTalk from "../../assets/images/sideicon/SideBar/KakaoTalk.png";
import Line from "../../assets/images/sideicon/SideBar/Line.png";
import MicrosoftTeams from "../../assets/images/sideicon/SideBar/Microsoft Teams.png";
import Outlook from "../../assets/images/sideicon/SideBar/Outlook.png";
import Signal from "../../assets/images/sideicon/SideBar/Signal.png";
import Skype from "../../assets/images/sideicon/SideBar/Skype.png";
import Slack from "../../assets/images/sideicon/SideBar/Slack.png";
import Snapchat from "../../assets/images/sideicon/SideBar/Snapchat.png";
import Tango from "../../assets/images/sideicon/SideBar/Tango.png";
import Telegram from "../../assets/images/sideicon/SideBar/Telegram.png";
import Tiktok from "../../assets/images/sideicon/SideBar/Tiktok.png";
import Tinder from "../../assets/images/sideicon/SideBar/Tinder.png";
import Twitter from "../../assets/images/sideicon/SideBar/Twitter.png";
import Viber from "../../assets/images/sideicon/SideBar/Viber.png";
import Zolo from "../../assets/images/sideicon/SideBar/Zolo.png";
import whatsapp from "../../assets/images/sideicon/SideBar/whatsapp.png";
import support from "../../assets/images/sideicon/1.png";
import refund from "../../assets/images/sideicon/2.png";

import { IoMdAdd } from "react-icons/io";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
const Sidebar = ({ isTabletMid, open, setOpen }) => {
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "100%",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "260px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "3.5rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList1 = [
    {
      name: "Calls",
      icon: Calls,
      subMenu: [
        {
          name: "Call History",
          link: "callhistory",
        },
        {
          name: "Live Call",
          link: false,
        },
        {
          name: "Blocked Calls",
          link: "blockedcalls",
        },
        {
          name: "Forwarded Calls",
          link: "forwardedcalls",
        },
        {
          name: "Face Time",
          link: "facetime",
        },
        {
          name: "Live Face Time",
          link: false,
        },
      ],
    },
    {
      name: "Contacts",
      icon: Contacts,
      subMenu: [
        {
          name: "Contacts List",
          link: "contactslist",
        },
        {
          name: "Blocked Contacts",
          link: "blockedcontacts",
        },
      ],
    },
  ];
  const subMenusList2 = [
    {
      name: "network",
      icon: Network,
      subMenu: [
        {
          name: "Mobile Network",
          link: "mobile-network",
        },
        {
          name: "Wifi Network",
          link: "wifi-network",
        },
        {
          name: "Data Usage",
          link: "data-usage",
        },
      ],
    },
    {
      name: "camera",
      icon: Camera,
      subMenu: [
        {
          name: "Front Camera",
          link: false,
        },
        {
          name: "Back Camera",
          link: false,
        },
        {
          name: "Video Camera",
          link: false,
        },
        {
          name: "All Captures",
          link: "camera",
        },
      ],
    },
    {
      name: "media",
      icon: Media,
      subMenu: [
        {
          name: "Photos",
          link: "photos",
        },
        {
          name: "Videos",
          link: "videos",
        },
        {
          name: "Screenshots",
          link: "screenshots",
        },
        {
          name: "Albums",
          link: "albums",
        },
        {
          name: "Screen Recordings",
          link: false,
        },
        {
          name: "Recently Deleted",
          link: false,
        },
        {
          name: "Hidden",
          link: false,
        },
      ],
    },
  ];

  const subMenusList3 = [
    {
      name: "Apps",
      icon: Apps,
      subMenu: [
        {
          name: "All Apps",
          link: "allapps",
        },
        {
          name: "Installed App",
          link: "installedapp",
        },
        {
          name: "Uninstalled App",
          link: "uninstalledapp",
        },
        {
          name: "Blocked App",
          link: "blockedapp",
        },
        {
          name: "App Notifications",
          link: "notification",
        },
        {
          name: "Screen Time",
          link: "screentime",
        },
        {
          name: "Login & Passwords",
          link: "loginandpassword",
        },
      ],
    },
    {
      name: "Browser",
      icon: Browser,
      subMenu: [
        {
          name: "Browser History",
          link: "browserhistory",
        },
        {
          name: "Web Filters",
          link: "webfilters",
        },
        {
          name: "Blocked Websites",
          link: false,
        },
        {
          name: "Bookmarked Websites",
          link: false,
        },
        {
          name: "Incognito Tabs",
          link: false,
        },
        {
          name: "Data Usage",
          link: "datausage",
        },
        {
          name: "Screen Time",
          link: "screentime",
        },
      ],
    },
    {
      name: "Files",
      icon: Files,
      subMenu: [
        {
          name: "All Files",
          link: "allfiles",
        },
        {
          name: "Recent Files",
          link: false,
        },
        {
          name: "Downloads",
          link: "downloads",
        },
        {
          name: "Documents",
          link: false,
        },
        {
          name: "Recently Deleted",
          link: false,
        },
      ],
    },
    {
      name: "Location",
      icon: Location,
      subMenu: [
        {
          name: "Live Location",
          link: "livelocation",
        },
        {
          name: "Location History",
          link: "locationhistory",
        },
        {
          name: "GeoFence",
          link: "geofrence",
        },
        {
          name: "Wifi Logger",
          link: "wifilogger",
        },
      ],
    },
  ];
  const subMenusList4 = [
    {
      name: "Privacy&Security",
      icon: Shield,
      subMenu: [
        {
          name: "Saved Passwords",
          link: "SavedPassword",
        },
        {
          name: "App Permissions",
          link: "AppPermisions",
        },
        {
          name: "Saved Payment Methods",
          link: "Payment",
        },
      ],
    },
    {
      name: "Alert&Notification",
      icon: Bell,
      subMenu: [
        {
          name: "All Alert & Notification",
          link: "AllAllerts",
        },
        {
          name: "Blocked/Hidden Notification",
          link: false,
        },
        {
          name: "Notification Setting",
          link: "NotificationSettings",
        },
        {
          name: "Intant Alerts",
          link: "InstantAlerts",
        },
      ],
    },
  ];
  const subMenusList5 = [
    {
      name: "SocialApps",
      icon: Chat,
      link: "SocialApps",
      subMenu: [
        {
          name: "WhatsApp",
          link: false,
          icon: whatsapp,
        },
        {
          name: "Facebook ",
          name2: "Messenger",
          link: false,
          icon: FacebookMessenger,
        },
        {
          name: "Twitter",
          link: false,
          icon: Twitter,
        },
        {
          name: "Tiktok",
          link: false,
          icon: Tiktok,
        },
        {
          name: "Telegram",
          link: false,
          icon: Telegram,
        },
        {
          name: "Skype",
          link: false,
          icon: Skype,
        },
        {
          name: "Microsoft ",
          name2: "Teams",
          link: false,
          icon: MicrosoftTeams,
        },
        {
          name: "Viber",
          link: false,
          icon: Viber,
        },
        {
          name: "Tinder",
          link: false,
          icon: Tinder,
        },
        {
          name: "Instagram",
          link: false,
          icon: Instagram,
        },
        {
          name: "Snapchat",
          link: false,
          icon: Snapchat,
        },
        {
          name: "Slack",
          link: false,
          icon: Slack,
        },
        {
          name: "Discord",
          link: false,
          icon: Discord,
        },
        {
          name: "Gmail",
          link: false,
          icon: Gmail,
        },
        {
          name: "Outlook",
          link: false,
          icon: Outlook,
        },
        {
          name: "Signal",
          link: false,
          icon: Signal,
        },
        {
          name: "Google Chat",
          link: false,
          icon: GoogleChat,
        },
        {
          name: "Line",
          link: false,
          icon: Line,
        },
        {
          name: "KIK",
          link: false,
          icon: KIK,
        },
        {
          name: "Tango",
          link: false,
          icon: Tango,
        },
        {
          name: "Kakao Talk",
          link: false,
          icon: KakaoTalk,
        },
        {
          name: "Hike",
          link: false,
          icon: Hike,
        },
        {
          name: "IMO",
          link: false,
          icon: IMO,
        },
        {
          name: "Zolo",
          link: false,
          icon: Zolo,
        },
      ],
    },
  ];
  return (
    <div className="h-screen fixed left-0 z-10 w-1">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen  bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999]  md:max-w-[16rem] border-r-2 border-solid  md:w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex justify-center gap-2.5 font-medium border-b pt-[1.12rem] md:pt-[1rem] md:pb-[1.1rem]  border-slate-300">
          {open ? (
            <img
              src={logo}
              className=" h-[2rem] w-[10rem] object-cover"
              width={60}
              alt="logo"
            />
          ) : (
            <img
              src={logo2}
              width={38}
              alt="logo"
              className="md:py-[0.25rem]"
            />
          )}
        </div>

        <div className="flex flex-col mt-4 md:mt-[4px] h-[90%] ">
          {open && (
            <div className="mx-3">
              <p className="text-base text-left font-medium">demo@domain.com</p>
              <p className="text-left text-secondary text-sm font-normal">
                Updated: Apr 24 2024 16:30:22
              </p>
              <button
                type="button"
                className="max-w text-white my-2 bg-[#172A6E] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm md:px-12 py-2 text-center flex items-center justify-center w-full"
              >
                <IoMdAdd className="mx-2" />
                Add Devices
              </button>
            </div>
          )}

          <ul className="whitespace-pre liborder border-t text-[18px] weight-[500] no-scrollbar  mt-2 md:mt-0 flex flex-col   font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 xl:h-[82%]  lg:h-[78%] h-[70%]">
            <li className="liborder">
              <NavLink to={"/"} className="link ">
                <img className="h-5 " src={Home} alt />
                Dashboard
              </NavLink>
            </li>
            <li className="liborder">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <p className="link ">
                    <img className="h-5 " src={support} alt />
                    Support Ticket
                  </p>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </li>

            <li className="liborder">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <p className="link ">
                    <img className="h-5 " src={refund} alt />
                    Refund Request
                  </p>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </li>
            <li className="liborder">
              <NavLink to={"/devicecontrol"} className="link">
                <img className="h-5 " src={DeviceControl} alt />
                Device Control
              </NavLink>
            </li>

            <div className="  border-slate-300 ">
              {subMenusList1?.map((menu, i) => (
                <div key={i} className="flex flex-col  ">
                  <SubMenu data={menu} open={open} />
                </div>
              ))}
            </div>

            <li className="liborder">
              <NavLink to={"/messages"} className="link">
                <img className="h-5 " src={Messages} alt />
                Messages
              </NavLink>
            </li>

            <div className="  border-slate-300 ">
              {subMenusList2?.map((menu, i) => (
                <div key={i} className="flex flex-col  ">
                  <SubMenu data={menu} open={open} />
                </div>
              ))}
            </div>

            <li className="liborder">
              <NavLink to={"/calendar"} className="link">
                <img className="h-5 " src={Calendar} alt />
                Calendar
              </NavLink>
            </li>
            {/* NOTES */}
            <li className="liborder">
              <NavLink to={"/notes"} className="link">
                <img className="h-5  " src={notes} alt />
                Notes
              </NavLink>
            </li>
            <div className="  border-slate-300 ">
              {subMenusList3?.map((menu, i) => (
                <div key={i} className="flex flex-col  ">
                  <SubMenu data={menu} open={open} />
                </div>
              ))}
            </div>
            <li className="liborder">
              <NavLink to={"/KeyLogger"} className="link">
                <img className="h-5 " src={KeyLogger} alt />
                KeyLogger
              </NavLink>
            </li>
            <div className="  border-slate-300 ">
              {subMenusList4?.map((menu, i) => (
                <div key={i} className="flex flex-col  ">
                  <SubMenu data={menu} open={open} />
                </div>
              ))}
            </div>
            {/* <li className="liborder">
              <NavLink to={"/SavedPassword"} className="link">
                <SlSettings size={23} className="min-w-max" />
                Saved Passwords
              </NavLink>
            </li> */}

            <div className="  border-slate-300 ">
              {subMenusList5?.map((menu, i) => (
                <div key={i} className="flex flex-col  ">
                  <SubMenu2 data={menu} open={open} />
                </div>
              ))}
            </div>

            <li className="liborder">
              <NavLink to={"/Export"} className="link">
                <img className="h-5 " src={Export} alt />
                Data Export
              </NavLink>
            </li>
            <li className="liborder">
              <NavLink to={"https://cyberguard24.com"} className="link">
                <img className="h-5 " src={Logout} alt />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        {/* <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div> */}
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
