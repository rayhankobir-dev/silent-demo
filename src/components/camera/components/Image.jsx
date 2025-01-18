import del from "../../../assets/images/delete.png";
import gallery from "../../../assets/images/gallery.png";
import ctime from "../../../assets/images/ctime.png";
import donn from "../../../assets/images/donn.png";
import oup from "../../../assets/images/oup.png";
import folder from "../../../assets/images/fodler.png";
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function Image() {
  return (
    <div className="relative">
      <div className="flex justify-between align-middle p-3 border-b-2">
        <div className="flex justify-start flex-col">
          <h3 className="font-semibold text-xl">3076877.jpg</h3>
          <div className="flex">
            <img className="w-4 h-4 text-gray-400 mt-1 mr-1" src={ctime} />
            <p className="text-gray-500">2.4 MB</p>
          </div>
          <div className="flex">
            <img className="w-4 h-4 text-gray- mt-1 mr-1" src={folder} />
            <p className="text-gray-500">Tue,May 21,2024 01:12 PM</p>
          </div>
        </div>
        <div className="flex align-middle">
          <Modal>
            <Modal.Toggle toggleName="Update">
              <img className="h-6 w-6 mt-5  cursor-pointer" src={donn} />
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <img className="h-6 w-6 mt-5 ml-3 cursor-pointer" src={oup} />
            </Modal.Toggle>
            <Modal.Toggle toggleName="Update">
              <img className="h-6 w-6 mt-5 ml-3 cursor-pointer" src={del}></img>
            </Modal.Toggle>
            <Modal.Window windowName="Update">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className="relative">
        <img src={gallery} className="object-cotain" />
        {/* <div className="h-16 w-16 absolute bg-white opacity-90 rounded-full left-96"></div> */}
        <div className="absolute h-12 w-12 rounded-full right-5 bottom-7 bg-white opacity-90">
          <FaAngleRight className="mx-auto mt-4" />
        </div>
        <div className="absolute h-12 w-12 rounded-full right-20 bottom-7 bg-white opacity-90">
          <FaAngleLeft className="mx-auto mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Image;
