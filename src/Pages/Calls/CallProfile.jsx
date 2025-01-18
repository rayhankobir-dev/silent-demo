import { MdKeyboardDoubleArrowDown, MdPhoneCallback } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoIosMailOpen } from "react-icons/io";
import { BsPersonAdd } from "react-icons/bs";
import { IoMicOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assets/images/delete.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assets/images/Header/arrow.png";
import Oval from "../../assets/images/profile/Oval.png";
import NewAlert from "../../components/NewAlert";

const CallProfile = () => {
  const moveBacks = useMoveBack();

  return (
    <Modal>
      <div className="mx-0">
        <div className="flex mt-16 md:flex-row md:hidden justify-between  items-start  md:items-center mx-2 md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[16px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Call History
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0 ">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <BsPersonAdd
                  className="text-slate-900  cursor-pointer"
                  size={22}
                />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
          </div>
        </div>
        <NewAlert />
        {/* second column */}
        <div className="">
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
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosMailOpen className="text-gray-400" />
                    </p>
                    <p className="ps-1 text-base">hewiegamage@gmail.com</p>
                  </div>
                </div>
              </li>
              {/* <li className="p-1 w-20 text-gray-400 font-semibold pt-4 border-none">
                <div className="flex gap-2 mt-6 ">
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <BsPersonAdd
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li> */}
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:18:27</p>
                  <Modal.Toggle toggleName="Update">
                    <div className="">
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div className="">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:00:00</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:03:04</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">01:20:34</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:0:20</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:00:34</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:3:12</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
                <div className="flex gap-2 mt-2">
                  <p className="ps-1">00:00:00</p>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <IoMicOutline
                        className="text-slate-900 cursor-pointer"
                        size={25}
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div>
                      <img className="h-6 cursor-pointer" src={Delete} alt />
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
        </div>
      </div>
      <Modal.Window windowName="Update">
        <Upgrade />
      </Modal.Window>
    </Modal>
  );
};

export default CallProfile;
