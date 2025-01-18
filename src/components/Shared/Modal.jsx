/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const ModalContext = createContext();

export default function Modal({ children }) {
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
    <>
      <div
        onClick={onCloseModal}
        className="fixed inset-0  z-50 bg-black/60 transition-all duration-500"
      />
      <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-[#ffffff] shadow-xl transition-all duration-500">
        <button
          onClick={onCloseModal}
          className="absolute right-4 top-2 rounded-[8px]  border-[#D0D5DD] border-[1px]   p-[5px]   text-[#000000] transition-all hover:bg-gray-100"
        >
          <IoMdClose size={20} />
        </button>

        <div>{cloneElement(children, { onCloseModal })}</div>
      </div>
    </>,
    document.body
  );
}

Modal.Toggle = Toggle;
Modal.Window = Window;
