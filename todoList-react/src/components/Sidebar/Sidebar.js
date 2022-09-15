import { useParams } from "react-router-dom";
import classes from "./Sidebar.module.css";

import Action from "./Action/Action";

import CreateIcon from "../../Icons/CreateIcon";
import ReadIcon from "../../Icons/ReadIcon";
import UpdateIcon from "../../Icons/UpdateIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
//Usage:
//   - <Action/> components display CRUD operations on the Sidebar.
//   - if one of it is clicked, the component redirect route and highlights the component itself
function Sidebar() {
  const path = Object.values(useParams())[0].split("/")[0]; //take the curent route

  return (
    <div className={classes.sidebar}>
      <Action
        operation="Create" // display the type of CRUD operator
        id={classes.create} // used to ensure that only one input is checked, means one CRUD operation is performing
        Icon={CreateIcon} // display icon of operator
        className={classes.sidebar_child}
        defaultChecked={true} // "Create" is defaulted to the first activity when the page loads
      />

      <Action
        operation="Read"
        id={classes.read}
        Icon={ReadIcon}
        className={classes.sidebar_child}
        defaultChecked={path === "read" ? true : false}
      />

      <Action
        operation="Update"
        id={classes.update}
        Icon={UpdateIcon}
        className={classes.sidebar_child}
        defaultChecked={path === "update" ? true : false}
      />

      <Action
        operation="Delete"
        id={classes.delete}
        Icon={DeleteIcon}
        className={classes.sidebar_child}
        defaultChecked={path === "delete" ? true : false}
      />
    </div>
  );
}

export default Sidebar;
