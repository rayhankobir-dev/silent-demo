/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./AppsRoutesHeader.css";
import { Link } from "react-router-dom";
import CallsHead from "../Calls/CallsHead";

const AppsRoutesHeader = (props) => {
  const [screen, setScreen] = useState(props.data);
  return (
    <>
      {/* Navigations, search*/}
      <CallsHead heading="Apps" placeholder="Search Notes" />
      <hr className="h-px mb-2 md:hidden bg-gray-200 border-0 " />
      <ul className=" text-sm font-medium text-center no-scrollbar border md:mt-10 text-gray-500 rounded-lg shadow flex overflow-x-auto md:w-full mx-2 .no-scrollbar ">
        <li className="w-[5rem] md:w-full ">
          <Link
            to="/apps/allapps"
            className={`${
              screen == 1 && "bg-[#E9EBFF]"
            } inline-block w-full p-2 text-gray-900  border-r border-gray-200 rounded-s-lg`}
            aria-current="page"
          >
            <div className=" flex flex-col justify-center text-left md:px-4">
              <h3 className="font-semibold md:text-lg text-base w-24 md:w-32 lg:w-44 xl:w-full">
                All Apps
              </h3>
              <p className="md:text-base text-sm">134 Apps</p>
            </div>
          </Link>
        </li>

        <li className="w-[8rem] md:w-full ">
          <Link
            to="/apps/installedapp"
            className={`${
              screen == 2 && "bg-[#E9EBFF]"
            } inline-block w-full p-2 text-gray-900  border-r border-gray-200 `}
          >
            <div className=" flex flex-col justify-center text-left md:px-4">
              <h3 className="font-semibold md:text-lg text-base w-28 md:w-32 lg:w-44 xl:w-full">
                Installed Apps
              </h3>
              <p className="md:text-base text-sm">120 Apps</p>
            </div>
          </Link>
        </li>
        <li className="w-[9rem] md:w-full ">
          <Link
            to="/apps/uninstalledapp"
            className={`${
              screen == 3 && "bg-[#E9EBFF]"
            } inline-block w-full p-2 text-gray-900  border-r border-gray-200 `}
          >
            <div className=" flex flex-col justify-center text-left md:px-4">
              <h3 className="font-semibold md:text-lg text-base w-32 md:w-36 lg:w-44 xl:w-full">
                Uninstalled Apps
              </h3>
              <p className="md:text-base text-sm">14 Apps</p>
            </div>
          </Link>
        </li>
        <li className="w-[8rem] md:w-full ">
          <Link
            to="/apps/blockedapp"
            className={`${
              screen == 4 && "bg-[#E9EBFF]"
            } inline-block w-full p-2 text-gray-900  border-r border-gray-200 rounded-e-lg`}
          >
            <div className=" flex flex-col justify-center text-left md:px-4">
              <h3 className="font-semibold md:text-lg text-base w-28 md:w-32 lg:w-44 xl:w-full">
                Blocked Apps
              </h3>
              <p className="md:text-base text-sm">2 Apps</p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AppsRoutesHeader;
