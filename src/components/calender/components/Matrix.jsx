import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Modal from "../../Shared/Modal";
import Upgrade from "../../Shared/Upgrade";

function Matrix() {
  const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const i = Array.from({ length: 35 }, (_, index) => index + 1);

  const schedules = [
    {
      time: "10:00-13:00",
      main: "Design new UX flow from micheal",
      desc: "Starts from screen 16",
    },
    {
      time: "10:00-13:00",
      main: "Brainstorm with the team",
      desc: "Define the problem or question",
    },
    {
      time: "10:00-13:00",
      main: "Workout with Ella",
      desc: "We will do the legs and backend workout",
    },
  ];

  return (
    <div className="lg:mt-10 mt-2 lg:mx-4 mx-0 lg:ms-0 ">
      <div className="grid grid-cols-7 rounded-xl lg:border-2 border-t border-b">
        {days.map((day, idx) => {
          return (
            <p
              className="lg:p-3 p-1 text-gray-500 text-sm lg:text-base text-medium border lg:border-r-0 lg:border-t-0  "
              key={idx}
            >
              {day}
            </p>
          );
        })}
        {i.map((num, index) => {
          const showModal = [4, 5, 31, 8, 14, 17, 27].includes(num);
          if (showModal) {
            return (
              <Modal key={index}>
                <Modal.Toggle toggleName="Update">
                  <div
                    className={`p-2 pb-1 border lg:border-r lg:border-t-0 lg:border-l-0 ${
                      num >= 29 ? "lg:border-b-0" : "lg:border-b-2"
                    } font-medium`}
                  >
                    {num % 32}
                    <div className="flex mt-1">
                      <div className="bg-green-800 h-2 w-2 rounded-full mr-1"></div>
                      <div className="bg-blue-900 h-2 w-2 rounded-full mr-1"></div>
                      <div className="bg-blue-500 h-2 w-2 rounded-full mr-1"></div>
                    </div>
                  </div>
                </Modal.Toggle>
                <Modal.Window windowName="Update">
                  <Upgrade />
                </Modal.Window>
              </Modal>
            );
          } else {
            return (
              <div
                className={`p-2 pb-1 border lg:border-r lg:border-t-0 lg:border-l-0 ${
                  num >= 29 ? "lg:border-b-0" : "lg:border-b-2"
                } font-medium`}
                key={index}
              >
                {num % 32}
              </div>
            );
          }
        })}
      </div>
      <div className="grid grid-cols-1 rounded-xl lg:border-2  border-0 mt-9">
        {schedules.map((schedule, index) => {
          return (
            <div
              key={index}
              className={`p-4 flex flex-col ${
                schedule.main === "Workout with Ella"
                  ? "lg:border-b-0"
                  : "lg:border-b-2"
              }  border-b`}
            >
              <p className="text-gray-500 text-sm">
                <span className="px-2 mr-2  rounded-full bg-blue-950 font-normal"></span>
                {schedule.time}
              </p>
              <p className="text-lg font-medium ">{schedule.main}</p>
              <p className="text-gray-500 text-sm ">{schedule.desc}</p>
            </div>
          );
        })}
      </div>
      <Modal>
        <Modal.Toggle toggleName="Update">
          <div className="flex justify-center align middle my-10  ">
            <button className="mx-auto border-2 shadow-lg px-5 py-1.5 rounded-lg flex ">
              View More
              <MdKeyboardDoubleArrowDown className="mt-1 h-4 w-4" />
            </button>
          </div>
        </Modal.Toggle>
        <Modal.Window windowName="Update">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Matrix;
