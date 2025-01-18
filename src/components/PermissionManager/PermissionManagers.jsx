/* eslint-disable react/prop-types */
import Checkbox from "../Shared/Checkbox";
import { Table } from "../../components/Shared/Table";

const PermissionManagers = ({ PermisionManager }) => {
  const { id, icon, heading, paragragh } = PermisionManager;
  const borderClasses =
    id !== "1" ? "sm:border-[0px] border-t-[0.5px] border-[#DDDDDD]" : "";

  return (
    <Table.Row>
      <div className="px-[12px] ">
        <div className={`${borderClasses}`}>
          <div className="flex flex-row justify-between  items-center py-[12px]">
            <div className="flex flex-row items-center">
              <img src={icon} alt="camera" className="h-auto max-w-[100%]" />
              <div className="flex flex-col ms-3">
                <h1 className=" text-[20px] text-[#000000]  font-[600]">
                  {heading}
                </h1>
                <span className="text-[14px] opacity-[50%] text-[#000000] font-medium">
                  {paragragh}
                </span>
              </div>
            </div>
            <Checkbox />
          </div>
        </div>
      </div>
    </Table.Row>
  );
};

export default PermissionManagers;
