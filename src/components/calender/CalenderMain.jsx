import Matrix from "./components/Matrix";
import Card from "../../UI/Card";
import Header from "./components/Header";
import CallsHead from "../Calls/CallsHead";

function CalenderMain() {
  const headerData = {
    location: "May, 2022",
    placeHolder: "Search Photos",
  };
  return (
    <Card>
      <div className="md:hidden block">
        <CallsHead heading={"Calendar"} placeholder="Search" />
      </div>
      <Header heading="May,2022" data={headerData} />

      <Matrix />
    </Card>
  );
}

export default CalenderMain;
