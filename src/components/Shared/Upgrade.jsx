/* eslint-disable react/prop-types */
import Button from "../../components/Shared/Button";
import diamond from "../../assets/images/diamond.png";

function Upgrade({ onCloseModal }) {
  return (
    <div className=" md:w-[28rem] w-[19rem]">
      <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
        <h1 className="text-[16px] md:text-[22px] font-[600] text-[#000000]">
          Upgrade to Unlock Full Access
        </h1>
      </div>
      <div className="px-[16px] pt-[10px] ]">
        <h2 className="font-[600] pe-[62px] text-[15px] md:text-[18px] text-[#000000]">
          This Demo Dashboard is for reference only,
        </h2>
        <h3 className="font-[600] opacity-[50%] text-[15px] md:text-[18px] text-[#000000]">
          No Activities can be performed here.
        </h3>
      </div>
      <div className="justify-center mt-3 flex flex-row  px-[16px] pb-[12px] ">
        <Button
          className="py-[10px] px-4 md:px-[32px] text-[18px] font-[600] text-[#000000] "
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <div className="ms-3">
          <Button
            onClick={() => {
              window.open("https://cyberguard24.com/pricing", "_self");
            }}
            className="py-[10px] bg-green-100  border-green-500 border-[1px] font-[600] px-[14px] md:px-[70px] text-[16px] md:text-[18px] text-[#000000] "
          >
            <img src={diamond} alt="diamond" className="pe-2" />
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
