import "../../components/LocationHead/Locationhead.css";
import "./Export.css";

import { FaArrowLeftLong } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useMoveBack } from "../../hooks/useMoveBack";

const Export = () => {
  const moveBacks = useMoveBack();

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="Location-nav flex justify-between align-middle">
        {/* nav left*/}
        <div className="Location-nav-left flex justify-center align-bottom">
          <button onClick={moveBacks} className="notNavLeftIcon">
            <FaArrowLeftLong />
          </button>
          <span>Data Export</span>
        </div>

        {/* nav right*/}
        <div className="Location-nav-right flex justify-center items-center p-4">
          {/* HISTORY */}
          <span className="flex items-center LocationNavRightExportIcon cursor-pointer">
            <LuHistory />
            <span className="responsiveTitleHide">History</span>
          </span>

          <span className="flex items-center LocationNavRightFilterIcon cursor-pointer">
            <IoCloudDownloadOutline />
            <span className="responsiveTitleHide">Backup</span>
          </span>
        </div>
      </div>

      <div className="exportForm flex justify-center">
        <form className="flex-col" onSubmit={handelSubmit}>
          {/* MODULES */}
          <div className="expInputBox flex flex-col">
            <label htmlFor="moduleSelect">Module</label>
            <select id="moduleSelect">
              <option value="callLogs">Call Logs</option>
              <option value="messages">Messages</option>
              <option value="contacts">Contacts</option>
            </select>
          </div>

          {/* ITEMS */}
          <div className="expInputBox flex flex-col">
            <label htmlFor="moduleSelect">Items</label>
            <select id="moduleSelect">
              <option value="" disabled selected hidden>
                1 - 1000
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          {/* FORMAT */}
          <div className="expInputBox flex flex-col">
            <label htmlFor="moduleSelect">Format</label>
            <select id="moduleSelect">
              <option value="csv">CSV</option>
              <option value="pdf">PDF</option>
              <option value="json">JSON</option>
            </select>
          </div>

          {/* CHEAK BTN */}
          <div className="exportCheckbox expInputBox flex">
            <input type="checkbox" />
            <p>Delete Export Data From Dashboard</p>
          </div>

          {/* NOTES */}
          <div className="expInputBox flex flex-col">
            <p>Notes:</p>
            <p>
              <strong>1. </strong>
              Media files can be directly download in each feature
            </p>
            <p>
              <strong>2. </strong>
              Only 1000 records can be exported at a time
            </p>
          </div>

          {/* SUBMIT */}
          <div className="expInputBox flex flex-col">
            <button className="exportFormBtn flex justify-center">
              <IoCloudDownloadOutline /> Export Data
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Export;
