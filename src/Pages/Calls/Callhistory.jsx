import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import CallsHead from "../../components/Calls/CallsHead";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosMailOpen } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assets/images/delete.png";
import block from "../../assets/images/calls/block.png";
import Oval1 from "../../assets/images/profile/Oval-1.png";
import Oval2 from "../../assets/images/profile/Oval-2.png";
import Oval3 from "../../assets/images/profile/Oval-3.png";
import Oval4 from "../../assets/images/profile/Oval-4.png";
import Oval5 from "../../assets/images/profile/Oval-5.png";
import Oval6 from "../../assets/images/profile/Oval-6.png";
import Oval7 from "../../assets/images/profile/Oval-7.png";
import Oval from "../../assets/images/profile/Oval.png";
import dp1 from "../../assets/images/profile/dp (1).png";
import dp2 from "../../assets/images/profile/dp (2).png";
import dp3 from "../../assets/images/profile/dp (3).png";
import dp4 from "../../assets/images/profile/dp (4).png";
import dp5 from "../../assets/images/profile/dp (5).png";

import { Link } from "react-router-dom";

const Callhistory = () => {
  const callhistoryData = [
    {
      img: Oval1,
      name: "Tommi Osayande",
      callIcon: <MdPhoneCallback />,
      callStatus: "incoming",
      date: "21/05/2024",
    },
    {
      img: Oval3,
      name: "Morty Zumalt",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "21/05/2024",
    },
    {
      img: Oval2,
      name: "Sander Margotta",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "21/05/2024",
    },

    {
      img: Oval4,
      name: "Ramona Beabrun",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "20/05/2024",
    },
    {
      img: Oval5,
      name: "Garfinkel Groberg",
      callIcon: <MdPhoneCallback />,
      callStatus: "incoming",
      date: "20/05/2024",
    },
    {
      img: Oval6,
      name: "Ellie Thaemert",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "20/05/2024",
    },
    {
      img: Oval7,
      name: "Larina Vanderveen",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "20/05/2024",
    },
    {
      img: Oval2,
      name: "Elissa Bradfute",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "20/05/2024",
    },
    {
      img: dp1,
      name: "Gaston Ghia",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "outgoing",
      date: "20/05/2024",
    },
    {
      img: dp2,
      name: "Venus Bramall",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "19/05/2024",
    },
    {
      img: dp3,
      name: "Bronson Rhynes",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "incoming",
      date: "19/05/2024",
    },
    {
      img: dp4,
      name: "VBary Normandin",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "missed",
      date: "19/05/2024",
    },
    {
      img: dp5,
      name: "Eddy Herwing",
      callIcon: <HiPhoneMissedCall />,
      callStatus: "outgoing",
      date: "19/05/2024",
    },
  ];

  return (
    <div>
      <CallsHead
        heading="Calls history"
        placeholder="Search by Name or Phone Number"
      />
      <div className="md:border md:border-t md:rounded-xl md:my-8  shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* first column */}
          <div className="border-r hidden md:block">
            {/* head */}
            <div className="text-lg font-bold md:p-4">
              <p>Recent Calls</p>
            </div>
            <hr />
            {/* body */}
            <div className="overflow-y-scroll h-96 no-scrollbar">
              <ul className="flex p-2 liborder cursor-pointer bg-gray-100">
                <li className="flex-none w-14 pt-2">
                  <img
                    className="w-10 h-10 rounded-full m-auto"
                    src={Oval}
                    alt
                  />
                </li>
                <li className="p-1 flex-1 w-64 font-semibold">
                  <div>
                    Hewie Gamage
                    <div className="text-gray-400 flex">
                      <p className="my-auto ">
                        <VscCallOutgoing />
                      </p>
                      <p className="ps-1">outgoing</p>
                    </div>
                  </div>
                </li>
                <li className="p-1 text-gray-400 font-semibold pt-4">
                  21/05/2024
                </li>
              </ul>
              {callhistoryData.map((info, i) => (
                <Modal key={i}>
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder cursor-pointer">
                      <li className="flex-none w-14 pt-2">
                        <img
                          className="w-10 h-10 rounded-full m-auto"
                          src={info.img}
                          alt
                        />
                      </li>
                      <li className="p-1 flex-1 w-64 font-semibold">
                        <div>
                          {info.name}
                          <div
                            className={`${
                              info.callStatus == "outgoing" && "text-gray-400"
                            } ${
                              info.callStatus == "missed" && "text-red-600"
                            } ${
                              info.callStatus == "incoming" && "text-green-600"
                            } flex font-normal`}
                          >
                            <p className="my-auto ">{info.callIcon}</p>
                            <p className="ps-1">{info.callStatus}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 text-gray-400 font-semibold pt-4">
                        {info.date}
                      </li>
                    </ul>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              ))}
            </div>
          </div>
          {/* first column for mobile */}
          <div className="border-r block md:hidden">
            {/* head */}
            <div className="text-lg font-bold p-2 ">
              <p>Recent Calls</p>
            </div>
            <hr />
            {/* body */}
            <div className="overflow-y-scroll h-4/5 no-scrollbar">
              <Link to="/call/callprofile">
                {" "}
                <ul className="flex p-2 liborder cursor-pointer bg-gray-100 ">
                  <li className="flex-none w-14 pt-2">
                    <img
                      className="w-10 h-10 rounded-full m-auto"
                      src={Oval}
                      alt
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold">
                    <div>
                      Hewie Gamage
                      <div className="text-gray-400 flex">
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">outgoing</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-4">
                    21/05/2024
                  </li>
                </ul>
              </Link>
              {callhistoryData.map((info, i) => (
                <Modal key={i}>
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder cursor-pointer">
                      <li className="flex-none w-14 pt-2">
                        <img
                          className="w-10 h-10 rounded-full m-auto"
                          src={info.img}
                          alt
                        />
                      </li>
                      <li className="p-1 flex-1 w-64 font-semibold">
                        <div>
                          {info.name}
                          <div
                            className={`${
                              info.callStatus == "outgoing" && "text-gray-400"
                            } ${
                              info.callStatus == "missed" && "text-red-600"
                            } ${
                              info.callStatus == "incoming" && "text-green-600"
                            } flex font-normal`}
                          >
                            <p className="my-auto ">{info.callIcon}</p>
                            <p className="ps-1">{info.callStatus}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 text-gray-400 font-semibold pt-4">
                        {info.date}
                      </li>
                    </ul>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              ))}
            </div>
          </div>

          {/* second column */}
          <div className="border-r hidden md:block">
            <Modal>
              {/* head */}
              <div className="text-lg font-bold p-0 md:p-2 ">
                <ul className="flex p-2 ">
                  <li className="flex-none w-20 pt-2 border-none ">
                    <img
                      className="w-20 h-20 rounded-full m-auto"
                      src={Oval}
                      alt="img"
                    />
                  </li>
                  <li className="p-1 flex-1 w-30 font-semibold border-none">
                    <div>
                      <p className="text-lg">Hewie Gamage</p>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">+1 2905442387</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">hewiegamage@gmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 w-20 text-gray-400 font-semibold pt-4 border-none">
                    <div className="flex gap-4 mt-6 ">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className=" h-6  m-auto cursor-pointer"
                            src={block}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
              </div>
              <hr />
              {/* body */}
              <div className="overflow-y-scroll h-96 no-scrollbar">
                <p className="border-b text-gray-400  p-2">All Calls</p>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-green-600 flex font-bold`}>
                        <p className="my-auto ">
                          <MdPhoneCallback />
                        </p>
                        <p className="ps-1">Incoming</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-red-600 flex font-bold`}>
                        <p className="my-auto ">
                          <HiPhoneMissedCall />
                        </p>
                        <p className="ps-1">Missed</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:57 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:00:00</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-600 flex font-bold`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">outgoing</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:01 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:03:04</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>

                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-green-600 flex font-bold`}>
                        <p className="my-auto ">
                          <MdPhoneCallback />
                        </p>
                        <p className="ps-1">Incoming</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 1:40 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">01:20:34</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-green-600 flex font-bold`}>
                        <p className="my-auto ">
                          <MdPhoneCallback />
                        </p>
                        <p className="ps-1">Incoming</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 12:31 PM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:0:20</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-600 flex font-bold`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">outgoing</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 11:46 PM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:00:34</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-green-600 flex font-bold`}>
                        <p className="my-auto ">
                          <MdPhoneCallback />
                        </p>
                        <p className="ps-1">Incoming</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 10:12 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:3:12</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-red-600 flex font-bold`}>
                        <p className="my-auto ">
                          <HiPhoneMissedCall />
                        </p>
                        <p className="ps-1">Missed</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 10:11 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1">00:00:00</p>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <IoMicOutline
                            className="text-slate-900 cursor-pointer"
                            size={25}
                          />
                        </div>
                      </Modal.Toggle>
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className="h-6 cursor-pointer"
                            src={Delete}
                            alt
                          />
                        </div>
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul>
                <div className="flex p-2 justify-between">
                  <div aria-label="Page navigation example">
                    <div className="hidden md:block">
                      <ul className="inline-flex -space-x-px text-base h-10">
                        <Modal.Toggle toggleName="Update">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                            >
                              <FaArrowLeft />
                            </a>
                          </li>
                        </Modal.Toggle>
                        <Modal.Toggle toggleName="Update">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                            >
                              1
                            </a>
                          </li>
                        </Modal.Toggle>
                        <Modal.Toggle toggleName="Update">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                            >
                              ...
                            </a>
                          </li>
                        </Modal.Toggle>
                        <Modal.Toggle toggleName="Update">
                          <li>
                            <a
                              href="#"
                              aria-current="page"
                              className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                            >
                              10
                            </a>
                          </li>
                        </Modal.Toggle>
                        <Modal.Toggle toggleName="Update">
                          <li>
                            <a
                              href="#"
                              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                            >
                              <FaArrowRight />
                            </a>
                          </li>
                        </Modal.Toggle>
                      </ul>
                    </div>
                  </div>

                  <div className="m-auto md:m-0">
                    <Modal.Toggle toggleName="Update">
                      <button
                        type="button"
                        className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                      >
                        <MdKeyboardDoubleArrowDown size={30} />
                        View More
                      </button>
                    </Modal.Toggle>
                  </div>
                </div>
              </div>
              <Modal.Window windowName="Update">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callhistory;
