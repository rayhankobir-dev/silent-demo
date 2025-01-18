/* eslint-disable react/prop-types */

const Check = ({ label, register, onClick }) => {
  return (
    <div className="mb-4 w-full flex flex-row items-center">
      <input
        type="checkbox"
        onClick={onClick}
        className="p-[16px]  cursor-pointer"
        {...register}
      />
      <label className="block text-[16px] text-[#000000]  ms-2">{label}</label>
    </div>
  );
};

export default Check;
