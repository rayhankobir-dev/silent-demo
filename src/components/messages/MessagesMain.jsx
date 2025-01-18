import Messages from "./components/Messages";
import Card from "../../UI/Card";
import CallsHead from "../Calls/CallsHead";

function MessagesMain() {
  return (
    <Card>
      <CallsHead
        heading={"Messages"}
        placeholder={"Search by Name or Phone Number"}
      />
      <Messages />
    </Card>
  );
}

export default MessagesMain;
