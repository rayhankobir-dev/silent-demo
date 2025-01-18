/* eslint-disable react/prop-types */
import { useMoveBack } from "../../hooks/useMoveBack";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const Verizon = (props) => {
  const moveBacks = useMoveBack();

  return (
    <div className=" w-[310px] md:w-[37rem] h-[28rem]">
      <div className="flex py-2 border-b-[#DDDDDD] px-[16px]     border-b-[1px]">
        <div
          className="image-wrapper me-2  p-[8px] mb-1  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          {/* <img src={moveBack} className="h-5" alt="move-Back" /> */}
          <MdOutlineKeyboardBackspace />
        </div>
        <div className="flex">
          <div className="flex-none w-8 mt-[2px]">
            <img src={props.img} alt="img" className="object-contain h-8" />
          </div>
          <div className=" w-72 mt-1">
            <p className="font-semibold text-xl text-gray-900">{props.text}</p>
          </div>
        </div>
      </div>

      <div className="  overflow-y-auto h-96 mx-4 no-scrollbar">
        <div className="flex mt-3 md:mt-8 flex-col md:flex-row justify-around">
          <div>
            <h4 className="font-[600] text-[20px]">
              Block Internet Connection
            </h4>
            <p className="font-[500] text-[13px] md:text-[15px] text-gray-400">
              This will block internet connection Permenantly
            </p>
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="text-gray-900 font-[900] text-lg bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            >
              Permenant Block
            </button>
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-[35rem] h-px my-2 mb-4 bg-gray-200 border-0 " />
          {/* <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span> */}
        </div>
        <div>
          <h4 className="font-[600] text-[20px]">Block Internet Connection</h4>
          <p className="font-[500] text-[13px] md:text-[15px] text-gray-400">
            This will block internet connection Permenantly
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
            <p className="font-[500] text-[40px] m-auto text-center">20</p>
            <div className="flex">
              <p className="font-[500] inline-flex text-[15px] md:text-[17px] m-auto text-center">
                Hours
                <HiOutlineChevronUpDown className="mt-1" />
              </p>
              <span></span>
            </div>
          </div>
          <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
            <p className="font-[500] text-[40px] m-auto text-center">41</p>
            <div className="flex">
              <p className="font-[500] inline-flex text-[15px] md:text-[17px] m-auto text-center">
                Minutes
                <HiOutlineChevronUpDown className="mt-1" />
              </p>
              <span></span>
            </div>
          </div>
          <div className=" w-[97] h-[89] bg-[#DDDDDD]/50 rounded-xl p-2">
            <p className="font-[500] text-[40px] m-auto text-center">00</p>
            <div className="flex">
              <p className="font-[500] inline-flex text-[15px] md:text-[17px] m-auto text-center">
                Seconds
                <HiOutlineChevronUpDown className="mt-1" />
              </p>
              <span></span>
            </div>
          </div>
        </div>
        <div className="my-2 text-center">
          <button
            type="button"
            className="text-gray-900 font-[900] text-lg bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  rounded-lg px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
          >
            Permenant Block
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verizon;
