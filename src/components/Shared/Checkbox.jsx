const Checkbox = () => {
  return (
    <input
      type="checkbox"
      className='relative 
    appearance-none
    inline-block
    h-[30px]
    w-[54px]
    cursor-pointer
    rounded-full
    bg-[#78788029]
    transition-all
    after:content-[" "]
    after:absolute
    after:top-[3px]
    after:left-[3px]
    after:h-6
    after:w-6
    after:rounded-full
    after:bg-white
    after:transition-all
    checked:bg-[#34C759]
     checked:after:translate-x-6
    '
    />
  );
};

export default Checkbox;
