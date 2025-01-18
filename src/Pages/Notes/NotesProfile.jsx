/* eslint-disable react/no-unescaped-entities */
import "./Notes.css";
import "../../components/BrowserHead/BrowserHead.css";

import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import { useMoveBack } from "../../hooks/useMoveBack";
import Delete from "../../assets/images/delete.png";
import moveBack from "../../assets/images/Header/arrow.png";
import { BiSolidEdit } from "react-icons/bi";
import NewAlert from "../../components/NewAlert";

const NotesProfile = () => {
  const moveBacks = useMoveBack();
  return (
    <>
      <Modal>
        <div className="flex md:flex-row pt-2 md:hidden justify-between  items-start  md:items-center mx-2 md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="h-6" />
            </div>
            <span className="text-[16px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Notes
            </span>
          </div>
          <div className="item-two flex flex-row items-center md:mt-0 ">
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <BiSolidEdit
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
        <div className=" ">
          <div className="border-y py-4">
            <p className="text-black   px-4  w-56  font-bold text-2xl text-nowrap">
              Mode Of Transportation
            </p>
            <p className="text-black/50 font-medium px-4">
              Created : Yesterday 8:23 AM
            </p>
          </div>
          <div className="text-center py-3">
            <p className="text-black/50 font-semibold ">
              Last Edit : Yesterday 9:41 PM
            </p>
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
            We are going to hold a rally on Saturday.
            <br /> Items to prepare:
            <br />
            lemonade dispenserPicnic table clothExtra <br /> outdoor
            lights,elastic
            <br /> balls and heavy toys,
            <br /> large refrigerators for drinks, loudspeakers <br />
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
            3.o'Malley
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
            4. Swanson Family
          </div>
          <div className="text-black   rounded-xl w-56 px-4 font-semibold text-lg text-nowrap">
            5. Lee's Family
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
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </>
  );
};

export default NotesProfile;
