import ExportHeader from "../components/Export/ExportHeader";
import ExportForm from "../components/Export/ExportForm";
const Export = () => {
  return (
    <div className="main sm:ps-3 sm:pe-3 sm:pt-0">
      <ExportHeader />
      <div className="my-7 ps-3 pe-3">
        <ExportForm />
      </div>
    </div>
  );
};

export default Export;
