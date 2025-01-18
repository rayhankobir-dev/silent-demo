/* eslint-disable react/prop-types */
import Modal from "../Shared/Modal";
import Upgrade from "../Shared/Upgrade";

function SocialApp({ SocialApps }) {
  const { id, heading, usage, icon } = SocialApps;

  return (
    <Modal>
      <Modal.Toggle toggleName={`app-${id}`}>
        <div className="flex flex-col  items-center justify-center cursor-pointer">
          <img src={icon} alt={""} className="h-auto max-w-[100%]" />
          <h1 className="text-[16px] font-medium text-[#000000] mt-1">
            {heading}
          </h1>
          <h2 className="text-[13px] font-medium text-[#000000]  opacity-[50%]">
            {usage}
          </h2>
        </div>
      </Modal.Toggle>
      <Modal.Window windowName={`app-${id}`}>
        <Upgrade />
      </Modal.Window>
    </Modal>
  );
}

export default SocialApp;
