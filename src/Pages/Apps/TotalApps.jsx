/* eslint-disable no-unused-vars */
import { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn";
import AppsRoutesHeader from "../../components/AppsRoutesHeader/AppsRoutesHeader";

import { AllAppsData } from "./AppsData/AllAppsData";

// ICONS

import Whatsapp from "../../assets/images/SocialApps/whatsapp.png";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import AppsInfoModal from "../../components/Shared/AppsInfoModal";
import AppModal from "../../components/Shared/AppModal";
import { Link } from "react-router-dom";

const TotalApps = () => {
  const [appData, setAppData] = useState(AllAppsData);
  const [screen, setScreen] = useState(1);
  const handleScreen = (val) => {
    setScreen(val);
  };

  return (
    <>
      <div className="Apps-container">
        <AppsRoutesHeader data="1" />
        <hr className="h-px mt-2  md:hidden bg-gray-200 border-0 " />

        <div className="appsComponentsContainer flex mb-4">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 mt-2 md:mt-8 gap-[7px] md:gap-8">
            <div className=" md:hidden">
              <Link to="/apps/appinformation">
                <div className="appBox mb-4 flex flex-col justify-center">
                  <span className="appBoxicon">
                    <img
                      className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                      src={Whatsapp}
                      alt="img"
                    />
                  </span>
                  <div className="appBoxDes flex flex-col justify-center">
                    <h3 className="text-md font-semibold">Whatsapp</h3>
                    <p className="text-slate-500 text-sm ">145.76mb</p>
                  </div>
                </div>
              </Link>
            </div>
            <AppModal>
              <AppModal.Toggle toggleName="Update">
                <div className="hidden md:block">
                  <div className="appBox  flex flex-col justify-center">
                    <span className="appBoxicon">
                      <img
                        className="w-12 md:w-16 md:h-16 lg:w-20 lg:h-20 h-12 m-auto"
                        src={Whatsapp}
                        alt="img"
                      />
                    </span>
                    <div className="appBoxDes flex flex-col justify-center">
                      <h3 className="text-md font-semibold">Whatsapp</h3>
                      <p className="text-slate-500 text-sm ">145.76mb</p>
                    </div>
                  </div>
                </div>
              </AppModal.Toggle>
              <AppModal.Window windowName="Update">
                <AppsInfoModal />
              </AppModal.Window>
            </AppModal>
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

        <ExportBtn />
      </div>
    </>
  );
};

export default TotalApps;
