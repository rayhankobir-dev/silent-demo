import "./Notes.css";
import "../../components/BrowserHead/BrowserHead.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import delet from "../../assets/images/delete.png";
import man from "../../assets/images/edit button.png";
import Card from "../../UI/Card";

import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import CallsHead from "../../components/Calls/CallsHead";
import Button from "../../components/Shared/Button";
import { Link } from "react-router-dom";

function Messages() {
  const msgData = [
    {
      name: "Housewarming party",
      text: "We are going to hold a rally on Saturday. Items to prepare. lemonade dispenserPicnic table clothExtra outdoor lights,e",
      icon: true,
      time: "Monday",
    },
    {
      name: "Hawaii",
      text: "Things to bring, I am lonely and I amm looking for compa...",
      time: "Monday",
    },
    {
      name: "Bike Wish List",
      text: "Little brother, I am lonely and I amm looking for compa...",
      time: "19/05/2024",
    },
    {
      name: "2-Feb Transaction",
      text: "200 - Ikea, 110 - Photography, 29 - WorkEx ",
      time: "19/05/2024",
    },
    {
      name: "Home renovation project",
      text: "Project timeline: 4 months",
      icon: true,
      time: "18/05/2024",
    },
    {
      name: "Things to bring",
      text: "Things to bring: Beach towels Snorkeling gear Bating s...",

      time: "14/05/2024",
    },
    {
      name: "Landscaping",
      text: "#Trees #Gardening",

      time: "13/05/2024",
    },
    {
      name: "Monday Morning Meeting",
      text: "#Housing ",

      time: "01/05/2024",
    },
  ];
  return (
    <Card>
      {/* NOTES HEADER */}

      <CallsHead heading="Notes" placeholder="Search Notes" />
      <hr className="h-px md:hidden   bg-gray-200 border-0 "></hr>

      {/* " <LocationHead data={headerData} /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 md:rounded-lg md:border md:mx-4  border-gray-200 md:mt-10">
        <div className="">
          <p className="py-4 ps-3 text-lg font-bold border-b-2 hidden md:block">
            Recent Notes
          </p>
          <p className="py-2  ps-3 font-semibold border-b-2 md:hidden text-black/50">
            Recent Notes
          </p>
          <div className="overflow-y-scroll  h-[calc(100%-8rem)] no-scrollbar">
            <Link to="/notesprofile">
              <div className=" bg-gray-100 md:hidden flex py-4 border-b-2 cursor-pointer justify-between md:px-4">
                <div className="flex align-middle flex-col px-3 w-4/5">
                  <h3 className="font-semibold text-xl ">
                    Mode of Transportation
                  </h3>
                  <p className="font-semibold text-black/50">
                    We are going to hold a rally on Satu...
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                    9:41 PM
                  </p>
                </div>
              </div>
            </Link>
            <div className="hidden md:block ">
              <div className=" bg-gray-100 flex py-4 border-b-2 cursor-pointer justify-between md:px-4">
                <div className="flex align-middle flex-col px-3 w-4/5">
                  <h3 className="font-semibold text-xl ">
                    Mode of Transportation
                  </h3>

                  <p className="font-semibold text-black/50 mx-1">
                    We are going to hold a rally on Saturday...
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                    9:41 PM
                  </p>
                </div>
              </div>
            </div>
            {msgData.map((msg, index) => {
              return (
                <Modal key={index}>
                  <Modal.Toggle toggleName="Update">
                    <div className="flex py-4 border-b-2 cursor-pointer justify-between md:px-4 ">
                      <div className="flex align-middle flex-col px-3 w-4/5">
                        <h3 className="font-semibold text-xl ">{msg.name}</h3>

                        <div className="flex ">
                          {msg.icon === true && (
                            <span className="w-2 h-2 bg-[#007AFF] md:hidden rounded-full 1  mt-2"></span>
                          )}

                          <p className="md:hidden font-semibold mx-1 text-black/50">
                            {msg.text.slice(0, 30)}..
                          </p>
                        </div>

                        <div className="flex ">
                          {msg.icon === true && (
                            <span className="w-2 h-2 bg-[#007AFF] hidden md:block rounded-full 1  mt-2"></span>
                          )}

                          <p className="hidden md:block text-[17px] font-semibold text-black/50 mx-1">
                            {msg.text.slice(0, 50)}..
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500 text-base text-end mt-4 me-2 font-semibold ">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              );
            })}
          </div>
        </div>

        <div className="text-lg border-l font-bold p-0  hidden md:block">
          <Modal>
            <ul className="flex p-2 ">
              <li className="p-1 flex-1 w-30 font-semibold border-none">
                <h3 className="font-bold text-2xl text-nowrap ">
                  Mode Of Transportation
                </h3>
                <p className=" text-[17px] text-black/50 text-nowrap">
                  Created:Yesterday 8:23 AM
                </p>
              </li>
              <li className="p-1 w-20 text-gray-400 font-semibold pt-4 border-none">
                <div className="flex gap-4">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img
                        className=" h-6  m-auto cursor-pointer"
                        src={man}
                        alt
                      />
                    </div>
                  </Modal.Toggle>
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={delet} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
          <hr className="h-px  bg-gray-200 border-0 "></hr>
          <div>
            <div className="text-center mt-4 text-[#9C9CA3] text-[15px]">
              Last Edit: Yesterday 09:41 AM
            </div>
            <div className="px-2 mt-3">
              <div className=" ">
                <div className="text-black     rounded-xl w-56 px-4 font-bold text-2xl text-nowrap">
                  Mode Of Transportation
                </div>
                <div className="text-black   rounded-xl px-4 font-semibold text-lg ">
                  We are going to hold a rally on Saturday.
                  <br /> Items to prepare:
                  <br />
                  lemonade dispenserPicnic table clothExtra outdoor lights,
                  elastic
                  <br /> balls and heavy toys, large refrigerators for
                  drinks,loudspeakers
                  <br />
                  for music
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  Items to prepare
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  1.The Ulrick family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  2. The Tilmon family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  3.o&apos;Malley
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  4. Swanson Family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  5. Lee&apos;s Family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  6. Shaw FamilyThe
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  7 Dean family
                </div>
                <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
                  8. The Roberts
                </div>

                <div className="text-black     rounded-xl w-56 px-4 font-bold text-xl text-nowrap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-semibold px-[32px]  py-[10px] text-[#101828] text-center">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </Card>
  );
}

export default Messages;
