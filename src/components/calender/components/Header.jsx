/* eslint-disable react/prop-types */
import exportIcon from "../../../assets/images/Header/Export.png";
import Button from "../../Shared/Button";
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";
import { FaChevronDown } from "react-icons/fa";

const CallsHead = (props) => {
  const exportKeyLogger = () => {
    //Logic for export the keylogger here
  };

  const filterKeyLooger = () => {
    //Logic for filter the keyLogger here
  };

  return (
    <div className="flex md:flex-row  justify-between  items-start  md:items-center mx-2 md:mx-0 border-t lg:border-0">
      <div className="item-one flex flex-row items-center ">
        <span className="text-[15px] md:text-[20px] text-black text-semibold mt-1.5  md:text-[#000000] md:ps-3 ps-0 font-[600]">
          {props.heading}
        </span>
      </div>
      <div className="item-two flex flex-row items-center md:mt-0 mt-1 ">
        {/* <div className="me-3 mx-auto md:w-80 hidden md:block">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
            <Button
                onClick={exportKeyLogger}
                className="text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]  py-[10px] text-[#101828] text-center"
              >
                <img src={exportIcon} alt="export" className="pe-2 h-6 " />
                2024
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div> */}

        <div className="me-3 md:hidden ">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
              <div className="flex">
                <p className="font-medium text-black ">2024</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
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
                2024
                <FaChevronDown className="mt-0.5 ml-1" />
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
                Apr
                <FaChevronDown className="mt-0.5 ml-1" />
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
                Month
                <FaChevronDown className="mt-0.5 ml-1" />
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
              <div className="flex ">
                <p className="font-medium text-black ">Apr</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>

        <div className="me-4 md:block hidden ">
          <Modal>
            <Modal.Toggle toggleName="filtercall">
              <Button
                onClick={filterKeyLooger}
                className=" md:text-[14px] xl:text-[18px]  font-medium px-[18px] shadow-[0px_0px_56px_0px_#00000014]    py-[10px] text-[#101828] text-center"
              >
                <img src={exportIcon} alt="export" className="pe-2 h-6 " />
                Export
              </Button>
              {/* <p className="">2024</p> */}
            </Modal.Toggle>
            <Modal.Window windowName="filtercall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
        <div className=" md:hidden ">
          <Modal>
            <Modal.Toggle toggleName="searchcall">
              <div className="flex">
                <p className="font-medium text-black">Month</p>
                <FaChevronDown className="mt-1.5 ml-0.5 w-3 h-3" />
              </div>
            </Modal.Toggle>
            <Modal.Window windowName="searchcall">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CallsHead;
