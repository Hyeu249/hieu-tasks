import { useParams } from "react-router-dom";

import HeaderOfTasks from "../../ReuseComponents/HeaderOfTasks/HeaderOfTasks";
import UpdatingTask from "./UpdatingTask/UpdatingTask";

function ItemOfUpdate() {
  // ID user
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
      <HeaderOfTasks text="Updating" />
      {/* line */}
      <div style={{ width: "100%", borderTop: "1px solid #cbcbcb" }}></div>
      <UpdatingTask route={path} />
    </div>
  );
}

export default ItemOfUpdate;
