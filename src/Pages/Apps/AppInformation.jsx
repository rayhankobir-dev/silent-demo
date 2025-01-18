import InfoCard from "../../components/Cards/InfoCard";
import Checkbox from "../../components/Shared/Checkbox";
import graph from "../../assets/images/graph2.png";
import whatsapp from "../../assets/images/SocialApps/whatsapp.png";
import Upgrade from "../../components/Shared/Upgrade";
import Delete from "../../assets/images/delete.png";
import exportIcon from "../../assets/images/Header/Export.png";
import filterIcon from "../../assets/images/Header/Filter.png";

import { useMoveBack } from "../../hooks/useMoveBack";
import moveBack from "../../assets/images/Header/arrow.png";
import Modal from "../../components/Shared/Modal";

const AppInformation = () => {
  const moveBacks = useMoveBack();

  return (
    <div>
      <Modal>
        <div className="flex border-b md:flex-row md:hidden pt-2 md:mt-0 justify-between mb-2  items-start  md:items-center  md:mx-0">
          <div className="item-one ps-3 flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] md:p-[10px] p-[6px]  md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} alt="move-Back" className="md:h-6 h-5" />
            </div>
            <img src={whatsapp} className="h-6" alt="" />
            <span className="text-[16px] md:text-[20px]  text-black/50 md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Whatsapp
            </span>
          </div>
          <div className=" flex flex-row items-center mt-1 md:mt-0 me-2 ">
            <Modal.Toggle toggleName="Update">
              <div className="me-1  mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={Delete} alt />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={exportIcon} alt />
              </div>
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <div className="me-1 mb-2 p-1 md:hidden rounded-[8px] border">
                <img className="h-5  cursor-pointer" src={filterIcon} alt />
              </div>
            </Modal.Toggle>
          </div>
        </div>
        <InfoCard title="Control" className="mb-8 md:px-0 px-2 ">
          <div className="rounded-lg pt-1  shadow bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 px-4 font-medium liborder text-base md:text-lg  md:mt-2">
                Block App
              </li>
              <li className="md:p-1 md:mt-1 text-[#172A6E] liborder text-base md:text-lg  font-semibold text-end me-2">
                <Checkbox />
              </li>
              <li className="p-1 px-4 font-medium text-nowrap liborder text-base md:text-lg mt-1 md:mt-2">
                Hide from Home Screen
              </li>
              <li className="md:p-1 mt-1 text-[#172A6E] liborder text-base md:text-lg  font-semibold text-end me-2">
                <Checkbox />
              </li>
              <li className="p-1 px-4 font-medium text-nowrap  text-base md:text-lg mt-1 md:mt-2">
                Hide Notification
              </li>
              <li className="md:p-1  mt-1 text-[#172A6E]  text-base md:text-lg  font-semibold text-end me-2">
                <label className={` toggle-switch `}>
                  <input type="checkbox" checked />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard title="Info" className="mb-8 md:px-0 px-2">
          <div className="rounded-lg py-1 shadow bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 px-4 font-medium liborder text-base md:text-lg py-2 mt-2">
                Category
              </li>
              <li className="p-1 text-[#172A6E]  px-4 font-medium liborder text-end text-base md:text-lg py-2 mt-2">
                Social
              </li>
              <li className="p-1 px-4 font-medium liborder text-base md:text-lg py-2 mt-2">
                Age
              </li>
              <li className="p-1 text-[#172A6E]  px-4 font-medium liborder text-end text-base md:text-lg py-2 mt-2">
                12+
              </li>
              <li className="p-1 px-4 font-medium liborder text-base md:text-lg py-2  mt-2">
                Status
              </li>
              <li className="p-1 text-[#172A6E]  px-4 font-medium liborder text-end text-base md:text-lg  py-2 mt-2">
                Installed
              </li>
              <li className="p-1 px-4 font-medium  text-base md:text-lg py-2  mt-2">
                Developer
              </li>
              <li className="p-1 text-[#172A6E]  px-4 font-medium py-2  text-end text-base md:text-lg  mt-2">
                WhatsApp Inc.
              </li>
            </ul>
          </div>
        </InfoCard>
        <InfoCard title="Screen Time" className="mb-4 md:px-0 px-2">
          <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0">
            <h4 className="text-gray-400 text-lg font-normal">
              Today 13 January
            </h4>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">7m</h1>
              {/* <p className="text-gray-400">18% from last week</p> */}
            </div>
            <div>
              <img src={graph} alt="graph" />
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-blue-500">
                  Productivity & Finance
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium">
                  10h 49m
                </h1>
              </div>
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-cyan-600">
                  Other
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                  8h 32m
                </h1>
              </div>
              <div>
                <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-orange-700">
                  Social
                </h1>
                <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                  5h 44m
                </h1>
              </div>
            </div>
          </div>
        </InfoCard>
        <div className="rounded-lg shadow   bg-gray-50 md:mx-0 mx-4 my-4">
          <ul className="grid grid-cols-2 place-content-between  ">
            <li className="p-1 px-4 font-medium liborder text-base md:text-lg mt-2">
              <p className="px-1">Daily Average</p>
            </li>
            <li className="p-1 text-[#172A6E]  px-4 font-medium liborder text-end text-base md:text-lg  mt-2">
              <p className="px-1">31m</p>
            </li>
            <li className="p-1 px-4 font-medium  text-base md:text-lg  mt-2">
              <p className="px-1">Notifications</p>
            </li>
            <li className="p-1 text-[#172A6E]  px-4 font-medium text-end  text-base md:text-lg  mt-2">
              <p className="px-1"> 11</p>
            </li>
          </ul>
        </div>
        <InfoCard title="Usage Limits" className="mb-8 md:px-0 px-2">
          <div className="rounded-lg py-1 shadow bg-gray-50">
            <ul className="grid grid-cols-2 place-content-between ">
              <li className="p-1 text-nowrap px-4 font-medium  text-base md:text-lg  mt-2">
                Daily Usage Limit
              </li>
              <li className="p-1 text-[#172A6E]  px-4 font-medium text-end  text-base md:text-lg  mt-2">
                10 min
              </li>
            </ul>
          </div>
        </InfoCard>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AppInformation;
