import { useNavigate } from "react-router-dom";
import classes from "./Task.module.css";

import ListIcon from "../../../../Icons/ListIcon";
import LoadsIcon from "../../../../Icons/LoadsIcon";

function Task({ id, content, date, route }) {
  const navigate = useNavigate();

  // css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    userSelect: "none",
  };
  const styleContainer_child = {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: "10px",
  };

  const styleDot = {
    width: "18px",
    height: "18px",
    boxSizing: "border-box",
    border: "2px solid #246fe0",
    borderRadius: "50%",
    backgroundColor: "#ddebff",
  };

  const styleTaskContainer = {
    position: "relative",
    top: "-5px",
    paddingLeft: "10px",
  };

  const styleTask = {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#818181",
  };

  const styleDate = {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#692fc2",
  };

  const readingHandle = () => {
    navigate(`/${route}/${id}`);
  };

  return (
    <div style={styleContainer} onClick={readingHandle}>
      <div
        className={`${classes.container_child}`}
        style={styleContainer_child}
      >
        {/* dot */}
        <div className={classes.dot} style={styleDot}></div>

        {/* task container*/}
        <div style={styleTaskContainer}>
          {/* task/item */}
          <div className={classes.task} style={styleTask}>
            {content}
          </div>

          {/* date */}
          <div style={styleDate}>
            <ListIcon />
            {date[0]}day
            <LoadsIcon />
          </div>
        </div>
      </div>
      {/* line */}
      <div style={{ width: "95%", borderTop: "1px solid #cbcbcb" }}></div>
    </div>
  );
}

export default Task;
