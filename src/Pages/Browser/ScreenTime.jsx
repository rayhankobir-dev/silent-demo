import "../Browser/ScreenTime.css";
import "../../components/AppsRoutesHeader/AppsRoutesHeader.css";
import YT from "../../assets/images/yt.png";
import crome from "../../assets/images/crome.png";
import mgngr from "../../assets/images/msgngr.png";
import fb from "../../assets/images/fb.png";

import ExportBtn from "../../components/pageExportBtn/PageExportBtn";
import DeviceControlHead from "../../components/DeviceControl/DeviceControlHead";
import graph from "../../assets/images/graph2.png";
import NewAlert from "../../components/NewAlert";

const ScreenTime = () => {
  const MostUsedApp = [
    {
      img: YT,
      name: "Youtube",
      bar: "70%",
      time: "10m",
    },
    {
      img: crome,
      name: "Chrome",
      bar: "55%",
      time: "9m",
    },
    {
      img: fb,
      name: "Facebook",
      bar: "40%",
      time: "8m",
    },
    {
      img: mgngr,
      name: "Messenger",
      bar: "35%",
      time: "7m",
      noline: true,
    },
  ];
  return (
    <>
      {/* Navigations, search*/}
      <DeviceControlHead
        heading="Screen Time"
        // placeholder="Search by Name or Phone Number"
      />
      <NewAlert />

      <hr className="h-px mb-4 md:hidden bg-gray-200 border-0 " />
      <div className="grid grid-cols-1 md:grid-cols-1 md:my-8 lg:grid-cols-2 md:gap-4 gap-0  mx:m-0">
        <div className="border border-slate-300 rounded-lg p-4 mb-5 md:mb-0  mx-4">
          <h4 className="text-black/50 text-base md:text-lg font-semibold">
            App Usage : Daily Average
          </h4>
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">7h 24m</h1>
            <p className="text-gray-400">18% from last week</p>
          </div>
          <div>
            <img src={graph} alt="graph" />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-blue-500">
                Productivity & Finance
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium">
                10h 49m
              </h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-cyan-600">
                Other
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                8h 32m
              </h1>
            </div>
            <div>
              <h1 className="xl:text-2xl lg:text-xl md:text-lg text-base font-bold text-orange-700">
                Social
              </h1>
              <h1 className=" lg:text-xl md:text-lg text-base font-medium ">
                5h 44m
              </h1>
            </div>
          </div>
        </div>
        <h2 className=" text-black/50 font-semibold text-base md:hidden border-y py-2 px-4">
          Recent Most Used Apps
        </h2>
        <div className="md:border  md:border-slate-300 md:rounded-lg  mb-5 md:mb-0">
          <div className="md:block hidden md:p-4  ">
            <h2 className="text-black/50 font-semibold md:text-lg">
              Recent Most Used Apps
            </h2>
          </div>
          <section className={` shadow-blue-200 mx-auto  `}>
            <div className="capitalize flex justify-between flex-wrap items-center text-[16px] weight-[500]"></div>

            <div className="rounded-lg py-1 text-[18px] weight-[500]">
              <div className="rounded-lgs  ">
                {MostUsedApp.map((info, i) => (
                  <div
                    key={i}
                    className={`${
                      info.noline === true ? "" : "border-b"
                    } border-slate-300 md:px-2`}
                  >
                    <ul key={i} className="flex px-2 md:px-0 mb-2">
                      <li className="flex-none w-14 pt-2 border-none">
                        <img
                          className="w-8 h-8  m-auto"
                          src={info.img}
                          alt="logo"
                        />
                      </li>
                      <li className="p-1 flex-1 w-64 font-semibold text-xl mt-2 text-gray-900 border-none">
                        <div>{info.name}</div>
                      </li>
                      <li className="p-1 text-[16px] md:text-[18px] text-[#172A6E] font-medium md:font-semibold pt-4 border-none">
                        {info.time}
                      </li>
                    </ul>
                    <div className="px-2 md:px-0  rounded-full h-1.5 mb-2  mx-2">
                      <div
                        className="bg-gray-300 h-1.5 rounded-full "
                        style={{ width: info.bar }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <ExportBtn />
    </>
  );
};

export default ScreenTime;
