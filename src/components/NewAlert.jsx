import { GoAlert } from "react-icons/go";

const NewAlert = () => {
  return (
    <div
      style={{ width: "inherit" }}
      className=" items-center border-t md:top-[66px]  px-2 md:px-4  md:hidden   text-black  bg-[#FFEAB5] py-1 "
    >
      <div className="flex md:mx-3 gap-2 md:gap-0">
        <div className="mt-2 md:mt-0">
          <GoAlert className="mt-[3px] h-4 w-4" />
        </div>

        <span className="sr-only">Info</span>
        <div className="md:ms-3  text-[13px] md:text-base font-medium">
          This demo dashboard is for reference only, no activities can be
          performed here.{" "}
          <a
            href="https://cyberguard24.com/pricing"
            className="font-semibold underline hover:no-underline text-[#172A6E]"
          >
            Upgrade to Unlock Full Access.
          </a>
        </div>
        {/* <button
            type="button"
            className="ms-auto  text-black  bg-[#FFEAB5] focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8"
            data-dismiss-target="#alert-4"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <IoIosClose />
          </button> */}
      </div>
    </div>
  );
};

export default NewAlert;
