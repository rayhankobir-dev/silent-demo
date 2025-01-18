import "./Location.css";
import { Link } from "react-router-dom";
import liveimg from "../../assets/images/Live Location.png";
import liveimg2 from "../../assets/images/liveloca2.png";

import InfoCard from "../../components/Cards/InfoCard";
import CallsHead from "../../components/Calls/CallsHead";
import { GoDotFill } from "react-icons/go";
import PageExportBtn from "../../components/pageExportBtn/PageExportBtn";

const LocationHistory = () => {
  const locationhistory = [
    {
      name: "38.0530192 -102.1240109 ",
      des: "S Main St",
      time: "Mon,May 21, 2024 11:36 AM",
    },
    {
      name: "38.0530192 -102.1243321 ",
      des: "501 Colorado St",
      time: "Mon,May 21, 2024 10:54 AM",
    },
    {
      name: "38.0529842, -102.1212933 ",
      des: "Holly Laundry and Car Wash",
      time: "Mon,May 21, 2024 10:41 AM",
      noline: true,
    },
  ];
  return (
    <>
      <CallsHead heading="Location history" placeholder="Search Location" />
      <hr className="h-px mb-2 md:hidden bg-gray-200 border-0 "></hr>
      <InfoCard
        title="Live Location"
        titleRight={
          <p className="text-blue-400">
            <Link to="/location">View More</Link>
          </p>
        }
        className="mb-2 md:mb-0 md:mt-8 text-base font-medium px-2"
      >
        <div className="rounded-md py-1 bg-gray-50 hidden md:block">
          <Link to="/Location/livelocation">
            {" "}
            <img src={liveimg} alt="img" className="object-fill " />
          </Link>
        </div>
        <div className="rounded-xl py-1 bg-gray-50 md:hidden">
          <Link to="/Location/livelocation">
            {" "}
            <img src={liveimg2} alt="img" className="object-cover h-52 w-96" />
          </Link>
        </div>
      </InfoCard>
      <section className="browserContainer  md:p-4  flex flex-col md:my-6">
        <div className="browseHistoryCon border md:rounded-md flex flex-col">
          <h3 className="border-b w-full p-3 text-base font-medium text-slate-500">
            Location History
          </h3>
          <div className="w-full ">
            {locationhistory.map((info, i) => (
              <div
                key={i}
                className={`${
                  info.noline == true ? "" : "border-b"
                } md:border-slate-300 px-2`}
              >
                <ul key={i} className="flex ">
                  <li className="flex-none  pt-[10px] border-none">
                    <GoDotFill className=" text-green-500" />
                  </li>
                  <li className=" text-[17px]  text-gray-400 ">
                    <div className="mt-[6px]">{info.name.slice(0, 25)}</div>
                  </li>
                </ul>
                <p className=" flex-1 w-64 font-semibold text-lg md:text-xl text-gray-900 border-none">
                  {info.des}
                </p>
                <p className=" pb-2 text-gray-400 text-[17px]">{info.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageExportBtn />
    </>
  );
};

export default LocationHistory;
