import "./Location.css";
import { LocationHistoryData } from "./LocationData/LocationHistoryData";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn";

import { FaWifi } from "react-icons/fa";
import CallsHead from "../../components/Calls/CallsHead";

const WifiLogger = () => {
  return (
    <div className="Location-wrapper">
      <div className="Location-container flex flex-col justify-center align-middle ">
        <CallsHead heading="Wifi Logger" placeholder="Search " />

        {/*  LIVE LOCATION HEADER */}
        {/* <div className="locationHeader flex justify-center">
          <h3>Live Location</h3>
          <Link to="#">view more</Link>
        </div> */}

        {/*  LIVE LOCATION HISTORY HEADER */}
        <div className="LocationHistoryHead flex justify-start md:mt-6 md:rounded-t-lg text-sm text-slate-500">
          <h3 className="text-base font-medium">Wifi Logger History</h3>
        </div>
        {/*  LIVE LOCATION HISTORY BODY */}
        <div className="LocationHistoryBody flex flex-col justify-start ">
          {LocationHistoryData.length > 0 ? (
            LocationHistoryData.map((v, i) => (
              <div
                key={i}
                className="LocationHistoryCols border-b  flex gap-16 justify-start cursor-pointer border-r-2 border-l-2"
              >
                <div className="locationhistoryImg">
                  <img src={v.img} />
                </div>
                <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                  <p className="flex justify-start gap-2 font-medium text-slate-500 text-sm">
                    <span className="LiveCircleIcon" />
                    {v.des}
                  </p>
                  <h6 className="flex justify-start  gap-2 text-slate-700  font-semibold text-[1.0625rem]">
                    <FaWifi className="mt-1" />
                    {v.title}
                  </h6>
                  <p className="flex justify-start font-medium gap-4 ml-0 text-sm text-slate-500 ">
                    {v.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h3>no data found</h3>
          )}
        </div>

        <ExportBtn />
      </div>
    </div>
  );
};

export default WifiLogger;
