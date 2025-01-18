/* eslint-disable react/prop-types */
import "./AllFilesHead.css";
import { useMoveBack } from "../../hooks/useMoveBack";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import Delete from "../../assets/images/delete.png";

import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import filterIcon from "../../assets/images/Header/Filter.png";
import Button from "../Shared/Button";
import Search from "../Shared/Search";
import exportIcon from "../../assets/images/Header/Export.png";

const AllFilesHead = (props) => {
  const exportKeyLogger = () => {
    //Logic for export the keylogger here
  };

  const filterKeyLooger = () => {
    //Logic for filter the keyLogger here
  };
  const handleSearch = () => {
    //Export Logic here
  };
  const moveBacks = useMoveBack();
  return (
    <Modal>
      <div className="flex md:flex-row pt-2 md:pt-0 justify-between md:mb-8 items-start  md:items-center mx-2 md:mx-0">
        <div className="item-one flex flex-row items-center ">
          <div
            className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
            onClick={moveBacks}
          >
            {/* <img src={moveBack}  /> */}
            <MdKeyboardBackspace className="h-6 w-6" />
          </div>
          <span className="text-[16px] xl:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
            {props.headding}
          </span>
        </div>
        <div className="item-two flex flex-row items-center md:mt-0 ">
          <div className="me-3 mx-auto md:w-80 hidden md:block">
            <Modal>
              <Modal.Toggle toggleName="searchcall">
                <Search
                  onClick={handleSearch}
                  placeholder="Search"
                  className="shadow-[0px_0px_56px_0px_#00000014]"
                />
              </Modal.Toggle>
              <Modal.Window windowName="searchcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 md:hidden ">
            <Modal>
              <Modal.Toggle toggleName="searchcall">
                <Button
                  onClick={handleSearch}
                  className="text-[18px] font-medium px-[6px]  py-[6px] text-[#101828] text-center"
                >
                  <IoIosSearch />
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="searchcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 hidden md:block">
            <Modal>
              <Modal.Toggle toggleName="exportcall">
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
                >
                  <img src={Delete} alt="export" className="pe-2 h-6 " />
                  Delete
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="exportcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 hidden md:block">
            <Modal>
              <Modal.Toggle toggleName="exportcall">
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
                >
                  <img src={exportIcon} alt="export" className="pe-2 h-6 " />
                  Export
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="exportcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>

          <div className="me-3 md:hidden ">
            <Modal>
              <Modal.Toggle toggleName="searchcall">
                <Button
                  onClick={exportKeyLogger}
                  className="md:text-[14px] xl:text-[18px] font-medium px-[6px] shadow-[0px_0px_56px_0px_#00000014] py-[6px] text-[#101828] text-center"
                >
                  <img src={Delete} alt="export" className="h-[18px]" />
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="searchcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="me-3 md:hidden ">
            <Modal>
              <Modal.Toggle toggleName="searchcall">
                <Button
                  onClick={exportKeyLogger}
                  className="md:text-[14px] xl:text-[18px] font-medium px-[6px] shadow-[0px_0px_56px_0px_#00000014] py-[6px] text-[#101828] text-center"
                >
                  <img src={exportIcon} alt="export" className="h-[18px]" />
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="searchcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>

          <div className="me-3 hidden md:block">
            <Modal>
              <Modal.Toggle toggleName="filtercall">
                <Button
                  onClick={filterKeyLooger}
                  className=" md:text-[14px] xl:text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]    py-[10px] text-[#101828] text-center"
                >
                  <img src={filterIcon} alt="filter" className="pe-2 h-6 " />
                  Filter
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="filtercall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className=" md:hidden ">
            <Modal>
              <Modal.Toggle toggleName="searchcall">
                <Button
                  onClick={filterKeyLooger}
                  className="text-[18px] font-medium px-[6px] shadow-[0px_0px_56px_0px_#00000014] py-[6px] text-[#101828] text-center"
                >
                  <img src={filterIcon} alt="delete" className="h-[18px]" />
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="searchcall">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AllFilesHead;
