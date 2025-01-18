import camera from "../../assets/images/camera.png";

const Camera = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={camera} alt="camera" className="h-auto max-w-[100%]" />
      <div className="flex flex-col ms-3">
        <h1 className=" text-[20px] text-[#000000]  font-[600]">Camera</h1>
        <span className="text-[14px] opacity-[50%] text-[#000000] font-medium">
          Apps with this permission can access your camera
        </span>
      </div>
    </div>
  );
};

export default Camera;
