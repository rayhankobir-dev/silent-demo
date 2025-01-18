/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";
import search from "../../assets/images/Header/search.png";
const Search = ({ className = " ", onClick, placeholder }) => {
  return (
    <div className="flex  shadow-[0px_0px_56px_0px_#00000014]    flex-row   rounded-[8px]  cursor-pointer  py-[10px] ps-[16px]  pe-[130px]   sm:pe-[110px]   items-center  border-[1px] border-[#D0D5DD]  ">
      <img src={search} className="h-6 max-w-[100%] pe-3" />
      <input
        type="search"
        onClick={onClick}
        className={twMerge("border-[#D0D5DD]  deleteKeyLogger", className)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
