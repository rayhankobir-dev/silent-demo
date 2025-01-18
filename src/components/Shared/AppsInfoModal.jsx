import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useMoveBack } from "../../hooks/useMoveBack";
import Whatsapp from "../../assets/images/SocialApps/whatsapp.png";
import AppInformation from "../../Pages/Apps/AppInformation";

const AppsInfoModal = () => {
  const moveBacks = useMoveBack();
  return (
    <div className=" w-[310px] md:w-[37rem] h-[448px]">
      <div className="flex py-2 border-b-[#DDDDDD] px-[16px]     border-b-[1px]">
        <div
          className="image-wrapper shadow me-2 mt-[2px]  p-[8px] mb-1  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          {/* <img src={moveBack} className="h-5" alt="move-Back" /> */}
          <MdOutlineKeyboardBackspace />
        </div>
        <div className="flex">
          <div className="flex-none w-8 mt-[2px]">
            <img src={Whatsapp} alt="img" className="object-contain h-8" />
          </div>
          <div className=" w-72 ps-2 mt-1">
            <p className="font-semibold text-xl text-gray-900">Whatsapp</p>
          </div>
        </div>
      </div>

      <div className="  overflow-y-auto h-96 my-4 mx-4 no-scrollbar">
        <AppInformation />
      </div>
    </div>
  );
};

export default AppsInfoModal;
