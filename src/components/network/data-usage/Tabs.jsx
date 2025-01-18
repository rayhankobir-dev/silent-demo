import Switch from "../../../UI/Switch";
import dnld from "../../../assets/images/fr.png";
import upld from "../../../assets/images/uploadd.png";

function Tabs() {
  return (
    <div className="lg:mx-4 mx-0 lg:mt-10 lg:border-0 border-t">
      <section className="grid lg:grid-cols-4 grid-cols-1 lg:border-2 border-0 border-gray-200 rounded-xl ">
        <div className="py-2.5 px-2.5 lg:border-r-2 lg:border-b-0 border-b ">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <h3 className="font-semibold text-md">Network Limit</h3>
              </div>
              <div className="flex">
                <p className="text-gray-500 text-sm">Off</p>
              </div>
            </div>
            <div className="mt-3">
              <Switch />
            </div>
          </div>
        </div>
        <div className="py-2.5 px-2.5 lg:border-r-2 lg:border-b-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex">
                <div>
                  <h3 className="font-semibold text-md">Wifi Network Limit</h3>
                  <p className="text-gray-500 text-sm">On</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Switch />
            </div>
          </div>
        </div>

        <div className="py-2.5 px-2.5 lg:border-r-2 border-b lg:border-b-0">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <img className="h-6 w-6 mr-1" src={dnld}></img>
                <h3 className="font-semibold text-md">Downloaded</h3>
              </div>
              <p className=" text-sm font-medium">
                130.77 GB{" "}
                <span className="text-gray-500 text-xs">Data Uploaded</span>
              </p>
            </div>
          </div>
        </div>

        <div className="py-2.5 font-medium px-2.5 lg:border-0 border-b">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="flex ">
                <img className="w-6 h-6" src={upld} />

                <h3 className="font-semibold text-md">Uploaded</h3>
              </div>
              <p className=" text-sm">
                1.20 GB{" "}
                <span className="text-gray-500 text-xs">Data Downloaded</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
