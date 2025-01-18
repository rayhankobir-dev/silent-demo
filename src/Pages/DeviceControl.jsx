import data from "../assets/images/DashControl/Frame.png";
import sim1 from "../assets/images/DashControl/Verizon.png";
import sim2 from "../assets/images/DashControl/T-Mobile.png";
import fram1 from "../assets/images/DashControl/Frame-1.png";
import fram2 from "../assets/images/DashControl/Frame-2.png";
import fram3 from "../assets/images/DashControl/Frame-3.png";
import fram4 from "../assets/images/DashControl/Frame-4.png";
import fram5 from "../assets/images/DashControl/Frame-5.png";
import fram6 from "../assets/images/DashControl/Frame-6.png";
import fram7 from "../assets/images/DashControl/Frame-7.png";
import devices from "../assets/images/DashControl/Device.png";
import menu from "../assets/images/DashControl/Menu.png";
import menu1 from "../assets/images/DashControl/Menu1.png";
import menu2 from "../assets/images/DashControl/Menu_2.png";
import switc from "../assets/images/DashControl/Switch.png";
import safemode from "../assets/images/DashControl/safemode.png";
import frame87 from "../assets/images/DashControl/Frame 87.png";
import { IoIosCall } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";
import CallsHead from "../components/Calls/CallsHead";
import Verizon from "../components/Shared/Verizon";
import Modal from "../components/Shared/Modal";
import FilterTegModal from "../components/Shared/FilterTegModal";
import FilterModal from "../components/Shared/FilterModal";
import Upgrade from "../components/Shared/Upgrade";

