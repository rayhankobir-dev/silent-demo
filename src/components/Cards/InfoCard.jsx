/* eslint-disable react/prop-types */
export default function InfoCard(props) {
  const { title = "", titleRight = "", className = "", children = "" } = props;
  return (
    <section className={`${className}  shadow-blue-200   `}>
      <div className="capitalize flex justify-between flex-wrap items-center text-[16px] weight-[500]">
        <h2 className=" text-black/50 font-medium ">{title}</h2>
        <div className="text-[#007AFF] font-medium">{titleRight}</div>
      </div>
      <div className="rounded-lg py-1 text-[18px] font-medium">{children}</div>
    </section>
  );
}
