import "./Location.css";
import { LocationData } from "./LocationData/LocationData";

import Map from "../../assets/images/map.png";
import Map2 from "../../assets/images/map2.png";
import moveBack from "../../assets/images/Header/arrow.png";
import { useMoveBack } from "../../hooks/useMoveBack";
import NewAlert from "../../components/NewAlert";

const Location = () => {
  const moveBacks = useMoveBack();

  return (
    <div className="Location-wrapper">
      <div className="Location-container flex flex-col justify-center align-middle ">
        <div className="flex md:flex-row pt-1 md:pt-0  justify-between  items-start  md:items-center mx-2 md:mx-0">
          <div className="item-one flex flex-row items-center ">
            <div
              className="image-wrapper shadow-[0px_0px_56px_0px_#00000014] p-[6px] md:p-[10px]    md:border-[#D0D5DD] md:border-[1px] cursor-pointer  md:rounded-[8px]"
              onClick={moveBacks}
            >
              <img src={moveBack} className="h-6 w-6" alt="move-Back" />
            </div>
            <span className="text-[16px] md:text-[20px] text-black/50  md:text-[#000000] md:ps-3 ps-1 font-[600]">
              Live Location
            </span>
          </div>
        </div>
        <NewAlert />

        {/*  LIVE LOCATION MAP */}
        <div className=" md:mt-8 flex justify-center ">
          <img src={Map} alt={"map"} className="h-full hidden md:block" />
          <img src={Map2} alt={"map"} className="h-full md:hidden" />
          {/* <Link><button className="LocationMapConBtn flex justify-center">Live Tracking <IoIosArrowDropright /></button></Link> */}
        </div>

        {/*  LIVE LOCATION HISTORY HEADER */}

        {/*  LIVE LOCATION HISTORY BODY */}
        <div className="LocationHistoryBody flex flex-col justify-start ">
          <div className="hidden md:block">
            {LocationData.length > 0 ? (
              LocationData.map((v, i) => (
                <div
                  key={i}
                  className="LocationHistoryCol flex flex-col justify-start cursor-pointer"
                  style={{
                    padding: "1rem",
                  }}
                >
                  <p className="flex justify-start ">
                    <span className="LiveCircleIcon  clear-starttext-md text-gray-500" />
                    <p className="ps-2">{v.des}</p>
                  </p>
                  <h3 className="text-lg mt-2 font-semibold">{v.title}</h3>
                </div>
              ))
            ) : (
              <h3>no data found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