const DeviceControl = () => {
  return (
    <div>
      <CallsHead heading="Device Control" placeholder="Search " />

      <div className="border-b md:border-y md:border md:rounded-xl  md:my-8">
        <div className="flex md:p-4 py-2 md:py-4 px-2 border-b">
          <div>
            <img src={data} alt="img" className="object-contain mt-2 h-8" />
          </div>
          <div className="mx-2">
            <p className="font-semibold text-xl text-gray-900">
              Block Internet Connection
            </p>
            <p className="text-sm font-medium text-gray-400">
              Prevents internet access on the target device.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="md:p-4 py-4 px-2 md:border-r">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={sim1} alt="img" className="object-contain h-8" />
              </div>
              <div className=" w-72">
                <p className="font-semibold text-xl text-gray-900">
                  Verizon (Sim 1)
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon text=" Verizon (Sim 1)" img={sim1} />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div>
              <div className="flex-1 w-64 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  +1 (800) 917-0481
                </p>
              </div>
              <div className="flex-1 w-32 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Blocked for 3 hours
                </p>
              </div>
            </div>
          </div>
          <div className="md:p-4 py-4 px-2">
            <div className="flex ">
              <div className="flex-none w-8">
                <img src={sim2} alt="img" className="object-contain h-8" />
              </div>
              <div className=" w-72">
                <p className="font-semibold text-xl text-gray-900">
                  T-Mobile (Sim 2)
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon text=" T-Mobile (Sim 2)" img={sim2} />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div>
              <div className="flex-1 w-64 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  +1 (800) 917-0482
                </p>
              </div>
              <div className="flex-1 w-32 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Internet Live
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="flex md:p-4 py-4 px-2 border-b">
          <div className="ms-2 md:ms-0">
            <img
              src={fram1}
              alt="img"
              className="object-contain mt-2 md:w-auto h-8 w-6"
            />
          </div>
          <div className="mx-2">
            <p className="font-semibold text-xl text-gray-900">
              Block Mobile Network
            </p>
            <p className="text-sm font-medium text-gray-400">
              Disables mobile network connectivity
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="md:p-4 py-4 px-2 md:border-r">
            <div className="flex ">
              <div className="flex-none w-8">
                <img
                  src={fram2}
                  alt="img"
                  className="object-contain h-6 md:w-auto w-6"
                />
              </div>
              <div className=" w-72">
                <p className="font-semibold ms-2 text-xl text-gray-900">
                  Wifi Network
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <div className="toggle-switch-background">
                        <div className="toggle-switch-handle" />
                      </div>
                    </label>
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Verizon />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
            <div className="flex ">
              {/* <div className="flex-none w-4 mt-2 m-auto">
                <p className="text-sm font-medium text-gray-400 ">
                  <IoIosCall />
                </p>
              </div> */}
              <div className=" w-52 md:w-80 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Disables Wifi network / WLan network connectivity
                </p>
              </div>
              <div className="flex-1 w-48 md:w-20 text-end me-2 mt-1">
                <p className="text-sm  font-medium text-gray-400 ">
                  Active Network
                </p>
              </div>
            </div>
          </div>
          <div className="md:p-4 py-4 px-2">
            <div className="flex ">
              <div className="flex-none w-8">
                <img
                  src={fram3}
                  alt="img"
                  className="object-contain h-6 w-6 "
                />
              </div>
              <div className=" w-72">
                <p className="font-semibold ms-2 text-xl text-gray-900">
                  SIMs Network
                </p>
              </div>
              <div className="flex-1 w-15 text-end me-2">
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <div className="toggle-switch-background">
                    <div className="toggle-switch-handle" />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex ">
              <div className=" w-52 md:w-80 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  Disables SIM&apos;s network / WLan network connectivity
                </p>
              </div>
              <div className="flex-1 w-48 md:w-20 text-end me-2 mt-1">
                <p className="text-sm font-medium text-gray-400 ">
                  No Network for 3 h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="flex md:p-4 py-4  px-2">
            <div>
              <img src={fram4} alt="img" className="object-contain mt-2 h-8" />
            </div>
            <div className="mx-2">
              <p className="font-semibold text-xl text-gray-900">
                Remotely Lock or Unlock Device
              </p>
              <p className="text-sm font-medium text-gray-400">
                Securely control device access.
              </p>
            </div>
            <div className="w-20 md:hidden ">
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={devices}
                    alt="img"
                    className="object-contain ms-[2px] mt-2 h-8"
                  />
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
          <div className="  hidden md:block">
            <div className="flex md:p-4 py-4 px-2 justify-end">
              <div className="w-14 h-14">
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <img
                      src={devices}
                      alt="img"
                      className="object-contain mt-2 cursor-pointer"
                    />
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 ">
          <div className="flex md:p-4 py-4 px-2">
            <div>
              <img src={fram5} alt="img" className="object-contain mt-2 h-8" />
            </div>
            <div className="mx-2">
              <p className="font-semibold text-xl text-gray-900">
                Real-Time Screen Sharing
              </p>
              <p className="text-sm font-medium text-gray-400">
                Collaborate instantly with live screen sharing.
              </p>
            </div>
          </div>
          <div className="flex md:p-4 py-4 px-2 md:justify-end justify-center">
            <div>
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <button
                    type="button"
                    className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                  >
                    <CiMobile3 size={30} />
                    View Live Screen
                  </button>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-0 ">
          <div className="flex md:p-4 py-4 px-2 col-span-2">
            <div className="w-12 md:w-auto">
              <img src={fram6} alt="img" className="object-contain mt-2 h-8" />
            </div>
            <div className="mx-2 w-70">
              <p className="font-semibold text-xl text-gray-900">
                Live Microphone Access for Listening to Surroundings
              </p>
              <p className="text-sm font-medium text-gray-400">
                Listen to the device&apos;s surroundings in real-time.
              </p>
            </div>
          </div>
          <div className="flex md:p-4 py-4 px-2 md:justify-end justify-center">
            <div>
              <img src={menu} alt="img" className="object-contain h-12" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-0 ">
          <div className="flex md:p-4 md:py-4 py-2 px-2 col-span-2">
            <div className="w-12 md:w-auto">
              <img src={fram7} alt="img" className="object-contain mt-2 h-8" />
            </div>
            <div className="mx-2 w-70">
              <p className="font-semibold text-xl text-gray-900">
                Silently Record All or Specific Video Calls
              </p>
              <p className="text-sm font-medium text-gray-400">
                Record video calls discreetly
              </p>
            </div>

            <Modal>
              <Modal.Toggle toggleName="Update">
                <img
                  src={switc}
                  alt="img"
                  className="object-contain h-9 md:hidden block"
                />
              </Modal.Toggle>
              <Modal.Window windowName="Update">
                <Upgrade />
              </Modal.Window>
            </Modal>
          </div>
          <div className="flex md:p-4 py-4 px-2  justify-center md:justify-end">
            <div className="md:flex ">
              <img
                src={menu2}
                alt="img"
                className="object-contain ps-3 md:ps-0 h-28 md:h-12"
              />
              <img src={menu1} alt="img" className="object-contain h-12" />
              <Modal>
                <Modal.Toggle toggleName="Update">
                  <img
                    src={switc}
                    alt="img"
                    className="object-contain h-12 hidden md:block cursor-pointer"
                  />
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y md:border md:rounded-xl md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          <div className="flex md:p-4 py-4 px-2 col-span-2">
            <div>
              <img
                src={frame87}
                alt="img"
                className="object-contain mt-2 w-24 md:w-20"
              />
            </div>
            <div className="mx-2 ">
              <div className="flex ">
                <div>
                  <p className="font-semibold text-xl text-gray-900 ">
                    Filter harmful content on Device{" "}
                  </p>
                </div>
                <div className="hidden md:block ms-4">
                  <FilterModal>
                    <FilterModal.Toggle toggleName="Update">
                      <button
                        type="button"
                        className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                      >
                        <AiFillEdit />
                        <p className="text-nowrap">Edit Filters</p>
                      </button>
                    </FilterModal.Toggle>
                    <FilterModal.Window windowName="Update">
                      <FilterTegModal />
                    </FilterModal.Window>
                  </FilterModal>
                </div>
                <Modal>
                  <Modal.Toggle toggleName="Update">
                    <img
                      src={safemode}
                      alt="img"
                      className="object-contain h-12 block md:hidden"
                    />
                  </Modal.Toggle>
                  <Modal.Window windowName="Update">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              </div>
              <p className="hidden md:block text-sm font-medium text-gray-400">
                Social Media Content Filter
              </p>
              <div className="hidden md:block">
                <div className=" flex flex-wrap gap-2">
                  <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Nudity
                  </span>
                  <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Hate
                  </span>
                  <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Violence
                  </span>
                  <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Self-harm
                  </span>
                  <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    Bullying/Harassment
                  </span>
                  <span className="bg-[#172A6E] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                    +25 More Tags
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" md:hidden">
              <div className=" flex flex-wrap justify-start mx-4 gap-2">
                <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Nudity
                </span>
                <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Hate
                </span>
                <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Violence
                </span>
                <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Self-harm
                </span>
                <span className="bg-[#E9EBFF] text-[#172A6E] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Bullying/Harassment
                </span>
                <span className="bg-[#172A6E] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  +25 More Tags
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:p-4 md:py-4 px-2 md:mt-4 justify-center md:justify-end">
              <div>
                <img
                  src={safemode}
                  alt="img"
                  className="object-contain h-12 hidden md:block"
                />
                <div className=" md:hidden">
                  <FilterModal>
                    <FilterModal.Toggle toggleName="Update">
                      <button
                        type="button"
                        className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                      >
                        <AiFillEdit />
                        Edit Filters
                      </button>
                    </FilterModal.Toggle>
                    <FilterModal.Window windowName="Update">
                      <FilterTegModal />
                    </FilterModal.Window>
                  </FilterModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceControl;
