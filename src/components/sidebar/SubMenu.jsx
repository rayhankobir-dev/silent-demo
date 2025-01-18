/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import Modal from "../Shared/Modal";
import BuyNow, { BuyNow2 } from "../Shared/BuyNow";
import Premium from "../../assets/images/sideicon/SideBar/Premium.png";

export function SubMenu2({ data, open }) {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  useEffect(() => {
    // Update subMenuOpen state when the value of open prop changes
    if (!open) {
      setSubMenuOpen(false);
    }
  }, [open]);
  return (
    <>
      <NavLink
        to="/SocialApps"
        className="link capitalize liborder"
        style={{ padding: "0px" }}
      >
        {" "}
        <li
          className={`link p-[0px] w-[100%] m-0 ${pathname.includes(
            data.name
          )}`}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <img className="h-5  m-auto" src={data.icon} alt />
          <p className="flex-1 capitalize">{data.name}</p>
          <IoIosArrowDown
            className={` ${subMenuOpen && "rotate-180"} duration-200 `}
          />
        </li>
      </NavLink>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col text-[0.8rem] font-normal overflow-hidden"
      >
        {subMenuOpen ? (
          <>
            {data.subMenu?.map((menu) => (
              <>
                <li
                  key={menu}
                  className="liborder bg-gray-100 text-[16px] weight-[500]"
                >
                  {/* className="hover:text-blue-600 hover:font-medium" */}
                  {menu.link ? (
                    <NavLink
                      to={`${data.name}/${menu.link}`}
                      className="link capitalize flex "
                    >
                      <p className="ps-2">{menu.name}</p>
                    </NavLink>
                  ) : (
                    <Modal>
                      <Modal.Toggle toggleName="Update">
                        <button
                          className="link capitalize w-full"
                          toggleName="Update"
                        >
                          <div className="flex w-full">
                            <div className="flex-none w-10">
                              <img
                                className="h-5 w-5"
                                src={menu.icon}
                                alt="LOGO"
                              />
                            </div>
                            <div className=" w-4/6 ">
                              <div className="text-start hidden md:block">
                                <p className="break-word Weight-[500] ">
                                  {menu.name}
                                </p>
                                <p className="break-word Weight-[500] ">
                                  {menu.name2}
                                </p>
                              </div>
                              <div className="text-start md:hidden">
                                <p className="break-word Weight-[500] ">
                                  {menu.name}
                                  {menu.name2}
                                </p>
                              </div>
                            </div>
                            <div className="justify-end flex  w-1/3  order-last">
                              <img className="h-5 " src={Premium} alt="LOGO" />
                            </div>
                          </div>
                        </button>
                      </Modal.Toggle>
                      <Modal.Window windowName="Update">
                        <BuyNow2 />
                      </Modal.Window>
                    </Modal>
                  )}
                </li>
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </motion.ul>
    </>
  );
}
const SubMenu = ({ data, open }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    // Update subMenuOpen state when the value of open prop changes
    if (!open) {
      setSubMenuOpen(false);
    }
  }, [open]);

  return (
    <>
      <li
        className={`link liborder ${
          pathname.includes(data.name) && " text-[#172A6E]"
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <img className="h-5  m-auto" src={data.icon} alt />
        <p className="flex-1 capitalize">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col text-[0.8rem] font-normal overflow-hidden"
      >
        {subMenuOpen ? (
          <>
            {data.subMenu?.map((menu) => (
              <>
                <li
                  key={menu}
                  className="liborder bg-gray-100 text-[16px] weight-[500]"
                >
                  {/* className="hover:text-blue-600 hover:font-medium" */}
                  {menu.link ? (
                    <NavLink
                      to={`${data.name}/${menu.link}`}
                      className="link capitalize "
                    >
                      <p className="ps-2">{menu.name}</p>
                    </NavLink>
                  ) : (
                    <Modal>
                      <Modal.Toggle toggleName="Update">
                        <button
                          className="link capitalize  w-full"
                          toggleName="Update"
                        >
                          <div className="w-1/2">
                            <p className="ps-2  text-start">{menu.name}</p>
                          </div>
                          <div className="justify-end flex  w-1/2 md:hidden order-last">
                            <img className="h-5 " src={Premium} alt="LOGO" />
                          </div>
                        </button>
                      </Modal.Toggle>
                      <Modal.Window windowName="Update">
                        <BuyNow />
                      </Modal.Window>
                    </Modal>
                  )}
                </li>
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </motion.ul>
    </>
  );
};

export default SubMenu;
