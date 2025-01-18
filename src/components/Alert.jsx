import { GoAlert } from "react-icons/go";

const Alert = () => {
  return (
    <>
      <div
        id="alert-4"
        style={{ width: "inherit", top: "66px" }}
        className=" items-center hidden border-t sm:hidden md:block   z-10 mb-2 px-4 fixed  text-black  bg-[#FFEAB5] py-2 "
        role="alert"
      >
        <div className="flex mx-3">
          <div className="mt-1">
            <GoAlert />
          </div>
          <span className="sr-only">Info</span>
          <div className="ms-2 text-base font-medium">
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
    </>
  );
};

export default Alert;
