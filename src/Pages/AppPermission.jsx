import Header from "../components/Shared/Header";
import youtube from "../../src/assets/images/NotificationSettings/youtube.png";
import Chrome from "../../src/assets/images/NotificationSettings/google.png";
import facebook from "../../src/assets/images/NotificationSettings/facebook.png";
import whatsapp from "../../src/assets/images/NotificationSettings/whatsapp.png";
import telegram from "../../src/assets/images/NotificationSettings/Telegram.png";
import messenger from "../../src/assets/images/NotificationSettings/messenger.png";
import gmail from "../../src/assets/images/NotificationSettings/gmail.png";
import { Table } from "../components/Shared/Table";
import More from "../assets/images/more.png";
import Button from "../components/Shared/Button";
import AppPermissions from "../components/AppPermissions/AppPermissions";
import Camera from "../components/AppPermissions/Camera";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const AllowedData = [
  {
    id: "1",
    icon: youtube,
    heading: "Youtube",
  },
  {
    id: "2",
    icon: Chrome,
    heading: "Chrome",
  },
  {
    id: "3",
    icon: facebook,
    heading: "Facebook",
  },
  {
    id: "4",
    icon: whatsapp,
    heading: "WhatsApp",
  },
  {
    id: "5",
    icon: telegram,
    heading: "Telegram",
  },
];

const DeniedData = [
  {
    id: "1",
    icon: messenger,
    heading: "Messenger",
  },
  {
    id: "2",
    icon: gmail,
    heading: "Gmail",
  },
];

const AppPermission = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <Header heading="App Permissions" />
      <div className="sm:my-7 mb-2">
        <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
          <Table.Header className="font-[16px]">
            <Camera />
          </Table.Header>
          <Table.Body>
            <Table className="  ">
              <Table.Header className="font-[16px]  opacity-[50%]  ">
                Allowed
              </Table.Header>
              <Table.Body>
                {AllowedData.map((AppPermission) => (
                  <AppPermissions
                    key={AppPermission.id}
                    AppPermission={AppPermission}
                  />
                ))}
              </Table.Body>
            </Table>
            <Table className="">
              <Table.Header className="font-[16px]  opacity-[50%]  ">
                Denied
              </Table.Header>
              <Table.Body>
                {DeniedData.map((AppPermission) => (
                  <AppPermissions
                    key={AppPermission.id}
                    AppPermission={AppPermission}
                  />
                ))}
              </Table.Body>
            </Table>
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12 mt-3 ">
        <Modal>
          <Modal.Toggle toggleName="viewMore-AppPermision">
            <Button
              onClick={viewMore}
              className="text-[18px]  shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px] py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-AppPermision">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default AppPermission;
