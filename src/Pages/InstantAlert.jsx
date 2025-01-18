import Header from "../components/Shared/Header";
import battery from "../../src/assets/images/InstantAlerts/Battery.png";
import signal from "../../src/assets/images/InstantAlerts/Signal.png";
import access from "../../src/assets/images/InstantAlerts/key.png";
import geo from "../../src/assets/images/InstantAlerts/Geo.png";
import InstantAlerts from "../../src/components/InstantAlert/InstantAlerts";
import { Table } from "../../src/components/Shared/Table";
import Button from "../components/Shared/Button";
import More from "../assets/images/more.png";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";
import Checkbox from "../components/Shared/Checkbox";

const InstantAlertsData = [
  {
    id: "1",
    icon: battery,
    heading: "Low Battery",
  },
  {
    id: "2",
    icon: signal,
    heading: "Offline Status",
  },
  {
    id: "3",
    icon: access,
    heading: "App Access",
  },
  {
    id: "4",
    icon: geo,
    heading: "Geofence Updates",
  },
];

const InstantAlert = () => {
  const viewMore = () => {
    //View More Logic Here
  };
  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <Header heading="Instant Alerts" />
      <div className="sm:my-7 mb-2">
        <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
          <Table.Header className="text-[16px]">
            <div className="flex flex-row justify-between items-center px-[11px] font-extrabold">
              Instant Alerts
              <Checkbox />
            </div>
          </Table.Header>
          <Table.Body>
            {InstantAlertsData.map((InstantAlert) => (
              <InstantAlerts
                key={InstantAlert.id}
                InstantAlert={InstantAlert}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12 mt-3">
        <Modal>
          <Modal.Toggle toggleName="viewMore-InstantAlert">
            <Button
              onClick={viewMore}
              className="text-[18px] font-medium px-[32px] shadow-[0px_0px_56px_0px_#00000014]   py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-InstantAlert">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default InstantAlert;
