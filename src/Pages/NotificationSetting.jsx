import Header from "../components/Shared/Header";
import youtube from "../../src/assets/images/NotificationSettings/youtube.png";
import Chrome from "../../src/assets/images/NotificationSettings/google.png";
import facebook from "../../src/assets/images/NotificationSettings/facebook.png";
import messenger from "../../src/assets/images/NotificationSettings/messenger.png";
import whatsapp from "../../src/assets/images/NotificationSettings/whatsapp.png";
import gmail from "../../src/assets/images/NotificationSettings/gmail.png";
import sheets from "../../src/assets/images/NotificationSettings/Sheets.png";
import telegram from "../../src/assets/images/NotificationSettings/Telegram.png";
import { Table } from "../components/Shared/Table";
import NotificationSettings from "../components/NotificationSettings/NotificationSettings";
import More from "../assets/images/more.png";
import Button from "../components/Shared/Button";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const NotificationSettingData = [
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
    icon: messenger,
    heading: "Messenger",
  },
  {
    id: "5",
    icon: whatsapp,
    heading: "WhatsApp",
  },
  {
    id: "6",
    icon: gmail,
    heading: "Gmail",
  },
  {
    id: "7",
    icon: sheets,
    heading: "Google Sheets",
  },
  {
    id: "8",
    icon: telegram,
    heading: "Telegram",
  },
];

const NotificationSetting = () => {
  const viewMore = () => {
    //View More Logic Here
  };
  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <Header heading="Notification Settings" />
      <div className="sm:my-7 mb-2">
        <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
          <Table.Header className="font-[16px] ">
            Hide Notifications (All Apps)
          </Table.Header>
          <Table.Body>
            {NotificationSettingData.map((NotificationSetting) => (
              <NotificationSettings
                key={NotificationSetting.id}
                NotificationSetting={NotificationSetting}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center mb-12 mt-3">
        <Modal>
          <Modal.Toggle toggleName="viewMore-NotificationSettings">
            <Button
              onClick={viewMore}
              className="text-[18px]   shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]   py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-NotificationSettings">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default NotificationSetting;
