/* eslint-disable react/prop-types */
import { Table } from "../Shared/Table";

const AllAlerts = ({ AllAlert }) => {
  const { id, img, heading, subheading, time } = AllAlert;
  const borderClasses =
    id !== "1" ? "sm:border-[0px] border-t-[0.5px] border-[#DDDDDD]" : "";

  return (
    <Table.Row>
      <div className="px-[12px] ">
        <div className={`${borderClasses}`}>
          <div className="flex flex-row justify-between p-[16px]">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img src={img} alt="google" className=" h-5" />
                <h1 className="ms-2 text-[20px] text-[#000000]  font-[600]">
                  {heading}
                </h1>
              </div>
              <span className="text-[14px] opacity-[50%] text-[#000000] font-medium">
                {subheading}
              </span>
            </div>
            <span className="text-[14px] font-medium  opacity-[50%] text-[#000000]">
              {time}
            </span>
          </div>
        </div>
      </div>
    </Table.Row>
  );
};

export default AllAlerts;
