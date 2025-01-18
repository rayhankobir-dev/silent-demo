import "./browseDataUsage.css";
import ExportBtn from "../../components/pageExportBtn/PageExportBtn";

import { FaApple } from "react-icons/fa";
import CallsHead from "../../components/Calls/CallsHead";
import facebook from "../../assets/images/SocialApps/facebook.png";
import yt from "../../assets/images/SocialApps/yt.png";
import google from "../../assets/images/SocialApps/Google.png";
import twitter from "../../assets/images/SocialApps/twitter.png";
import wiki from "../../assets/images/SocialApps/compressify/wiki.png";

const BrowseDataUsage = () => {
  return (
    <>
      <CallsHead heading="Data Usage" placeholder="Search " />

      <section className="browserContainer  flex flex-col md:my-6">
        <div className=" p-2 md:p-4 w-full md:rounded-t-lg rounded-none border border-slate-200   ">
          <h3 className="md:ps-0 ps-3 flex font-semibold text-lg">
            <span className="text-2xl font-extrabold">2.40 GB</span>&nbsp; of
            Website data used
          </h3>
          <p className="text-black/50 text-base md:ps-0 ps-3">Today</p>
        </div>

        <div className="browseHistoryCon  flex flex-col border md:rounded-b-lg">
          <div className="browseHistoryCol flexStartData flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <FaApple />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">apple.com</h3>
              <p className="text-slate-500">324.76 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData   flex">
            <div className="browseHistoryDate flex flex-col">
              <img className="w-10 h-10  m-auto" src={yt} alt />
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Youtube</h3>
              <p className="text-slate-500">190.42 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData  flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={google}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Google</h3>
              <p className="text-slate-500">432.55 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData   flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={facebook}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Facebook</h3>
              <p className="text-slate-500">589.23 MB</p>
            </div>
          </div>
          <div className="browseHistoryCol flexStartData  flex">
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img
                  className="w-10 h-10 rounded-full m-auto"
                  src={twitter}
                  alt
                />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Twitter</h3>
              <p className="text-slate-500">76.98 MB</p>
            </div>
          </div>
          <div
            className="browseHistoryCol flexStartData  flex"
            style={{ border: "none" }}
          >
            <div className="browseHistoryDate flex flex-col">
              <span>
                <img className="w-10 h-10 rounded-full m-auto" src={wiki} alt />
              </span>
            </div>
            <div className="browseHistoryDes flex flex-col">
              <h3 className="font-semibold">Wikipedia</h3>
              <p className="text-slate-500">843.34 MB</p>
            </div>
          </div>
        </div>
      </section>
      <ExportBtn />
    </>
  );
};

export default BrowseDataUsage;
