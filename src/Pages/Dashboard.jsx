import { useState } from "react";

import { FaApple } from "react-icons/fa";

import { VscCallOutgoing } from "react-icons/vsc";
import InfoCard from "../components/Cards/InfoCard";
import liveimg from "../assets/images/liveloca.png";
import liveimg2 from "../assets/images/liveloca2.png";
import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import YT from "../assets/images/yt.png";
import crome from "../assets/images/crome.png";
import mgngr from "../assets/images/msgngr.png";
import fb from "../assets/images/fb.png";
import graph from "../assets/images/graph2.png";
import whatsapp from "../assets/images/KeyLogger/whatsapp.png";
import apple from "../assets/images/apple2.png";
import cmath from "../assets/images/cymath2.png";
import robo from "../assets/images/robo2.png";
import photos from "../assets/images/KeyLogger/photos.png";
import location from "../assets/images/locationreact.png";
import wifi from "../assets/images/dashboard/wifi.svg";
import Apps from "../assets/images/dashboard/Apps.svg";
import Network from "../assets/images/dashboard/Network.svg";
import audio from "../assets/images/dashboard/audio.svg";
import battery from "../assets/images/dashboard/battery.svg";
import device from "../assets/images/dashboard/device storage.svg";
import document from "../assets/images/dashboard/document.svg";
import drive from "../assets/images/dashboard/drive.svg.png";
import freespace from "../assets/images/dashboard/free space.svg";
import gps from "../assets/images/dashboard/gps.svg";
import image from "../assets/images/dashboard/image.svg";
import other from "../assets/images/dashboard/other.svg";
import video from "../assets/images/dashboard/video.svg";
import Oval1 from "../assets/images/profile/Oval-1.png";
import Oval2 from "../assets/images/profile/Oval-2.png";
import Oval3 from "../assets/images/profile/Oval-3.png";
import Oval4 from "../assets/images/profile/Oval-4.png";
import Oval6 from "../assets/images/profile/Oval-6.png";

import user from "../assets/images/profile/user.png";
import Oval from "../assets/images/profile/Oval.png";

