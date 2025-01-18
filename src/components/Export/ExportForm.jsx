/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import ExportSelect from "../Shared/ExportSelect";
import Check from "../Shared/Check";
import Button from "../Shared/Button";
import exporticon from "../../../src/assets/images/Export/export.png";
import Modal from "../../../src/components/Shared/Modal";
import Upgrade from "../../../src/components/Shared/Upgrade";

const ModuleOptions = [{ label: "Call Logs", value: "CallLogs" }];

const ItemsOptions = [{ label: "1-1000", value: "1-1000" }];

const CSVOptions = [{ label: "CSV", value: "CSV" }];

const ExportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //Form data here for integration
  };

  const module = () => {};
  const item = () => {};
  const format = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 ">
        <Modal>
          <Modal.Toggle toggleName="selectModule">
            <ExportSelect
              label="Module"
              options={ModuleOptions}
              register={register("module")}
              onclick={module}
              placeholder="Call Logs"
            />
          </Modal.Toggle>
          <Modal.Window windowName="selectModule">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
      <div className="mb-4">
        <Modal>
          <Modal.Toggle toggleName="itemModule">
            <ExportSelect
              label="Items"
              options={ItemsOptions}
              register={register("Items")}
              onclick={item}
              placeholder="1-1000"
            />
          </Modal.Toggle>
          <Modal.Window windowName="itemModule">
            <Upgrade />
          </Modal.Window>
        </Modal>
      </div>
      <div className="mb-4">
        <ExportSelect
          label="Format"
          options={CSVOptions}
          register={register("Format")}
          onclick={format}
          placeholder="CSV"
        />
      </div>
      <Check label="Delete Exported Data from Dashboard" />
      <div className="lower flex flex-col">
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          Notes:
        </span>
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          1.Media files can be directly download in each feature.
        </span>
        <span className="text-[16px] text-[#000000] font-medium opacity-[50%]">
          2.Only 1000 records can be exported at a time.
        </span>
      </div>
      <Modal>
        <Modal.Toggle toggleName="exportData">
          <Button
            type="submit"
            className="bg-[#172A6E] w-full mt-5 p-[12px] text-[#ffffff] text-[20px] rounded-[8px] "
          >
            <img src={exporticon} alt="exporticon" className="pe-3 h-6" />
            Export Data
          </Button>
        </Modal.Toggle>
        <Modal.Window windowName="exportData">
          <Upgrade />
        </Modal.Window>
      </Modal>
    </form>
  );
};

export default ExportForm;
