import { useState } from "react";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn";
import "./AllFiles.css";
import AllFilesHead from "../../components/AllFilesHead/AllFilesHead";

import { DownloadFilesData } from "./AllFilesData/DownloadFileData";
import Modal from "../../components/Shared/Modal";
import Upgrade from "../../components/Shared/Upgrade";
import NewAlert from "../../components/NewAlert";

const FilesDownload = () => {
  const [appData] = useState(DownloadFilesData);

  return (
    <>
      <AllFilesHead headding="Downloads" />
      <NewAlert />
      <hr className="h-px md:hidden  mb-4 bg-gray-200 border-0 "></hr>
      <div className="Apps-container downloadFilesComponent justify-center mx-2">
        <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-items-center md:justify-items-start">
          {appData && appData.length > 0 ? (
            appData.map((v, i) => (
              <Modal key={i}>
                <Modal.Toggle toggleName="Update">
                  <div
                    key={v.id}
                    className="appBox flex flex-col justify-center mx-3 mb-1 md:mb-14"
                  >
                    <span className="appBoxicon relative">
                      <input
                        type="checkbox"
                        className="h-5 w-8 absolute top-0 left-[-1.5rem] md:left-12 "
                      ></input>

                      <img
                        src={v.icon}
                        alt="Download"
                        className="md:h-20 h-[80px] w-20"
                      />
                    </span>
                    <div className="-my-3 text-sm  font-semibold text-center flex flex-col justify-center">
                      <h3 className="text-base">{v.title}</h3>
                      <p className="text-slate-600 text-nowrap">{v.size}</p>
                    </div>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
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
    </>
  );
};

export default FilesDownload;