import { CiMobile3 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";
import { Link } from "react-router-dom";
import { FcAndroidOs } from "react-icons/fc";
import { GoAlert, GoDotFill } from "react-icons/go";

const Dashboard = () => {
  const [autoRenew, setAutoReNew] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => {
    setToggle(!toggle);
  };

  const DashIcons = [
    {
      icon: wifi,
      name: "Wifi",
      status: "On",
      link: "",
    },
    {
      icon: Network,
      name: "Verizon",
      status: "On",
      link: "",
    },
    {
      icon: gps,
      name: "GPS",
      status: "On",
      link: "",
    },
    {
      icon: battery,
      name: "Battery",
      status: "76%",
      link: "",
    },
    {
      icon: device,
      name: "Device Storage",
      status: "64 GB",
      link: "",
    },
    {
      icon: freespace,
      name: "Free Space",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: video,
      name: "Videos",
      status: "12.57 GB",
      link: "",
    },
    {
      icon: image,
      name: "Images",
      status: "4.57 GB",
      link: "",
    },
    {
      icon: audio,
      name: "Audio",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: Apps,
      name: "Apps",
      status: "31.57 GB",
      link: "",
    },
    {
      icon: document,
      name: "Documents",
      status: "8.78 GB",
      link: "",
    },
    {
      icon: other,
      name: "Other",
      status: "2.34 GB",
      link: "",
    },
  ];
  const DashInfo = [
    {
      name: "Device Model",
      details: "iPhone 11",
      icon: apple,
    },
    {
      name: "Version",
      details: "15.1",
    },
    {
      name: "IMEI",
      details: "35473307256675X",
    },
    {
      name: "Last Updated",
      details: "Dec 28,2023 02:28",
      noline: true,
    },
  ];
  const RecentCall = [
    {
      img: Oval,
      name: "Hewie Gamage",
      callIcon: <VscCallOutgoing />,
      callStatus: "outgoing",
      date: "21/05/2024",
    },
    {
      img: Oval1,
      name: "Tommi Osayande",
      callIcon: <MdPhoneCallback />,
      callStatus: "missed",
      date: "21/05/2024",
    },
    {
      img: Oval2,
      name: "Morty Zumalt",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "outgoing",
      date: "21/05/2024",
    },
    {
      img: Oval3,
      name: "Sander Margotta",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "21/05/2024",
    },
    {
      img: Oval4,
      name: "Ramona Bea",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "21/05/2024",
    },
  ];
  const RecentMessages = [
    {
      img: user,
      name: "+61 123 456 890",
      msg: "Little brother, I'm lonely and I'm looking for company. My Telegram ID: Tindf202",
      time: "9:41 am",
    },
    {
      img: user,
      name: "+61 123 456 890",
      msg: "The Apple Id code is 125544. Dont share with",
      time: "9:41 am",
    },
    {
      img: user,
      name: "+61 123 456 890",
      msg: "Your Tinder code is 815180 Don't share @tinder",
      time: "9:41 am",
    },
    {
      img: Oval6,
      name: "(319) 555-0115",
      msg: "Verfication code 759028, valid for 10 minutes",
      time: "10/13/2024",
    },
    {
      img: user,
      name: "+61 123 456 890",
      msg: "562963 SMS login verfication code, valid for ",
      time: "10/13/2024",
    },
  ];
  const MostUsedApp = [
    {
      img: YT,
      name: "Youtube",
      bar: "70%",
      time: "10m",
    },
    {
      img: crome,
      name: "Chrome",
      bar: "55%",
      time: "9m",
    },
    {
      img: fb,
      name: "Facebook",
      bar: "40%",
      time: "8m",
    },
    {
      img: mgngr,
      name: "Messenger",
      bar: "35%",
      time: "7m",
      noline: true,
    },
  ];
  const RecentAlert = [
    {
      img: whatsapp,
      name: "Justin Ryhss",
      des: "Do you want to go see a movie tonight?",
      time: "09:10 AM",
    },
    {
      img: location,
      name: "Asher is Out of Location",
      des: "Location Alert! GeoFencer.",
      time: "09:10 AM",
    },
    {
      img: YT,
      name: "Watch Now: TII News New Video ",
      des: "How you feel about new video?",
      time: "09:10 AM",
    },
    {
      img: mgngr,
      name: "Yoknin Yossee ",
      des: "Hey! How are you?",
      time: "09:10 AM",
    },
    {
      img: whatsapp,
      name: "Moon & Urus",
      des: "New Office Table Available Now!",
      time: "09:10 AM",
      noline: true,
    },
  ];
  const RecentKeylogger = [
    {
      img: crome,
      name: "Chrome ",
      des: "Bookstores near me",
      time: "09:10 AM",
    },
    {
      img: photos,
      name: "Photos ",
      des: "should we meet up tomorrow before classes?",
      time: "09:10 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "hey, how are you doing?",
      time: "09:10 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "idk, maybe in an hour or so",
      time: "09:10 AM",
    },
    {
      img: mgngr,
      name: "Messenger ",
      des: "did she say anything to you? or dad?",
      time: "09:10 AM",
      noline: true,
    },
  ];
  const RecentBrowserHistory = [
    {
      img: apple,
      name: "Apple ",
      des: "https://www.apple.com",
      time: "09:10 AM",
    },
    {
      img: fb,
      name: "Facebook ",
      des: "https://www.facebook.com",
      time: "08:58 AM",
    },
    {
      img: whatsapp,
      name: "WhatsApp ",
      des: "https://www.web.whatsapp.com",
      time: "08:44 AM",
    },
    {
      img: robo,
      name: "Roblox ",
      des: "https://www.roblox.com",
      time: "08:43 AM",
    },
    {
      img: cmath,
      name: "C Cymath ",
      des: "https://www.cymath.com",
      time: "08:21 AM",
      noline: true,
    },
  ];

  return (
    <>
      <div
        style={{ width: "inherit" }}
        className=" items-center  mb-2 px-4 md:hidden text-black bg-[#FFEAB5] py-2 "
      >
        <div className="flex md:mx-3 gap-2 md:gap-0">
          <div className="mt-1 xs:mt-2 md:mt-0">
            <GoAlert className="mt-[3px] h-4 w-4" />
          </div>

          <span className="sr-only">Info</span>
          <div className="md:ms-3 text-[10px] xs:text-[13px] md:text-base font-medium">
            This demo dashboard is for reference only, no activities can be
            performed here.{" "}
            <a
              href="https://cyberguard24.com/pricing"
              className="font-semibold underline hover:no-underline text-[#172A6E]"
            >
              Upgrade to Unlock Full Access.
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden border-b mx-4  mb-2 rounded-lg  bg-gray-50 mt-8">
        <ul
          className="grid grid-cols-2  h-12  cursor-pointer"
          onClick={handletoggle}
        >
          <li className="flex items-center  gap-2   ">
            <CiMobile3 size={20} className="ms-2  " /> Ashly&apos;s Device
          </li>
          <li className=" items-center flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
            <button
              type="button"
              className=" text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 "
            >
              <FaApple className="text-black " />
              iPhone 11
              <IoIosArrowDown className="flex justify-end" />
            </button>
          </li>
        </ul>
      </div>
      {toggle && (
        <div
          className="  mx-4  rounded-lg mb-6 cursor-pointer bg-gray-50"
          onClick={handletoggle}
        >
          <ul className="grid grid-cols-2  liborder ">
            <li className="pt-2 px-2  "> Gerry&apos;s Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                className=" text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                <FaApple className="text-black " />
                iPhone 13
              </button>
            </li>
          </ul>
          <ul className="grid grid-cols-2  liborder ">
            <li className="pt-2 px-2  "> Akhil&apos;s Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                className=" text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                <FcAndroidOs />
                Samsung 12
              </button>
            </li>
          </ul>
          <ul className="grid grid-cols-2   ">
            <li className="pt-2 px-2  "> Gurdeep&apos;s Device</li>
            <li className="pt-2 flex flex-row-reverse text-[#172A6E]  sm:font-medium md:font-semibold">
              <button
                type="button"
                className=" text-base gap-1  text-[#172A6E]  focus:outline-none    text-center inline-flex items-center  me-2 mb-2"
              >
                <FaApple className="text-black " />
                iPhone 14 Pro
              </button>
            </li>
          </ul>
        </div>
      )}
      <div className="grid grid-cols-4 mx-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 mt-6 mb-2 md:my-2 ">
        {DashIcons.map((data, i) => (
          <div
            className="flex items-center justify-center text-center mb-4 md:mb-6"
            key={i}
          >
            <div className="m-auto cursor-pointer">
              <div className="flex items-center justify-center">
                <img
                  className="w-6 h-6 md:w-8 md:h-8  m-auto"
                  src={data.icon}
                  alt
                />
              </div>
              <h6 className="text-[11px] xs:text-[13px] md:text-[18px] font-medium  text-nowrap">
                {data.name}
              </h6>
              <p className="text-[#007AFF] text-[12px] md:text-[16px] font-medium">
                {data.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4  md:mb-8  md:mx-0 ">
        <InfoCard title="Device Info" className="mb-2 md:mb-0">
          <div className="rounded-lg py-1 bg-[#8E8E93]/[0.08]">
            {DashInfo.map((info, i) => (
              <ul
                key={i}
                className={`${
                  info.noline === true ? " md:border-b" : " liborder"
                } grid grid-cols-2 `}
              >
                <li className="py-3 px-2 text-base md:text-lg  ">
                  {info.name}
                </li>
                <li className=" flex justify-end py-3 text-end pe-2 text-[#172A6E] text-base md:text-lg sm:font-medium md:font-semibold">
                  <img
                    src={info.icon}
                    className="h-4 md:mt-[6px] mt-[3px] mx-1 font-medium"
                  />{" "}
                  <span>{info.details}</span>
                </li>
              </ul>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Live Location"
          titleRight={
            <p className="text-blue-400">
              <Link to="/location">View More</Link>
            </p>
          }
          className="mb-2 md:mb-0"
        >
          <div className="rounded-lg py-1 bg-gray-50 hidden md:block">
            <img src={liveimg} alt="img" className="object-cover h-52 w-96" />
          </div>
          <div className="rounded-lg py-1 bg-gray-50 md:hidden">
            <img src={liveimg2} alt="img" className="object-cover h-52 w-96" />
          </div>
        </InfoCard>
        <InfoCard title="Account Info " className="mb-2 md:mb-0">
          <div className="rounded-lg py-1 bg-[#8E8E93]/[0.08]">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="py-3 px-2 text-base md:text-lg  liborder">
                Membership
              </li>
              <li className="py-3 text-[#172A6E] text-base md:text-lg font-medium liborder text-end me-2">
                Premium
              </li>
              <li className="py-3 px-2 text-base md:text-lg  liborder">
                Duration
              </li>
              <li className="py-3 text-[#172A6E] text-base md:text-lg font-medium liborder text-end me-2">
                Yearly
              </li>
              <li className="p-1 px-2 liborder text-base md:text-lg  mt-2">
                Auto Renew
              </li>
              <li className="p-1 text-[#172A6E] liborder text-base md:text-lg font-medium text-end me-2">
                <label className={` toggle-switch mt-1`}>
                  <input
                    type="checkbox"
                    value={autoRenew}
                    onChange={() => setAutoReNew(!autoRenew)}
                  />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </li>
              <li className="py-3 px-2 md:border-b text-base md:text-lg  ">
                Expiry Date
              </li>
              <li className="py-3 text-[#172A6E] font-medium md:border-b  text-base md:text-lg  text-end me-2">
                Dec 28,2024 2:28
              </li>
            </ul>
          </div>
        </InfoCard>
      </div>
      <div className="grid grid-cols-1 mx-4 md:grid-cols-1  lg:grid-cols-2 md:gap-8 mb-2 md:mb-8   md:mx-0">
        <InfoCard
          title="Recent Calls"
          titleRight={
            <p className="text-blue-400">
              <Link to="/calls/callhistory">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0 "
        >
          {RecentCall.map((info, i) => (
            <ul key={i} className="flex md:p-2 py-1  liborder  items-center">
              <li className="flex-none w-12 md:w-14 pt-2">
                <img
                  className="w-10 h-10 rounded-full md:m-auto"
                  src={info.img}
                  alt
                />
              </li>
              <li className="p-1 flex-1 w-64">
                <div>
                  <p className="font-semibold text-[16px] md:text-[18px] lg:text-[18px] xl:text-[24px] weight-[500]">
                    {info.name}
                  </p>
                  <div
                    className={`${
                      info.callStatus == "outgoing" && "text-gray-400"
                    } ${info.callStatus == "missed" && "text-red-600"} ${
                      info.callStatus == "incoming" && "text-green-600"
                    } flex `}
                  >
                    <p className="my-auto ">{info.callIcon}</p>
                    <p className="ps-1 text-[17px]  weight-[500]">
                      {info.callStatus}
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-[15px] md:text-[18px] text-gray-400 md:font-semibold pt-4">
                {info.date}
              </li>
            </ul>
          ))}
        </InfoCard>
        <InfoCard
          title="Recent Messages"
          titleRight={
            <p className="text-blue-400">
              <Link to="/messages">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0 "
        >
          {RecentMessages.map((info, i) => (
            <ul key={i} className="flex md:p-2 py-1 liborder items-center ">
              <GoDotFill className="md:hidden mt-2 text-[#007AFF]" />
              <li className="flex-none w-12 md:w-14 pt-2">
                <img
                  className="w-10 h-10 rounded-full md:m-auto"
                  src={info.img}
                  alt
                />
              </li>
              <li className="p-1 flex-1 w-64">
                <div>
                  <p className="font-semibold text-[16px] md:text-[18px] lg:text-[18px] xl:text-[24px] weight-[500]">
                    {info.name}
                  </p>

                  <p className="ps-1 text-gray-400 lg:hidden xl:block text-[14px] md:text-[17px] weight-[500] ">
                    {info.msg.slice(0, 50)}..
                  </p>
                  <p className="ps-1 text-gray-400 lg:block hidden xl:hidden 2xl:hidden text-[17px] weight-[500] ">
                    {info.msg.slice(0, 20)}..
                  </p>
                </div>
              </li>
              <li className="p-1 text-[14px] md:text-[18px] text-gray-400 md:font-semibold">
                {info.time}
              </li>
            </ul>
          ))}
        </InfoCard>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-1  lg:grid-cols-2 md:gap-4 gap-0 mb-2 md:mb-8  mx-4 mx:m-0">
        <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0">
          <h5 className="text-[16px] text-gray-400">
            App Usage : Daily Average
          </h5>
          <div className="flex justify-between">
            <h2 className="text-[20px]">7h 24m</h2>
            <p className="text-gray-400">18% from last week</p>
          </div>
          <div>
            <img src={graph} alt="graph" />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base text-blue-500">
                Productivity & Finance
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base">10h 49m</h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base text-cyan-600">
                Other
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                8h 32m
              </h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base text-orange-700">
                Social
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                5h 44m
              </h1>
            </div>
          </div>
        </div>

        <InfoCard
          title="Recent Most Used Apps"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Apps/screentime">See All</Link>{" "}
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div className="rounded-lg p-2 bg-[#8E8E93]/[0.08]">
            {MostUsedApp.map((info, i) => (
              <div
                key={i}
                className={`${
                  !info.noline === true && "border-b"
                }  border-slate-300 md:mt-2 `}
              >
                <ul key={i} className="flex mb-1 md:mb-2">
                  <li className="flex-none w-10 md:w-14  pt-[14.6px] md:pt-2 border-none">
                    <img
                      className="w-6 h-6 md:h-10 md:w-10 ms-2 md:ms-0 md:m-auto "
                      src={info.img}
                      alt="logo"
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 text-lg md:text-xl mt-2 text-gray-900 border-none">
                    <div>{info.name}</div>
                  </li>
                  <li className="p-1 text-[#172A6E] flex text-[16px] md:text-[18px]  font-medium md:font-semibold pt-4 border-none">
                    {info.time}&nbsp;
                    <span className="mt-[2px] md:mt-[4px]">
                      <img className="w-5 h-5  " src={drive} alt="logo" />
                    </span>
                  </li>
                </ul>
                <div className="w-full  rounded-full h-1.5 mb-2  mx-2">
                  <div
                    className="bg-gray-300 h-1.5 rounded-full "
                    style={{ width: info.bar }}
                  />
                </div>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 gap-0 mb-8 mx-4 md:mx-0">
        <InfoCard
          title="Recent Alert & Notifications"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Alert&Notification/AllAllerts">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentAlert.map((info, i) => (
              <div
                key={i}
                className={`${
                  info.noline === true ? "" : " liborder"
                }  border-slate-300 mt-2`}
              >
                <ul key={i} className="flex items-center">
                  <li className="flex-none  w-5 md:w-6   border-none">
                    <img
                      className="size-4 md:size-5"
                      src={info.img}
                      alt="logo"
                    />
                  </li>
                  <li className="md:p-1  flex-1 w-64 text-[17px] md:text-xl  text-gray-900 border-none">
                    <div>{info.name.slice(0, 20)}</div>
                  </li>
                  <li className="md:p-1 text-gray-400  font-medium md:font-semibold mt-2 text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Recent KeyLogger"
          titleRight={
            <p className="text-blue-400">
              <Link to="/KeyLogger">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentKeylogger.map((info, i) => (
              <div
                key={i}
                className={`${
                  info.noline === true ? "" : " liborder"
                }  border-slate-300 mt-2`}
              >
                <ul key={i} className="flex items-center">
                  <li className="flex-none w-5 md:w-6  border-none">
                    <img
                      className="size-4 md:size-5"
                      src={info.img}
                      alt="logo"
                    />
                  </li>
                  <li className="md:p-1 flex-1 w-64 text-[17px] md:text-xl  text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="md:p-1 mt-2  text-gray-400 font-medium md:font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          title="Recent Browser Histroy"
          titleRight={
            <p className="text-blue-400">
              <Link to="/Browser/browserhistory">See All</Link>
            </p>
          }
          className="mb-5 md:mb-0"
        >
          <div>
            {RecentBrowserHistory.map((info, i) => (
              <div
                key={i}
                className={`${
                  info.noline === true ? "" : " liborder"
                }  border-slate-300 mt-2`}
              >
                <ul key={i} className="flex items-center">
                  <li className="flex-none w-5 md:w-6  border-none">
                    <img
                      className="size-4 md:size-5 "
                      src={info.img}
                      alt="logo"
                    />
                  </li>
                  <li className="md:p-1 flex-1 w-64 text-[17px] md:text-xl text-gray-900 border-none">
                    <div>{info.name.slice(0, 25)}</div>
                  </li>
                  <li className="md:p-1 mt-2  text-gray-400 font-medium md:font-semibold text-sm border-none">
                    {info.time}
                  </li>
                </ul>

                <p className="text-sm pb-2 text-gray-400">{info.des}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
      <div className="flex justify-center mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <div className="hidden md:block">
              <button
                type="button"
                className=" text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-lg px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
              >
                View More
                <MdKeyboardDoubleArrowDown size={22} />
              </button>
            </div>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
};

export default Dashboard;
