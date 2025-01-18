import moveBack from "../../assets/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../Shared/Button";
import historyicon from "../../assets/images/Export/history.png";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import backupIcon from "../../../src/assets/images/Export/backup.png";
import NewAlert from "../NewAlert";

const ExportHeader = () => {
  const moveBacks = useMoveBack();

  const history = () => {
    //Logic for export the keylogger here
  };

  const backup = () => {
    //Logic for filter the keyLogger here
  };

  return (
    <>
      <div className="flex md:flex-row pt-2 md:pt-0 justify-between items-start  md:items-center mx-2 md:mx-0   border-[#DDDDDD] sm:border-[0px]">
        <div className="item-one flex flex-row items-center ">
          <div
            className="image-wrappe sm:shadow-[0px_0px_56px_0px_#00000014] p-[10px]  sm:border-[#D0D5DD] sm:border-[1px] cursor-pointer  rounded-[8px]"
            onClick={moveBacks}
          >
            <img src={moveBack} alt="move-Back" className="h-6 w-6" />
          </div>
          <span className="text-[15px] md:text-[20px]  text-[#000000]  opacity-[50%] sm:opacity-[100%]  sm:ps-3 ps-1 sm:font-[600] font-[500]">
            Data Export
          </span>
        </div>
        <div className="item-two flex flex-row mt-0">
          <div className="sm:me-3 me-2">
            <Modal>
              <Modal.Toggle toggleName="history">
                <Button
                  onClick={history}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium  px-[8px]  py-[8px]    sm:px-[18px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img
                    src={historyicon}
                    alt="export"
                    className="sm:pe-2 h-[20px] md:h-6"
                  />
                  <span className="hidden sm:block"> History</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="history">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="sm:me-3 me-2">
            <Modal>
              <Modal.Toggle toggleName="backup">
                <Button
                  onClick={backup}
                  className="text-[18px] shadow-[0px_0px_56px_0px_#00000014] font-medium  px-[8px]  py-[8px]    sm:px-[18px]  sm:py-[10px] text-[#101828] text-center"
                >
                  <img
                    src={backupIcon}
                    alt="delete"
                    className="sm:pe-2 h-[20px] md:h-6"
                  />
                  <span className="hidden sm:block">Backup</span>
                </Button>
              </Modal.Toggle>
              <Modal.Window windowName="backup">
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

export default ExportHeader;
