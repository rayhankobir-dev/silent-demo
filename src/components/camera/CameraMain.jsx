import { useState } from "react";
import Tabs from "./components/Tabs";
import Card from "../../UI/Card";
import Gallery from "./components/Gallery";
import Image from "./components/Image";
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";
import CallsHead from "../Calls/CallsHead";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function CameraMain() {
  const [show, setShow] = useState("hidden");
  const setShowHandler = () => {
    setShow("flex");
  };

  return (
    <Card>
      <CallsHead heading={"All captures"} placeholder={"Search by App Name"} />{" "}
      <Tabs />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-2 mx-0 lg:my-10 my-0 lg:border-2 border-0 rounded-lg">
        <Gallery onClick={setShowHandler} />
        <div className={`lg:flex ${show}`}>
          <Image />
        </div>
      </div>
      <div className="lg:flex justify-center hidden">
        <Modal>
          <Modal.Toggle toggleName="Update">
            <div className="flex justify-center align middle my-10  ">
              <button className="mx-auto border-2 shadow-lg px-5 py-1.5 rounded-lg flex ">
                View More
                <MdKeyboardDoubleArrowDown className="mt-1 h-4 w-4" />
              </button>
            </div>
          </Modal.Toggle>
          <Modal.Window windowName="Update">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </Card>
  );
}

export default CameraMain;
