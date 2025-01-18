/* eslint-disable react/no-unescaped-entities */
import { MdCall, MdKeyboardDoubleArrowDown } from "react-icons/md";
import callicon from "../../assets/images/calls/call-fill.png";
import { BsPersonAdd } from "react-icons/bs";
import { RiUserForbidLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";
import msg from "../../assets/images/calls/Contacts/Frame.png";
import video from "../../assets/images/calls/Contacts/Frame-1.png";
import mail from "../../assets/images/calls/Contacts/Frame-2.png";
import doller from "../../assets/images/calls/Contacts/Frame-3.png";
import callpng from "../../assets/images/calls/Contacts/Vector.png";
import mailicon from "../../assets/images/calls/Contacts/mail.png";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assets/images/delete.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assets/images/Header/arrow.png";
import dp5 from "../../assets/images/profile/dp (5).png";

import notes from "../../assets/images/calls/Contacts/notes.png";
import NewAlert from "../../components/NewAlert";
import { IoIosMailOpen } from "react-icons/io";

export function BlockedContactProfile() {
  const moveBacks = useMoveBack();

  return (
    <>
      <Modal>
        <div className="flex mt-16 md:flex-row md:hidden justify-between  items-start  md:items-center mx-2 md:mx-0 ">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[16px] md:text-[20px]   text-black/50 md:ps-3 ps-1 font-[600]">
              Blocked Contacts
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0 mt-[2px] ">
            <Modal.Toggle toggleName="Update">
              <div className=" md:hidden ">
                <button
                  type="button"
                  className="text-white gap-2 bg-red-500  border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                >
                  <RiUserForbidLine />
                  Unblock
                </button>
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

        <div className="border-t md:border-r ">
          {/* head */}
          <div className="text-lg font-bold p-2 ">
            <ul className="flex p-2  ">
              <li className="flex-none w-20 pt-2 border-none">
                <img
                  className="w-20 h-20 rounded-full m-auto"
                  src={dp5}
                  alt="img"
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold border-none">
                <div>
                  <p className="text-lg">Allan Taran</p>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <MdCall />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosMailOpen className="text-gray-400" />
                    </p>
                    <p className="ps-1 text-sm">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4 border-none hidden md:block">
                <div className="flex gap-2 mt-6">
                  <Modal.Toggle toggleName="Update">
                    <BsPersonAdd
                      className="text-slate-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-6 rounded-full m-auto cursor-pointer"
                      src={Delete}
                      alt
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          {/* body */}
          <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
            <div className="grid grid-cols-5 mx-auto p-2 gap-1 divide-x border-b overflow-x-auto">
              <div className="flex items-center   justify-center">
                <div className="flex gap-1 px-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-5  m-auto cursor-pointer"
                      src={msg}
                      alt
                    />
                  </Modal.Toggle>
                  <p className="font-medium ">Message</p>
                </div>
              </div>
              <div className="flex items-center   justify-center">
                <div className="flex gap-1 px-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-5  m-auto cursor-pointer"
                      src={callpng}
                      alt
                    />
                  </Modal.Toggle>
                  <p className="font-medium ">Call</p>
                </div>
              </div>
              <div className="flex items-center   justify-center">
                <div className="flex gap-1 ps-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-5  m-auto cursor-pointer"
                      src={video}
                      alt
                    />
                  </Modal.Toggle>
                  <p className="font-medium ">Facetime</p>
                </div>
              </div>
              <div className="flex items-center   justify-center">
                <div className="flex gap-1 px-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-5  m-auto cursor-pointer"
                      src={mail}
                      alt
                    />
                  </Modal.Toggle>
                  <p className="font-medium ">Mail</p>
                </div>
              </div>
              <div className="flex items-center   justify-center">
                <div className="flex gap-1 px-1 flex-col md:flex-row">
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-5  m-auto cursor-pointer"
                      src={doller}
                      alt
                    />
                  </Modal.Toggle>
                  <p className="font-medium ">Pay</p>
                </div>
              </div>
            </div>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mobile</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0118</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2  liborder">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">home</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 478-0112</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Email</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img className="w-4 h-4  m-auto" src={mailicon} alt />
                    </p>
                    <p className="ps-1">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Business Email</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img className="w-4 h-4  m-auto" src={mailicon} alt />
                    </p>
                    <p className="ps-1">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            {/* <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">home</p>
                      </div>
                      <div className={` flex  mb-2`}>
                        <p className="mt-1 ">
                          <img
                            className=" h-4  m-auto "
                            src={locationicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">
                          2118 Thornridge <br /> Cir,Syracuse, <br />
                          Connecticut 35624
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={liveloca2}
                        alt=""
                        className="h-52 object-cover rounded-xl w-full mx-4"
                      />
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul> */}
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Notes</p>
                  </div>
                  <div className={` flex `}>
                    <img className="w-4 h-4 mt-1" src={notes} alt />

                    <p className="ps-1">
                      We are going to hold a rally on Saturday. <br />
                      <p className="my-1">Items to prepare:</p>
                      <br />
                      lemonade dispenserPicnic table clothExtra outdoor
                      lights,elastic balls and heavy toys, large refrigerators
                      for drinks, loudspeakers for music
                      <br />
                      <p className="my-[2px]">Invitation list:</p>
                      <br />
                      1.The Ulrick family
                      <br />
                      2. The Tilmon family
                      <br />
                      3.o'Malley
                      <br />
                      4. Swanson Family
                      <br />
                      5. Lee's Family
                      <br />
                      6. Shaw FamilyThe
                      <br />
                      7 Dean family
                      <br />
                      8. The Roberts
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>

            <div className="flex p-2 justify-between">
              <div aria-label="Page navigation example">
                <div className="hidden md:block">
                  <ul className="inline-flex -space-x-px text-base h-10 ">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowLeft />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                      >
                        ...
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                      >
                        10
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                      >
                        <FaArrowRight />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="m-auto md:m-0">
                <Modal.Toggle toggleName="Update">
                  <button
                    type="button"
                    className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </Modal.Toggle>
              </div>
            </div>
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
}
const ContactProfile = () => {
  const moveBacks = useMoveBack();

  return (
    <>
      <Modal>
        <div className="flex md:flex-row md:hidden justify-between  items-start  md:items-center mt-16 mx-2 md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[16px] md:text-[20px]   text-black/50 md:ps-3 ps-1 font-[600]">
              Contacts
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0  mt-[2px]">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <BsPersonAdd
                  className="text-slate-900 cursor-pointer"
                  size={20}
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

        <div className="border-t md:border-r ">
          {/* head */}
          <div className="text-lg font-bold p-2 ">
            <ul className="flex p-2  ">
              <li className="flex-none w-20 pt-2 border-none">
                <img
                  className="w-20 h-20 rounded-full m-auto"
                  src={dp5}
                  alt="img"
                />
              </li>
              <li className="p-1 flex-1 w-64 font-semibold border-none">
                <div>
                  <p className="text-lg">Allan Taran</p>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <MdCall />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosMailOpen className="text-gray-400" />
                    </p>
                    <p className="ps-1 text-sm">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-4 border-none hidden md:block">
                <div className="flex gap-2 mt-6">
                  <Modal.Toggle toggleName="Update">
                    <BsPersonAdd
                      className="text-slate-900 cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <img
                      className=" h-6 rounded-full m-auto cursor-pointer"
                      src={Delete}
                      alt
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          {/* body */}
          <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
            <div className="grid grid-cols-5 mx-auto p-2 gap-1 divide-x border-b overflow-x-auto">
              <div className="flex items-center   justify-center">
                <Modal.Toggle toggleName="Update">
                  <div className="flex gap-1 px-2 flex-col md:flex-row cursor-pointer">
                    <img className=" h-5  m-auto " src={msg} alt />
                    <p className="font-medium ">Message</p>
                  </div>
                </Modal.Toggle>
              </div>
              <div className="flex items-center   justify-center">
                <Modal.Toggle toggleName="Update">
                  <div className="flex gap-1 px-1 flex-col md:flex-row cursor-pointer">
                    <img className=" h-5  m-auto " src={callpng} alt />
                    <p className="font-medium ">Call</p>
                  </div>
                </Modal.Toggle>
              </div>
              <div className="flex items-center   justify-center">
                <Modal.Toggle toggleName="Update">
                  <div className="flex gap-1 m-auto ps-1 flex-col md:flex-row cursor-pointer">
                    <img className=" h-5  m-auto " src={video} alt />
                    <p className="font-medium ">Facetime</p>
                  </div>
                </Modal.Toggle>
              </div>
              <div className="flex items-center   justify-center">
                <Modal.Toggle toggleName="Update">
                  <div className="flex gap-1 px-1 flex-col md:flex-row cursor-pointer">
                    <img className=" h-5  m-auto " src={mail} alt />
                    <p className="font-medium ">Mail</p>
                  </div>
                </Modal.Toggle>
              </div>
              <div className="flex items-center   justify-center">
                <Modal.Toggle toggleName="Update">
                  <div className="flex gap-1 px-1 flex-col md:flex-row cursor-pointer">
                    <img className=" h-5  m-auto " src={doller} alt />
                    <p className="font-medium ">Pay</p>
                  </div>
                </Modal.Toggle>
              </div>
            </div>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mobile</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0117</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">business</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 555-0118</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2  liborder">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">home</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img
                        className="w-4 h-4 rounded-full m-auto"
                        src={callicon}
                        alt
                      />
                    </p>
                    <p className="ps-1">(270) 478-0112</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Email</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img className="w-4 h-4  m-auto" src={mailicon} alt />
                    </p>
                    <p className="ps-1">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Business Email</p>
                  </div>
                  <div className={` flex `}>
                    <p className="my-auto ">
                      <img className="w-4 h-4  m-auto" src={mailicon} alt />
                    </p>
                    <p className="ps-1">allantran@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            {/* <ul className="flex p-2 liborder ">
                  <li className="p-1 flex-1 w-64 font-semibold ">
                    <div>
                      <div className={`text-gray-400  font-normal`}>
                        <p className="ps-1">home</p>
                      </div>
                      <div className={` flex  mb-2`}>
                        <p className="mt-1 ">
                          <img
                            className=" h-4  m-auto "
                            src={locationicon}
                            alt
                          />
                        </p>
                        <p className="ps-1">
                          2118 Thornridge <br /> Cir,Syracuse, <br />
                          Connecticut 35624
                        </p>
                      </div>
                    </div>
                    <div>
                      <img
                        src={liveloca2}
                        alt=""
                        className="h-52 object-cover rounded-xl w-full mx-4"
                      />
                    </div>
                  </li>
                  <li className="p-1 text-gray-400 font-semibold pt-2 ">
                    <div className="flex gap-4 mt-2">
                      <Modal.Toggle toggleName="Update">
                        <CgRemove
                          className="text-[#F10404] cursor-pointer"
                          size={25}
                        />
                      </Modal.Toggle>
                    </div>
                  </li>
                </ul> */}
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Notes</p>
                  </div>
                  <div className={` flex `}>
                    <img className="w-4 h-4 mt-1" src={notes} alt />

                    <p className="ps-1">
                      We are going to hold a rally on Saturday. <br />
                      <p className="my-1">Items to prepare:</p>
                      <br />
                      lemonade dispenserPicnic table clothExtra outdoor
                      lights,elastic balls and heavy toys, large refrigerators
                      for drinks, loudspeakers for music
                      <br />
                      <p className="my-[2px]">Invitation list:</p>
                      <br />
                      1.The Ulrick family
                      <br />
                      2. The Tilmon family
                      <br />
                      3.o'Malley
                      <br />
                      4. Swanson Family
                      <br />
                      5. Lee's Family
                      <br />
                      6. Shaw FamilyThe
                      <br />
                      7 Dean family
                      <br />
                      8. The Roberts
                    </p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className="flex gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <CgRemove
                      className="text-[#F10404] cursor-pointer"
                      size={25}
                    />
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
                    className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center  me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </Modal.Toggle>
              </div>
            </div>
          </div>
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default ContactProfile;
