import Header from "../components/Shared/Header";
import visa from "../../src/assets/images/Payment/visa.png";
import green from "../../src/assets/images/Payment/green.png";
import american from "../../src/assets/images/Payment/american.png";
import capital from "../../src/assets/images/Payment/capital.png";
import discover from "../../src/assets/images/Payment/discover.png";
import amazon from "../../src/assets/images/Payment/amazon.png";
import Button from "../components/Shared/Button";
import More from "../assets/images/more.png";
import Modal from "../components/Shared/Modal";
import Upgrade from "../components/Shared/Upgrade";

const Payment = () => {
  const viewMore = () => {
    //View More Logic Here
  };

  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <div className="border-b-[1px]   sm:border-[0px]  border-[#DDDDDD]">
        <Header heading="Saved Payment Methods" />
      </div>
      <div className="mt-3 mx-4  ">
        <div className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:my-10 my-2 gap-4">
          <img src={visa} alt="visa" className="w-full" />
          <img src={green} alt="green" className="w-full" />
          <img src={american} alt="green" className="w-full" />
          <img src={capital} alt="capital" className="w-full" />
          <img src={discover} alt="discover" className="w-full" />
          <img src={amazon} alt="amazon" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center mb-12 mt-6">
        <Modal>
          <Modal.Toggle toggleName="viewMore-Payment">
            <Button
              onClick={viewMore}
              className="text-[18px]  shadow-[0px_0px_56px_0px_#00000014]   font-medium px-[32px]   py-[10px] text-[#101828] text-center"
            >
              View More
              <img src={More} alt="more" className="ps-2" />
            </Button>
          </Modal.Toggle>
          <Modal.Window windowName="viewMore-Payment">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default Payment;
