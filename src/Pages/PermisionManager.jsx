import Header from "../components/Shared/Header";
import sensor from "../assets/images/PermissionManager/sensors.png";
import calender from "../assets/images/PermissionManager/calender.png";
import call from "../assets/images/PermissionManager/call.png";
import camera from "../assets/images/PermissionManager/camera.png";
import contacts from "../assets/images/PermissionManager/contacts.png";
import location from "../assets/images/PermissionManager/location.png";
import microphone from "../assets/images/PermissionManager/microphone.png";
import activity from "../assets/images/PermissionManager/men.png";
import { Table } from "../components/Shared/Table";
import More from "../assets/images/more.png";
import Button from "../components/Shared/Button";
import PermissionManagers from "../components/PermissionManager/PermissionManagers";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const PermisionManagerData = [
  {
    id: "1",
    icon: sensor,
    heading: "Body Sensors",
    paragragh: "0 of 0 apps allowed",
  },
  {
    id: "2",
    icon: calender,
    heading: "Calendar",
    paragragh: "3 of 6 apps allowed",
  },
  {
    id: "3",
    icon: call,
    heading: "Call logs",
    paragragh: "4 of 7 apps allowed",
  },
  {
    id: "4",
    icon: camera,
    heading: "Camera",
    paragragh: "7 of 20 apps allowed",
  },
  {
    id: "5",
    icon: contacts,
    heading: "Contacts",
    paragragh: "12 of 36 apps allowed",
  },
  {
    id: "6",
    icon: location,
    heading: "Location",
    paragragh: "2 of 21 apps allowed",
  },
  {
    id: "7",
    icon: microphone,
    heading: "Microphone",
    paragragh: "9 of 45 apps allowed",
  },
  {
    id: "8",
    icon: activity,
    heading: "Physical activity",
    paragragh: "3 of 12 apps allowed",
  },
];

const PermisionManager = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <Header heading="Permission Manager" />
      <div className="sm:my-7 mb-2">
        <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
          <Table.Header className="font-[16px] opacity-[50%]">
            All Permission
          </Table.Header>
          <Table.Body>
            {PermisionManagerData.map((PermisionManager) => (
              <PermissionManagers
                key={PermisionManager.id}
                PermisionManager={PermisionManager}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12">
        <Modal>
          <Modal.Toggle toggleName="viewMore-PermisionManager">
            <Button
              onClick={viewMore}
              className="text-[18px] shadow-[0px_0px_56px_0px_#00000014]  font-medium px-[32px]  py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-PermisionManager">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default PermisionManager;
