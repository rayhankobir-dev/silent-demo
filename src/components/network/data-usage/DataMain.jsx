import Card from "../../../UI/Card";
import Tabs from "./Tabs";
import UsageTable from "./UsageTable";
import Modal from "../../Shared/Modal";
import Upgrade from "../../Shared/Upgrade";
import Button from "../../Shared/Button";
import CallsHead from "../../Calls/CallsHead";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function DataMain() {
  return (
    <Card>
      <CallsHead
        heading={"Data Usage Limit"}
        placeholder={"Search by App Name"}
      />
      <Tabs />
      <UsageTable />
      <div className="flex justify-center mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-keylogger">
            <Button className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]  py-[10px] text-[#101828] text-center mt-7">
              View More
              <MdKeyboardDoubleArrowDown size={18} />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-keylogger">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </Card>
  );
}

export default DataMain;
