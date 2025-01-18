import Switch from "../../../../UI/Switch";
import { RiDualSim1Fill, RiDualSim2Fill } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import Modal from "../../../Shared/Modal";
import Upgrade from "../../../Shared/Upgrade";
import sim from "../../../../assets/images/DashControl/T-Mobile.png";
import sim2 from "../../../../assets/images/DashControl/Verizon.png";

import { FaPhoneAlt } from "react-icons/fa";

function Tabs() {
  return (
    <div className="lg:mx-4 mx-1 lg:mt-10 mt-0">
      <section className="grid lg:grid-cols-4 grid-cols-1 lg:border-2 border-0 border-gray-200 rounded-xl ">
        <div className="py-3 px-2 lg:border-r-2 border-b lg:border-b-0  lg:border-t-0 border-t">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-7 w-5 mr-2" src={sim2}></img>
                <h3 className="font-semibold text-lg">Verizon</h3>
              </div>
              <div className="flex">
                <FaPhoneAlt className="h-[10px] w-[10px] mt-2.5 mr-1 text-gray-500" />

                <p className="text-gray-400 text-sm mt-1">+1 (312) 555 3890</p>
              </div>
            </div>
            <div className="mt-1">
              <Switch />
              <p className=" text-slate-500 text-xs">Blocked</p>
            </div>
          </div>
        </div>
        <div className="py-3 px-2 lg:border-r-2 lg:border-b-0  border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-7 w-5  mr-2" src={sim}></img>
                <h3 className="font-semibold text-lg">T-Mobile</h3>
              </div>
              <div className="flex">
                <FaPhoneAlt className="h-[10px] w-[10px] mt-2.5 mr-1 text-gray-400" />
                <p className="text-gray-400 text-sm mt-1">+1 (312) 555 3890</p>
              </div>
            </div>
            <div className="mt-1">
              <Switch />
              <p className=" text-slate-500 text-xs">Blocked</p>
            </div>
          </div>
        </div>
        <div className="py-2 lg:border-r-2 lg:border-b-0 border-b px-2">
          <div className="flex justify-start flex-col">
            <p className="text-gray-500 text-sm">Default for Calls</p>
            <div className="grid grid-cols-3 bg-gray-200 h-10 rounded-lg cursor-pointer">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div className="bg-green-400 rounded-lg m-1 flex justify-center items-center">
                    <RiDualSim1Fill className="w-7 h-7 " />
                  </div>
                </Modal.Toggle>

                <Modal.Toggle toggleName="Update">
                  <div className="flex justify-center items-center">
                    <RiDualSim2Fill className="w-7 h-7" />
                  </div>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <div className="flex justify-center items-center">
                    <BsFillPencilFill className="w-5 h-5" />
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
        <div className="p-2 lg:border-0  border-b">
          <div className="flex justify-start flex-col">
            <p className="text-gray-500 text-sm">Default for Internet Data</p>
            <div className="grid grid-cols-2 bg-gray-200 h-10 rounded-lg cursor-pointer">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div className="bg-green-400 rounded-lg m-1 flex justify-center">
                    <RiDualSim1Fill className="w-7 h-7 " />
                  </div>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <div className="flex justify-center items-center">
                    <RiDualSim2Fill className="w-7 h-7" />
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
        <div className="p-2 lg:border-b-0 lg:border-t-0 lg:border-r-0  border-b lg:hidden ">
          <div className="flex justify-start flex-col">
            <p className="text-gray-500 text-sm">Data Usage</p>
            <div className="grid grid-cols-2 bg-gray-200 h-10 rounded-lg cursor-pointer">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <div className="bg-green-400 rounded-lg m-1 flex justify-center text-white items-center">
                    App
                  </div>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <div className="flex justify-center items-center text-black">
                    Website
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
