/* eslint-disable react/prop-types */
import Upgrade from "../../Shared/Upgrade";
import Modal from "../../Shared/Modal";

function Tabs(props) {
  if (props.msg.active) {
    return (
      <div
        className={` ${
          props.msg.active ? "bg-gray-200" : ""
        } flex py-2 border-b cursor-pointer overflow-x-hidden relative `}
        onClick={props.onConvo}
      >
        <img className="rounded-full h-10 w-10 ml-2" src={props.msg.pic}></img>
        <div className="flex align-middle flex-col px-5">
          <h3 className="text-xl font-semibold">{props.msg.name}</h3>
          <p className="lg:pe-0 lg:w-auto w-52 overflow-hidden  text-nowrap text-sm text-gray-500">
            {props.msg.text}
            <span className=" right-2 absolute">{props.msg.date}</span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <Modal>
      <Modal.Toggle toggleName="Update">
        <div
          className={` ${
            props.msg.active ? "bg-gray-200" : ""
          } flex py-4 border-b cursor-pointer overflow-x-hidden relative `}
        >
          <img
            className="rounded-full h-10 w-10 ml-2"
            src={props.msg.pic}
          ></img>
          <div className="flex align-middle flex-col px-5">
            <h3 className="text-xl font-semibold">{props.msg.name}</h3>
            <p className="lg:pe-0 lg:w-auto w-52 overflow-hidden  text-nowrap text-md text-gray-500">
              {props.msg.text}
              <span className=" right-2 absolute">{props.msg.date}</span>
            </p>
          </div>
        </div>
      </Modal.Toggle>
      <Modal.Window windowName="Update">
        <Upgrade />
      </Modal.Window>
    </Modal>
  );
}

export default Tabs;
