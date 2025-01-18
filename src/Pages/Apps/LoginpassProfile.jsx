import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

import { FaArrowRight, FaUser } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Upgrade from "../../components/Shared/Upgrade";
import Modal from "../../components/Shared/Modal";
import Delete from "../../assets/images/delete.png";
import Instagram from "../../assets/images/SocialApps/Instagram.png";
import { FaLocationDot } from "react-icons/fa6";

const LoginpassProfile = () => {
  return (
    <div>
      {/* second column */}
      <div className="">
        <Modal>
          {/* head */}
          <div className="text-lg font-bold p-0 md:p-2 ">
            <ul className="flex p-2 ">
              <li className="flex-none w-20 pt-2 border-none ">
                <img className="w-20 h-20  m-auto" src={Instagram} alt="img" />
              </li>
              <li className="p-1 ms-2 flex-1 w-30 font-semibold border-none">
                <div>
                  <p className="text-lg">Instagram</p>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <FaUser className="rounded-lg" />
                    </p>
                    <p className="ps-1">@martinrando***</p>
                  </div>
                  <div className={`text-gray-400 flex font-normal`}>
                    <p className="my-auto ">
                      <IoIosLock className="text-gray-400" />
                    </p>
                    <p className="ps-1">martin$4488***</p>
                  </div>
                </div>
              </li>
              <li className="p-1 w-20 text-gray-400 font-semibold pt-4 border-none">
                <div className="flex justify-end gap-4 mt-6 ">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          {/* body */}
          <div className="overflow-y-scroll h-[calc(100%-8rem)] no-scrollbar">
            <p className="border-b text-gray-400  p-2">Login Activity</p>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">Los Angeles, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Tue, May 21, 2024 02:30 PM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">Dollas, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Tue, May 21, 2024 4:20 PM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">San Jose, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Wed, May 20, 2024 10:05 AM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">Chicago, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Wed, May 20, 2024 8:20 AM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">New York, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mon, May 16, 2024 9:45 AM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">San Diego, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mon, May 14, 2024 7:30 AM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">Charlotte, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Mon, May 15, 2024 9:15 PM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>
            <ul className="flex p-2 liborder ">
              <li className="p-1 flex-1 w-64 font-semibold ">
                <div>
                  <div className={` flex font-bold`}>
                    <p className="my-auto ">
                      <FaLocationDot />
                    </p>
                    <p className="ps-1">Philadelphia, USA</p>
                  </div>
                  <div className={`text-gray-400  font-normal`}>
                    <p className="ps-1">Sat, May 15, 2024 6:45 PM</p>
                  </div>
                </div>
              </li>
              <li className="p-1 text-gray-400 font-semibold pt-2 ">
                <div className=" gap-4 mt-2">
                  <Modal.Toggle toggleName="Update">
                    <div className="hidden md:block">
                      <img className="h-6 cursor-pointer" src={Delete} alt />
                    </div>
                  </Modal.Toggle>
                </div>
              </li>
            </ul>

            <div className="flex p-2 justify-between">
              <div aria-label="Page navigation example">
                <div className="hidden md:block">
                  <ul className="inline-flex -space-x-px text-base h-10">
                    <Modal.Toggle toggleName="Update">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                        >
                          <FaArrowLeft />
                        </a>
                      </li>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                          1
                        </a>
                      </li>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                          ...
                        </a>
                      </li>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
                        >
                          10
                        </a>
                      </li>
                    </Modal.Toggle>
                    <Modal.Toggle toggleName="Update">
                      <li>
                        <a
                          href="#"
                          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                        >
                          <FaArrowRight />
                        </a>
                      </li>
                    </Modal.Toggle>
                  </ul>
                </div>
              </div>

              <div className="m-auto md:m-0">
                <Modal.Toggle toggleName="Update">
                  <button
                    type="button"
                    className="text-gray-900 gap-2  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center   me-2 mb-2"
                  >
                    <MdKeyboardDoubleArrowDown size={30} />
                    View More
                  </button>
                </Modal.Toggle>
              </div>
            </div>
          </div>
          <Modal.Window windowName="Update">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
};

export default LoginpassProfile;
