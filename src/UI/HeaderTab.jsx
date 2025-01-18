/* eslint-disable react/prop-types */
import "./LocationHeader.css";
import { TbFileExport } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import Upgrade from "../components/Shared/Upgrade";
import Modal from "../components/Shared/Modal";
import { IoIosArrowRoundBack, IoIosSearch } from "react-icons/io";

export default function LocationHead(props) {
  return (
    <div className="Location-nav flex justify-between align-middle ">
      <div className="Location-nav-left flex justify-center align-bottom">
        <button className="notNavLeftIcon border-2  py-0 rounded-md shadow-lg">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </button>
        <span className="font-semibold lg:text-lg text-sm lg:ml-2">
          {props.data.location}
        </span>
      </div>
      <div className="Location-nav-right flex justify-center items-center p-4">
        <span className="flex items-center LocationNavRightSearch cursor-pointer shadow-lg lg:w-80 w-10">
          <IoIosSearch className="h-7 w-7 " />
          <input
            type="text"
            className="w-full"
            placeholder={props.data.placeHolder}
          />
        </span>

        <Modal>
          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightExportIcon cursor-pointer shadow-lg">
              <TbFileExport className="h-6 w-6  font-medium" />
              <span className="responsiveTitleHide ">Export</span>
            </span>
          </Modal.Toggle>

          <Modal.Toggle toggleName="Update">
            <span className="flex items-center LocationNavRightFilterIcon cursor-pointer shadow-lg">
              <IoFilterSharp className="h-6 w-6  font-medium" />
              <span className="responsiveTitleHide">Filter</span>
            </span>
          </Modal.Toggle>
          <Modal.Window windowName="Update">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
