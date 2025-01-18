import { Link } from "react-router-dom";
import "./Location.css";
import "./geoFrence.css";
import { LocationGeofrenceData } from "./LocationData/LocationHistoryData";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn";
import CallsHead from "../../components/Calls/CallsHead";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";

const GeoFrence = () => {
  return (
    <div className="Location-wrapper">
      <Modal>
        <div className="Location-container flex flex-col justify-center align-middle ">
          <CallsHead heading="Geo Fence" placeholder="Search " />
          <hr className="h-px md:hidden bg-gray-200 border-0 "></hr>

          {/* GEOFRENCE CONTAINERS */}
          <div className="geoFrenceContainer flex mb-2 md:mb-6">
            {/* GEOFRENCE LEFT CONTAINERS */}
            <div className="geoFrenceConLeft flex flex-col justify-start">
              <div className="geoLeftDes flex flex-col">
                <h3 className="text-slate-500 text-base font-medium">
                  GeoFrence History
                </h3>
              </div>

              <div className="geoLeftBtns flex">
                <Link to={"#"}>
                  <button className="active text-slate-500">All</button>
                </Link>
                <Link to={"#"}>
                  <Modal.Toggle toggleName="Update">
                    <button className=" text-slate-500">Today</button>
                  </Modal.Toggle>
                </Link>
                <Link to={"#"}>
                  <Modal.Toggle toggleName="Update">
                    <button className=" text-slate-500">Yesterday</button>
                  </Modal.Toggle>
                </Link>
                <Link to={"#"}>
                  <Modal.Toggle toggleName="Update">
                    <button className=" text-slate-500">Last 7 Day</button>
                  </Modal.Toggle>
                </Link>
              </div>

              {/*  LIVE LOCATION HISTORY BODY */}
              <div className="LocationHistoryBody flex flex-col justify-start">
                <div className="LocationHistoryCols flex gap-16 justify-start cursor-pointer bg-gray-100">
                  <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer ">
                    <p className="flex justify-start gap-2 text-slate-500">
                      <span className="LiveCircleIcon iconBlue" /> 38.0530192
                      -102.1240109
                    </p>
                    <h3 className="text-lg  font-bold">S Main St</h3>
                    <p className="flex justify-start gap-2 text-slate-500 text-sm">
                      Mon,May 21, 2024 11:36 AM
                    </p>
                  </div>
                </div>
                {LocationGeofrenceData.length > 0 ? (
                  LocationGeofrenceData.map((v, i) => (
                    <Modal.Toggle key={i} toggleName="Update">
                      <div className="LocationHistoryCols border-b flex gap-16 justify-start cursor-pointer">
                        <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                          <p className="flex justify-start gap-2 text-slate-500">
                            <span className="LiveCircleIcon iconBlue" />
                            {v.des}
                          </p>
                          <h3 className="text-lg  font-bold">{v.title}</h3>
                          <p className="flex justify-start gap-2 text-slate-500 text-sm">
                            {v.date + " 10:45 AM"}
                          </p>
                        </div>
                      </div>
                    </Modal.Toggle>
                  ))
                ) : (
                  <h3>no data found</h3>
                )}
              </div>
            </div>

            {/* GEOFRENCE RIGHT CONTAINERS */}

            <div className="geoFrenceConRight pt-1 flex flex-col justify-center">
              <div className=" flex ms-4 pt-[.3rem] justify-start items-center gap-4 md:hidden  font-semibold">
                <Link to={"#"}>
                  <button className="active text-black/50 py-1 px-3 rounded">
                    All
                  </button>
                </Link>

                <Modal.Toggle toggleName="Update">
                  <Link to={"#"}>
                    <button className=" text-black/50">Today</button>
                  </Link>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <Link to={"#"}>
                    <button className=" text-black/50">Yesterday</button>
                  </Link>
                </Modal.Toggle>
                <Modal.Toggle toggleName="Update">
                  <Link to={"#"}>
                    <button className=" text-black/50">Last 7 Day</button>
                  </Link>
                </Modal.Toggle>
              </div>
              <hr className="h-px my-2 md:hidden bg-gray-200 border-0 "></hr>
              <div className="md:p-2  pb-2 flex flex-col">
                <h3 className=" text-black/50 mx-3 text-base font-medium">
                  Location History
                </h3>
              </div>

              <div className="geoRightMap hidden md:block" />
              <div className="geoRightMap2 md:hidden" />

              <div className="LocationHistoryCols  border-b md:border-b-0 flex gap-16 justify-start cursor-pointer">
                <div className="locationhistoryImg ml-2" />
                <div className="LocationHistoryCol flex flex-col justify-start cursor-pointer">
                  <p className="flex justify-start text-slate-500 text-sm">
                    <span className="LiveCircleIcon  mr-2 text-[18px] font-medium" />
                    38.0530192 -102.1240109
                  </p>
                  <h3 className="font-semibold text-lg">S Main St</h3>
                  <p className="flex justify-start text-slate-500 text-sm font-medium">
                    Mon,May 21, 2024 11:36 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ExportBtn />
        </div>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default GeoFrence;
