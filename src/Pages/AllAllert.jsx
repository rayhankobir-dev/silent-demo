import AllAllertsHeader from "../components/AllAlerts/AllAllertsHeader";
import { Table } from "../components/Shared/Table";
import Button from "../components/Shared/Button";
import More from "../assets/images/more.png";
import AllAlerts from "../components/AllAlerts/AllAllerts";
import whatsapp from "../../src/assets/images/AllAlerts/whatsapp.png";
import location from "../../src/assets/images/AllAlerts/Location.png";
import youtube from "../../src/assets/images/AllAlerts/youtube.png";
import messenger from "../../src/assets/images/AllAlerts/messenger.png";
import snapchat from "../../src/assets/images/AllAlerts/snapchat.png";
import instagram from "../../src/assets/images/AllAlerts/instagram.png";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const AllAllertsData = [
  [
    {
      id: "1",
      img: whatsapp,
      heading: "Justin Ryhss",
      subheading: "Do you want to go see a movie tonight?",
      time: "09:10 AM",
    },
    {
      id: "2",
      img: location,
      heading: "Asher is Out of Location",
      subheading: "Location Alert ! GeoFencer.",
      time: "08:58 AM",
    },
    {
      id: "3",
      img: youtube,
      heading: "Watch Now:Tll News Video",
      subheading: "How you feel about new video?",
      time: "08:44 AM",
    },
    {
      id: "4",
      img: messenger,
      heading: "Yoknin Yossee",
      subheading: "Hey ! How are you?",
      time: "08:43 AM",
    },
    {
      id: "5",
      img: whatsapp,
      heading: "Moon & Urus",
      subheading: "New Office Table Available Now !",
      time: "08:43 AM",
    },
  ],
  [
    {
      id: "1",
      img: snapchat,
      heading: "Snap from King A",
      subheading: "New Snap ! Check it Out",
      time: "11:38 PM",
    },
    {
      id: "2",
      img: instagram,
      heading: "Akin Kins",
      subheading: "New Snap ! Check it Out",
      time: "11:32 PM",
    },
    {
      id: "3",
      img: instagram,
      heading: "Hawai Babe",
      subheading: "I thought you already talked to her",
      time: "11:28 PM",
    },
  ],
];
const AllAllert = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <>
      <div className="main sm:ps-3 sm:pe-3 sm:pt-4">
        <AllAllertsHeader />
        {AllAllertsData.map((AllAllertsData, index) => (
          <div key={index} className="sm:my-10 mb-2">
            <Table className="sm:border-[#DDDDDD] sm:border-[1px] sm:rounded-lg">
              <Table.Header className="font-[16px] opacity-[50%]">
                Monday, {index + 11} Jan, 2023
              </Table.Header>
              <Table.Body>
                {AllAllertsData.map((AllAlert) => (
                  <AllAlerts key={AllAlert.id} AllAlert={AllAlert} />
                ))}
              </Table.Body>
            </Table>
          </div>
        ))}
        <div className="flex justify-center mb-12 mt-3">
          <Modal>
            <Modal.Toggle toggleName="viewMore-allAllert">
              <Button
                onClick={viewMore}
                className="text-[18px]  shadow-[0px_0px_56px_0px_#00000014]  font-medium px-[32px]  py-[10px] text-[#101828] text-center"
              >
                View More
                <img src={More} alt="more" className="ps-2" />
              </Button>
            </Modal.Toggle>
            <Modal.Window windowName="viewMore-allAllert">
              <Upgrade />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AllAllert;
