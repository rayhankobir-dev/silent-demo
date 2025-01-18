import "./webFilter.css";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn";

import { IoAddOutline } from "react-icons/io5";
import CallsHead from "../../components/Calls/CallsHead";

const WebFilter = () => {
  return (
    <>
      <CallsHead heading="Web Filters" placeholder="Search " />
      <hr className="h-px md:hidden bg-gray-200 border-0 "></hr>

      <section className="webFilterwrapper md:border rounded-lg   flex flex-col md:my-6">
        <div className="webFilterContainer md:rounded-lg rounded-none flex flex-col">
          {/* Browser Header */}
          <div className="webFilterHeader p-1 md:p-2 flex justify-between">
            <h3 className="text-lg font-semibold ps-3 md:ps-2">
              Disallowed filters
            </h3>
            <button className="me-4 md:me-2">
              <IoAddOutline />
            </button>
          </div>

          {/* Browser  DATA COLUMNS */}
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes ps-1 flex flex-col">
              <h3 className="font-semibold text-lg lg:text-lg ">
                https://www.facebook.com
              </h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 21,2024 01:12 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold ps-1 text-lg lg:text-lg ">
                Pen Vape
              </h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 20, 2024 07:46 AM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                May 20, 2024 07:46 AM
              </p>
            </div>
          </div>
          <div className="browseHistoryCol flex">
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold ps-1 text-lg lg:text-lg ">
                https://www.apple.com
              </h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">website blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 19, 2024 05:37 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>

          <div className="browseHistoryCol flex" style={{ border: "none" }}>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold ps-1 text-lg lg:text-lg ">Nudity</h3>
              <div className="flex justify-between">
                <p className="text-black/50 font-normal">Keyword blocked</p>
              </div>
            </div>
            <div className="browseHistoryDate flex flex-col ">
              <p className="text-slate-500 text-sm hidden md:block">
                May 19, 2024 12:24 PM
              </p>
              <p className="text-slate-500 text-sm md:hidden mt-8">
                2019-10-17 02:25:09
              </p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default WebFilter;
