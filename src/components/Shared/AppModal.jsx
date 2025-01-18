/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import deletei from "../../assets/images/delete.png";

const ModalContext = createContext();

export default function AppModal({ children }) {
  const [validateName, setValidateName] = useState("");

  const onCloseModal = () => setValidateName("");

  return (
    <ModalContext.Provider
      value={{ validateName, setValidateName, onCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Toggle({ children, toggleName }) {
  const { setValidateName } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => setValidateName(toggleName) });
}

function Window({ children, windowName }) {
  const { validateName, onCloseModal } = useContext(ModalContext);

  if (validateName !== windowName) return null;

  return createPortal(
    <div>
      <div
        onClick={onCloseModal}
        className="fixed inset-0  z-50 bg-black/60 transition-all duration-500"
      />
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-[#ffffff] shadow-xl transition-all duration-500">
        <button
          className="absolute flex right-4 gap-1 top-2 rounded-[8px]  border-[#D0D5DD] border-[1px]   p-[4px] px-2 mb-2 text-[#000000] text-lg font-semibold transition-all hover:bg-gray-100"
          onClick={onCloseModal}
        >
          <img src={deletei} className="h-5 mt-[3px] " alt="" />
          Uninstall
        </button>

        <div>{cloneElement(children, { onCloseModal })}</div>
      </div>
    </div>,
    document.body
  );
}

AppModal.Toggle = Toggle;
AppModal.Window = Window;
