import { useEffect } from "react";

function ItemIsDeleted({ route }) {
  // get list
  const todoList = JSON.parse(localStorage.getItem("todoList"));

  // data user
  const id = todoList[route][0];
  const name = todoList[route][1];
  const content = todoList[route][2];

  //delete item in local storage
  delete todoList[route];

  //Stricmode make this component called 2 times
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, []);

  //css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    padding: "5px 0px 10px 0px",
    cursor: "pointer",
    userSelect: "none",
  };

  const styleText = {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#818181",
  };

  const styleBold = {
    fontWeight: "700",
  };

  return (
    <div style={styleContainer}>
      {/* ID */}
      <div style={styleText}>
        <span style={styleBold}>ID:</span> {id}
      </div>
      {/* name */}
      <div style={styleText}>
        <span style={styleBold}>Name:</span> {name}
      </div>
      {/* content */}
      <div style={styleText}>
        <span style={styleBold}>Content:</span> {content}
      </div>
    </div>
  );
}

export default ItemIsDeleted;
