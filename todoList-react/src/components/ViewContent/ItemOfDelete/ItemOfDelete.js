import { useParams } from "react-router-dom";

import HeaderOfTasks from "../../ReuseComponents/HeaderOfTasks/HeaderOfTasks";
import ItemIsDeleted from "./ItemIsDeleted/ItemIsDeleted";

function ItemOfDelete() {
  // path --> id of user
  const { path } = useParams();

  //css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
  };

  return (
    <div className="none_1150w responsive" style={styleContainer}>
      {/* display only text */}
      <HeaderOfTasks text="Delete" />
      {/* line */}
      <div style={{ width: "100%", borderTop: "1px solid #cbcbcb" }}></div>
      <div style={{ paddingTop: "10px" }}>Successfully delete 💎</div>

      {/* <ItemIsDeleted/> --> display the deleted item */}
      <ItemIsDeleted route={path} />
    </div>
  );
}

export default ItemOfDelete;
