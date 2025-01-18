/* eslint-disable react/prop-types */
import { Table } from "../Shared/Table";
import { Accordion } from "../Shared/Accordian";
import copy from "../../assets/images/copy.png";
const SavedPasswords = ({ SavedPassword }) => {
  const { id, icon, heading, identity, password } = SavedPassword;
  const borderClasses =
    id !== "1" ? "sm:border-[0px] border-t-[0.5px] border-[#DDDDDD]" : "";

  return (
    <Table.Row>
      <div className="px-[12px] ">
        <div className={`${borderClasses}`}>
          <Accordion>
            <Accordion.Item>
              <Accordion.Header>
                <div className="flex flex-row  items-center">
                  <img src={icon} className="h-5" />
                  <span className="ms-2 text-[#000000] font-[600] text-[20px]">
                    {heading}
                  </span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <span className="font-[500] text-[18px] text-[#000000] opacity-[50%]">
                      ID
                    </span>
                    <span className="font-[500] text-[18px] text-[#000000] opacity-[50%]">
                      Password
                    </span>
                  </div>
                  <div className="flex flex-col ms-2">
                    <span className="font-[500] text-[18px] text-[#000000]">
                      {identity}
                    </span>
                    <span className="font-[500] flex flex-row text-[18px] text-[#000000]">
                      {password}{" "}
                      <img src={copy} className="ms-2 h-6 w-6 " alt="copy" />
                    </span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Table.Row>
  );
};

export default SavedPasswords;
