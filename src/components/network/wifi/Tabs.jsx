import Switch from "../../../UI/Switch";
import { CiLock } from "react-icons/ci";

import del from "../../../assets/images/delete.png";
import tick from "../../../assets/images/checkmark.png";
import dnld from "../../../assets/images/fr.png";
import upld from "../../../assets/images/uploadd.png";
import ww from "../../../assets/images/ww.png";

function Tabs() {
  return (
    <div className="lg:mx-4 mx-0 lg:mt-10 lg:border-t-0 border-t">
      <section className="grid lg:grid-cols-4 grid-cols-1 border-0 lg:border-2 border-gray-200 rounded-xl ">
        <div className="py-2 px-2 lg:border-r-2 lg:border-t-0 lg:border-b-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <h3 className="font-semibold text-md">Wifi Network</h3>
              </div>
              <div className="flex">
                <p className="text-gray-500 text-sm">Off</p>
              </div>
            </div>
            <div className="mt-3 ">
              <Switch />
            </div>
          </div>
        </div>
        <div className="py-2 px-2 lg:border-r-2 lg:border-t-0 lg:border-b-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <img className="h-6 w-6 mt-3 mr-1" src={tick}></img>
                <div>
                  <h3 className="font-semibold text-lg">Home 5G</h3>
                  <p className="text-gray-400 text-sm">Connected</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex ">
              <CiLock className="w-6 h-6 mr-0.5 font-medium" />
              <img src={ww} className="w-6 h-6 mr-0.5" />
              <img src={del} className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="py-2 px-2 lg:border-r-2 lg:border-t-0 lg:border-b-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <img className="w-6 h-6" src={dnld} />
                <h3 className="font-semibold text-md">Downloaded</h3>
              </div>
              <p className=" text-sm font-medium">
                130.77 GB{" "}
                <span className="text-gray-500 text-xs">
                  {" Data Uploaded"}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 px-2 lg:border-r-0 lg:border-t-0 lg:border-b-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <img className="w-6 h-6" src={upld} />
                <h3 className="font-semibold text-md">Uploaded</h3>
              </div>
              <p className=" text-sm font-medium">
                1.20 GB{" "}
                <span className="text-gray-500 text-xs ">Data Downloaded</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
