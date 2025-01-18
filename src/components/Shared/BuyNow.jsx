/* eslint-disable react/prop-types */
import Button from "../../components/Shared/Button";
import diamond from "../../assets/images/diamond.png";
import diamond2 from "../../assets/images/image2.png";

export function BuyNow2({ onCloseModal }) {
  return (
    <div className="w-[19rem] md:w-[22rem] p-2 ">
      <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
        <h1 className="text-[22px] font-[600] text-[#000000]">Buy Now !</h1>
      </div>
      <div className="px-[16px] flex justify-center pt-4  ">
        <img src={diamond2} alt="Diamond" className="pe-2 h-28" />
      </div>
      <div className="mx-2">
        <h3 className="font-[500] opacity-[50%] text-[18px] text-[#000000]">
          Buy Now For Premium Live Features. This feature is only available
          after purchase!
        </h3>
        <div className="mt-6  pb-[12px] w-[100%]">
          <Button
            className="py-[10px] w-[100%] px-[32px] text-[18px] font-[600] text-[#000000] "
            onClick={onCloseModal}
          >
            Cancel
          </Button>
        </div>
        <div className=" w-[100%]">
          <Button
            onClick={() => {
              window.open("https://cyberguard24.com/pricing", "_self");
            }}
            className=" w-[100%] py-[10px] bg-green-100  border-green-500 border-[1px] font-[600]  px-[70px] text-[18px] text-[#000000] "
          >
            <img src={diamond} alt="diamond" className="pe-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

const BuyNow = ({ onCloseModal }) => {
  return (
    <div className="w-[19rem] md:w-[36rem] max-w-xl">
      <div className="border-b-[#DDDDDD] px-[16px] py-[12px]    border-b-[1px]">
        <h1 className="text-[22px] font-[600] text-[#000000]">Buy Now !</h1>
      </div>
      <div className="px-[16px] pt-8 flex ">
        <img src={diamond2} alt="Diamond" className="pe-2 h-16" />

        <h3 className="font-[500] opacity-[50%] text-[18px] text-[#000000]">
          Buy Now For Premium Live Features. This feature is only available
          after purchase!
        </h3>
      </div>
      <div className="mt-6 flex gap-2 flex-col md:flex-row  px-[16px] pb-[12px] ">
        <Button
          className="py-[10px] px-[32px] text-[18px] font-[600] text-[#000000] "
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <div className="md:ms-3 w-[100%]">
          <Button
            onClick={() => {
              window.open("https://cyberguard24.com/pricing", "_self");
            }}
            className="py-[10px] w-[100%] bg-green-100  border-green-500 border-[1px] font-[600]  px-[70px] text-[18px] text-[#000000] "
          >
            <img src={diamond} alt="diamond" className="pe-2" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
