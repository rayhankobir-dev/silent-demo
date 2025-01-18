import { useMoveBack } from "../../hooks/useMoveBack";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const FilterTegModal = () => {
  const moveBacks = useMoveBack();
  return (
    <div className="w-[310px] md:w-[37rem] h-[28rem]">
      <div className="flex py-2 border-b-[#DDDDDD] px-[16px]     border-b-[1px]">
        <div
          className="image-wrapper me-2  p-[6px] md:p-[10px]  mb-1  border-[#D0D5DD] border-[1px] cursor-pointer  rounded-[8px]"
          onClick={moveBacks}
        >
          {/* <img src={moveBack} className="h-5" alt="move-Back" /> */}
          <MdOutlineKeyboardBackspace />
        </div>

        <div className=" w-72 mt-1">
          <p className="font-semibold text-xl text-gray-900">
            Select Filter Tegs
          </p>
        </div>
      </div>

      <div className="  overflow-y-auto h-96 mx-4 no-scrollbar">
        <div>
          <ul className=" space-y-1  list-inside ">
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Nudity
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Hate
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Violence
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Self-harm
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Bullying/Harassment
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Drugs & Alcohol
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Sensitive
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Spam
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Misleading
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Politics
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Religion
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Bullying
                </label>
              </div>
            </li>
            <li className="flex items-center mt-4 border-b">
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-4 font-semibold text-xl"
                >
                  Gore
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterTegModal;
