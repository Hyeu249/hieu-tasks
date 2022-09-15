import HeaderOfTasks from "../../ReuseComponents/HeaderOfTasks/HeaderOfTasks";
import ExpectedTask from "./ExpectedTask/ExpectedTask";

import { useParams } from "react-router-dom";

function ItemOfReading() {
  // path --> id user
  const { path } = useParams();

  //css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
  };
  return (
    <div className={`none_1150w responsive`} style={styleContainer}>
      {/* render only text */}
      <HeaderOfTasks text="Reading" />
      {/* line */}
      <div style={{ width: "100%", borderTop: "1px solid #cbcbcb" }}></div>

      {/* <ExpectedTask/> take id and render the item of that id */}
      <ExpectedTask route={path} />
    </div>
  );
}

export default ItemOfReading;
