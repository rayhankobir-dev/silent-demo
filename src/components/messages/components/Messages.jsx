/* eslint-disable no-unused-vars */
import Tabs from "./Tabs";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import rr from "../../../assets/images/rr.png";
import Oval from "../../../assets/images/Oval.png";
import imgg from "../../../assets/images/imgg.png";

import delet from "../../../assets/images/delete.png";
import Modal from "../../Shared/Modal";

import man from "../../../assets/images/man.png";
import Upgrade from "../../Shared/Upgrade";
import Convo from "./Convo";

function Messages() {
  const [modal, setModal] = useState(false);
  const [isConvo, setIsConvo] = useState(false);

  const msgData = [
    {
      name: "Riyah Zeik",
      text: "Little brother, I am lonely and I am looking for compa...",
      pic: imgg,
      active: true,
      date: "9:41 AM",
    },

    {
      name: "13654825",
      text: "The apple id code is 125544. Do not share with anyo...",
      pic: Oval,
      date: "Monday",
    },
    {
      name: "(302) 555-0107",
      text: "You asekd Didi costumer service on January 04, 2...",
      pic: Oval,
      date: "Monday",
    },
    {
      name: "(316) 555-0117",
      text: "Your onlyfans code is 815180 Dont share @onylfans......",
      pic: rr,
      date: "10/12/2024",
    },
    {
      name: "(702) 555-1122",
      text: "I am fine, thank you",
      pic: Oval,
      date: "10/12/2024",
    },
    {
      name: "(319) 555-0115",
      text: "254242 SMS login verification code, valid for 5...",
      pic: Oval,
      date: "10/12/2024",
    },
  ];

  const convoHandler = () => {
    setIsConvo(!isConvo);
  };
  return (
    <>
      <div className="lg:hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg lg:border-2 border-t lg:mx-0 mx-0  border-gray-200 lg:mt-10 mt-0">
          {!isConvo && (
            <div className="">
              <p className="py-3 ps-3 text-xl font-semibold lg:border-b-2 border-0 ">
                Recent Messages
              </p>
              {msgData.map((msg, index) => {
                return <Tabs msg={msg} key={index} onConvo={convoHandler} />;
              })}
            </div>
          )}
          {isConvo && (
            <div className="lg:border-l-2 border-0">
              <div className="border-b flex py-3 ps-3 align-middle  ">
                <img className="h-10 w-10 rounded-full mt-2 " src={imgg}></img>
                <div className="ml-3">
                  <h3 className="font-bold text-xl text-nowrap ">Riyah Zoik</h3>
                  <p className="text-slate-500 text-nowrap flex">
                    <FaPhoneAlt className="w-3 h-3 mt-1.5 mr-1 text-slate-400" />{" "}
                    (480) 555-0109
                  </p>
                </div>
                <div className="flex justify-end align-middle lg:ml-52 ml-32 mt-2">
                  <Modal>
                    <Modal.Toggle toggleName="Update">
                      <img
                        src={man}
                        className="h-8 w-8 mr-3 cursor-pointer border rounded-lg p-2 shadow-[0px_0px_56px_0px_#00000014]   "
                        onClick={() => setModal(true)}
                      ></img>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <img
                        src={delet}
                        className="h-8 w-8 mr-3 cursor-pointer border rounded-lg p-2 shadow-[0px_0px_56px_0px_#00000014]"
                        onClick={() => setModal(true)}
                      ></img>
                    </Modal.Toggle>
                    <Modal.Window windowName="Update">
                      <Upgrade />
                    </Modal.Window>
                  </Modal>
                </div>
              </div>
              <Convo />
            </div>
          )}
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg lg:border-2 border-t lg:mx-0 mx-0  border-gray-200 lg:mt-10 mt-2">
          {
            <div className="">
              <p className="py-4 ps-3 font-semibold lg:border-b-2 border-0 ">
                Recent Messages
              </p>
              {msgData.map((msg, index) => {
                return <Tabs msg={msg} key={index} />;
              })}
            </div>
          }
          {
            <div className="lg:border-l-2 relative border-0">
              <div className="border-b-2 flex py-3 ps-3 align-middle  ">
                <img className="h-10 w-10 rounded-full mt-2 " src={imgg} />
                <div className="ml-3">
                  <h3 className="font-bold text-xl text-nowrap ">Riyah Zoik</h3>
                  <p className="text-slate-500 text-nowrap flex">
                    <FaPhoneAlt className="w-3 h-3 mt-1.5 mr-1 text-slate-400" />{" "}
                    (480) 555-0109
                  </p>
                </div>
                <div className="flex justify-end align-middle  absolute   right-3 top-5">
                  <Modal>
                    <Modal.Toggle toggleName="Update">
                      <img
                        src={man}
                        className="h-10 w-10 mr-1 cursor-pointer lg:border-none border rounded-lg p-2 "
                        onClick={() => setModal(true)}
                      ></img>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <img
                        src={delet}
                        className="h-10 w-10   mr-2 cursor-pointer lg:border-none border rounded-lg p-2 "
                        onClick={() => setModal(true)}
                      ></img>
                    </Modal.Toggle>
                    <Modal.Window windowName="Update">
                      <Upgrade />
                    </Modal.Window>
                  </Modal>
                </div>
              </div>
              <Convo />
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default Messages;
