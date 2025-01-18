import Tabs from "./Tabs";
import Card from "../../../UI/Card";
import DataTable from "./DataTable";
import CallsHead from "../../Calls/CallsHead";

function WifiMain() {
  return (
    <Card>
      <CallsHead heading={"Wifi Network"} placeholder={"Search by Wifi Name"} />
      <Tabs />
      <DataTable />
    </Card>
  );
}

export default WifiMain;
