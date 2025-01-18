import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import CallsHead from "../../components/Calls/CallsHead";
import callicon from "../../assets/images/calls/Frame.png";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosMailOpen } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assets/images/delete.png";
import unblock from "../../assets/images/calls/Menu.png";

import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assets/images/Header/arrow.png";
import Oval1 from "../../assets/images/profile/Oval-1.png";
import Oval2 from "../../assets/images/profile/Oval-2.png";
import Oval3 from "../../assets/images/profile/Oval-3.png";
import Oval5 from "../../assets/images/profile/Oval-5.png";
import Oval7 from "../../assets/images/profile/Oval-7.png";
import dp1 from "../../assets/images/profile/dpb1.png";
import dp2 from "../../assets/images/profile/dp (2).png";
import dp3 from "../../assets/images/profile/dp (3).png";
import dp4 from "../../assets/images/profile/dp (4).png";
import dp5 from "../../assets/images/profile/dp (5).png";
import dp6 from "../../assets/images/profile/Oval-6.png";
import dp7 from "../../assets/images/profile/Oval-7.png";
import NewAlert from "../../components/NewAlert";

const BlockedCalls = () => {
  const moveBacks = useMoveBack();

  const callBlockeddata = [
    {
      img: dp2,
      name: "Jeanette Minutillo",
      callIcon: callicon,
      callNo: "(308) 555-0121",
      date: "Tue, May 21, 2024",
      time: "3:57 AM",
    },
    {
      img: dp3,
      name: "Mirelle Gooch",
      callIcon: callicon,
      callNo: "(603) 555-0123",
      date: "Tue, May 21, 2024",
      time: "3:01 AM",
    },
    {
      img: dp4,
      name: "Rivi Cujas",
      callIcon: callicon,
      callNo: "(907) 555-0101",
      date: "Tue, May 21, 2024",
      time: "1:40 AM",
    },
    {
      img: dp5,
      name: "Grier Bauknight",
      callIcon: callicon,
      callNo: "(406) 555-0120",
      date: "Tue, May 21, 2024",
      time: "12:31 PM",
    },
    {
      img: dp6,
      name: "Gretel Lunford",
      callIcon: callicon,
      callNo: "(808) 555-0111",
      date: "Tue, May 21, 2024",
      time: "11:46 PM",
    },
    {
      img: dp7,
      name: "Caryl Gearin",
      callIcon: callicon,
      callNo: "(217) 555-0113",
      date: "Tue, May 21, 2024",
      time: "10:12 AM",
    },
    {
      img: Oval7,
      name: "Joe Agosto",
      callIcon: callicon,
      callNo: "(505) 555-0125",
      date: "Tue, May 21, 2024",
      time: "10:11 AM",
    },
    {
      img: Oval1,
      name: "Candie Raspa",
      callIcon: callicon,
      callNo: "(201) 555-0124",
      date: "Tue, May 21, 2024",
      time: "10:10 AM",
    },
    {
      img: Oval5,
      name: "Miguelita Connally",
      callIcon: callicon,
      callNo: "(408) 555-0103",
      date: "Tue, May 21, 2024",
      time: "10:01 AM",
    },
    {
      img: Oval2,
      name: "Reta Galea",
      callIcon: callicon,
      callNo: "(319) 555-0115",
      date: "Tue, May 21, 2024",
      time: "09:56 AM",
    },
    {
      img: Oval3,
      name: "Urbano Veer",
      callIcon: callicon,
      callNo: "(208) 555-0112",
      date: "Tue, May 21, 2024",
      time: "09:47 AM",
    },
    {
      img: Oval5,
      name: "Abagael Mcferren",
      callIcon: callicon,
      callNo: "(209) 555-0112",
      date: "Tue, May 21, 2024",
      time: "09:32 AM",
    },
  ];
  return (
    <div>
      <div className="hidden md:block">
        <CallsHead
          heading="Blocked Calls"
          placeholder="Search by Name or Phone Number"
        />
      </div>

      <div className="flex md:flex-row md:hidden justify-between mt-16 items-start  md:items-center mx-2 md:mx-0">
        <div className="item-one flex flex-row items-center ">
          <div
            className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
            onClick={moveBacks}
          >
            <img src={moveBack} alt="move-Back" className="h-6" />
          </div>
          <span className="text-[16px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
            Blocked Calls
          </span>
        </div>
        <div className="item-two flex flex-row items-center md:mt-0 mt-[2px]">
          <Modal>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 md:hidden ">
                <img
                  className=" h-[30px] mb-2  m-auto cursor-pointer"
                  src={unblock}
                  alt
                />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <NewAlert />
      <div className="md:border md:rounded-xl md:my-8 shadow ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* first column */}
          <div className="border-r hidden md:block">
            {/* head */}
            <div className="text-lg font-bold p-4">
              <p>Recent Blocked Calls</p>
            </div>
            <hr />
            {/* body */}
            <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
              <ul className="flex p-2 liborder cursor-pointer bg-gray-100">
                <li className="flex-none w-14 pt-2">
                  <img
                    className="w-10 h-10 rounded-full m-auto"
                    src={dp1}
                    alt
                  />
                </li>
                <li className="p-1 flex-1 w-64 font-semibold">
                  <div>
                    Hendrick Guice
                    <div className="text-gray-400 flex">
                      <p className="my-auto ">
                        <img className="h-4 " src={callicon} alt />
                      </p>
                      <p className="ps-1">(702) 555-0122</p>
                    </div>
                  </div>
                </li>
                <li className="p-1 text-gray-400 font-semibold pt-4 text-end">
                  Tue,May 21,2024 <br />
                  3:58 AM
                </li>
              </ul>
              {callBlockeddata.map((info, i) => (
                <Modal key={i}>
                  <Modal.Toggle toggleName="Update">
                    <ul key={i} className="flex p-2 liborder">
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
                          <div className={`text-gray-500 flex font-normal`}>
                            <img
                              src={info.callIcon}
                              alt="img"
                              className="object-contain text-gray-500 "
                            />

                            <p className="ps-1 font-semibold">{info.callNo}</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-1 text-gray-400 font-semibold pt-1 text-end">
                        {info.date} <br />
                        {info.time}
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
          <Modal>
            <div className="border-r ">
              {/* head */}
              <div className="text-lg font-bold p-2 ">
                <ul className="flex p-2  ">
                  <li className="flex-none w-20 pt-2 border-none">
                    <img
                      className="w-20 h-20 rounded-full m-auto"
                      src={dp1}
                      alt="img"
                    />
                  </li>
                  <li className="p-1 flex-1 w-64 font-semibold border-none">
                    <div>
                      <p className="text-lg">Hendrick Guice</p>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <VscCallOutgoing />
                        </p>
                        <p className="ps-1">(702) 555-0122</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1 text-base ">
                          hendrickguice@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-4 border-none md:block hidden">
                    <div className="flex gap-2 mt-6">
                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block">
                          <img
                            className=" h-8  m-auto cursor-pointer"
                            src={unblock}
                            alt
                          />
                        </div>
                      </Modal.Toggle>

                      <Modal.Toggle toggleName="Update">
                        <div className="hidden md:block mt-1">
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
              <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
                <p className="border-b text-gray-400  p-2">
                  All Blocked Calls History
                </p>
                <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:58 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>

                      <Modal.Toggle toggleName="Update">
                        <div>
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
                <ul className="flex p-2  liborder">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:57 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                <ul className="flex p-2  liborder">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 3:01 AM</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 1:40 AM</p>
                      </div>
                    </div>
                  </li>

                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 12:31 PM</p>
                      </div>
                    </div>
                  </li>

                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 11:46 PM</p>
                      </div>
                    </div>
                  </li>

                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 10:12 AM</p>
                      </div>
                    </div>
                  </li>

                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className={` flex font-bold`}>
                        <p className="my-auto ">
                          <img
                            className="w-4 h-4 rounded-full m-auto"
                            src={callicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">Blocked</p>
                      </div>
                      <div className={`text-gray-400 flex font-normal`}>
                        <p className="my-auto ">
                          <IoIosMailOpen className="text-gray-400 hidden md:block" />
                        </p>
                        <p className="ps-1">Tue, May 21, 2024 10:11 AM</p>
                      </div>
                    </div>
                  </li>

                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <p className="ps-1 md:hidden">00:18:27</p>
                      <Modal.Toggle toggleName="Update">
                        <div>
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
                      <div className="">
                        <button
                          type="button"
                          className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                        >
                          <MdKeyboardDoubleArrowDown size={30} />
                          View More
                        </button>
                      </div>
                    </Modal.Toggle>
                  </div>
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
  );
};

export default BlockedCalls;
