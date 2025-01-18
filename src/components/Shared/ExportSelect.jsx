/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa";

const ExportSelect = ({ label, placeholder }) => {
  return (
    <div>
      <h1 className=" text-[16px] font-[500] opacity-[50%] ]">{label}</h1>
      <div className=" rounded-[12px] w-full p-[12px]  flex flex-row justify-between  / cursor-pointer items-center bg-[#8E8E9314] ">
        <label className="block text-[18px] font-[500] text-[#000000] ">
          {placeholder}
        </label>
        <FaChevronDown size={10} />
      </div>
    </div>
  );
};

export default ExportSelect;
