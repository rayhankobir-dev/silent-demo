/* eslint-disable react/prop-types */
import moveBack from "../../assets/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import exportIcon from "../../assets/images/Header/Export.png";
import filterIcon from "../../assets/images/Header/Filter.png";
import Search from "../Shared/Search";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import searchIcon from "../../assets/images/magnify.png";
import NewAlert from "../NewAlert";

const Header = ({ heading }) => {
  const moveBacks = useMoveBack();
  const exportKeyLogger = () => {
    //Logic for export the keylogger here
  };

  const filterKeyLooger = () => {
    //Logic for filter the keyLogger here
  };

  const handleSearch = () => {
    //Export Logic here
  };

  return (
    <>
      <div className="flex md:flex-row pt-2 md:pt-0 justify-between items-start   md:items-center mx-2 md:mx-0">
        <div className="item-one flex flex-row items-center ">
          <div
            className="image-wrappe sm:shadow-[0px_0px_56px_0px_#00000014]    p-[10px]  sm:border-[#D0D5DD] sm:border-[1px] cursor-pointer  rounded-[8px]"
            onClick={moveBacks}
          >
            <img src={moveBack} alt="move-Back" className="h-6 w-6" />
          </div>
          <span className="text-[15px] md:text-[20px]  text-[#000000]  opacity-[50%] sm:opacity-[100%]  sm:ps-3 ps-1 sm:font-[600] font-[500]">
            {heading}
          </span>
        </div>
        <div className="item-two flex flex-row mt-0  items-center">
          <div className="me-3 hidden xl:block">
            <Modal>
              <Modal.Toggle toggleName={`search-${heading}`}>
                <Search onClick={handleSearch} placeholder="Search" />
              </Modal.Toggle>
              <Modal.Window windowName={`search-${heading}`}>
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="sm:me-3 me-2 sm:hidden block">
            <Modal>
              <Modal.Toggle toggleName="search-keylogger">
                <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium  px-[8px]  py-[8px]    sm:px-[18px]  sm:py-[10px] text-[#101828] text-center">
                  <img
                    src={searchIcon}
                    alt="delete"
                    className="sm:pe-2 h-[20px] md:h-6"
                  />
                  <span className="hidden sm:block">Deleted</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="search-keylogger">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="sm:me-3 me-2">
            <Modal>
              <Modal.Toggle toggleName={`export-${heading}`}>
                <Button
                  onClick={exportKeyLogger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium  px-[8px]  py-[8px]    sm:px-[18px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img
                    src={exportIcon}
                    alt="export"
                    className="sm:pe-2 h-[20px] md:h-6"
                  />
                  <span className="hidden sm:block">Export</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName={`export-${heading}`}>
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="sm:me-3 me-2">
            <Modal>
              <Modal.Toggle toggleName={`filter-${heading}`}>
                <Button
                  onClick={filterKeyLooger}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium  px-[8px]  py-[8px]    sm:px-[18px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img
                    src={filterIcon}
                    alt="filter"
                    className="sm:pe-2 h-[20px] md:h-6"
                  />
                  <span className="hidden sm:block">Filter</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName={`filter-${heading}`}>
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
      <NewAlert />
    </>
  );
};

export default Header;
