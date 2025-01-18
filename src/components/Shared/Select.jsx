/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa";

const Select = ({ label, placeholder }) => {
  return (
    <div>
      <h1 className=" text-[16px] font-[500] opacity-[50%] ]">{label}</h1>
      <div className=" rounded-[12px] w-full p-[12px]  flex flex-row justify-between  / cursor-pointer items-center bg-[#8E8E9314] ">
        {/* <label className="block text-[16px] text-[#000000] opacity-[50%]">
          {label}
        </label> 
        <select
        onclick={onclick}
        className="w-full p-[16px]  rounded-[12px]  bg-[#8E8E9314] mt-1 cursor-pointer"
        {...register}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-[18px] text-[#000000] font-medium  '>
            {option.label}
          </option>
        ))}
      </select>   */}
        <label className="block text-[18px] font-[500] text-[#000000] ">
          {placeholder}
        </label>
        <FaChevronDown size={10} />
      </div>
    </div>
  );
};

export default Select;
