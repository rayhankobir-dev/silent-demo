/* eslint-disable react/prop-types */
import { Table } from "../Shared/Table";
import Checkbox from "../Shared/Checkbox";

const InstantAlerts = ({ InstantAlert }) => {
  const { id, icon, heading } = InstantAlert;
  const borderClasses =
    id !== "1" ? "sm:border-[0px] border-t-[1px] border-[#DDDDDD]" : "";

  return (
    <Table.Row>
      <div className="px-[12px] ">
        <div className={`${borderClasses}`}>
          <div className="flex  flex-row justify-between p-[16px] items-center">
            <div className="flex flex-row items-center">
              <img src={icon} alt={icon} className="h-auto max-w-[100%]" />
              <h1 className="text-[20px]  ps-3 text-[#000000]">{heading}</h1>
            </div>
            <Checkbox />
          </div>
        </div>
      </div>
    </Table.Row>
  );
};

export default InstantAlerts;
