import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
function RootLayout() {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);

  return (
    <div className="flex gap-0">
      <Sidebar open={open} setOpen={setOpen} isTabletMid={isTabletMid} />

      <main
        className={`fullfill bg-white   ${
          open
            ? "sm:ml-0 md:ml-0 lg:ml-[256px]"
            : "sm:ml-0 md:ml-[0px] lg:ml-[57px]"
        } overflow-y-auto h-screen`}
      >
        <Alert />
        <Navbar open={open} setOpen={setOpen} isTabletMid={isTabletMid} />
        <div className=" flex-1 md:mx-auto py-0 md:py-4 mt-14 md:mt-32 sm:mx-2 md:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
