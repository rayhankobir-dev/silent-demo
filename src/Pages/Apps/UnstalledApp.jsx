import { useState } from "react";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader";

import { UnInstalledAppData } from "./AppsData/UnstalledAppData";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import PageExportBtn from "../../components/pageExportBtn/PageExportBtn";

const UnstalledApp = () => {
  const [appData] = useState(UnInstalledAppData);

  return (
    <>
      <div className="Apps-container">
        <AppsRoutesHeader data="3" />
        <hr className="h-px mt-2  md:hidden bg-gray-200 border-0 " />

        <div className="appsComponentsContainer flex">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-4 md:mt-8 gap-[7px] md:gap-8">
            {appData && appData.length > 0 ? (
              appData.map((v, i) => (
                <Modal key={i}>
                  <Modal.Toggle toggleName="Upgrade">
                    <div
                      key={i}
                      className="appBox  flex flex-col justify-center"
                    >
                      <span className="appBoxicon">
                        {/* <span className="appBoxicon">{v.icon}</span> */}
                        <img
                          className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                          src={v.icon}
                          alt="img"
                        />
                      </span>
                      <div className="appBoxDes flex flex-col justify-center">
                        <h3 className="text-md font-semibold">{v.title}</h3>
                        <p className="text-slate-500 text-sm ">{v.size}</p>
                      </div>
                    </div>
                  </Modal.Toggle>
                  <Modal.Window windowName="Upgrade">
                    <Upgrade />
                  </Modal.Window>
                </Modal>
              ))
            ) : (
              <h3>Data Not Found</h3>
            )}
          </div>
        </div>
      </div>
      <PageExportBtn />
    </>
  );
};

export default UnstalledApp;
