import { useState } from "react";

import Button from "../../../UI/Button";

function UpdatingTask({ route }) {
  const todoList = JSON.parse(localStorage.getItem("todoList"));
  const id = todoList[route][0];

  //state of user input
  const [data, setData] = useState({
    userName: todoList[route][1],
    userContent: todoList[route][2],
  });

  const isValid =
    data?.userName?.trim().length > 0 && data?.userContent?.trim().length > 0;

  //date
  const now = Date(Date.now()).split(" ");

  //css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
    padding: "5px 0px 10px 0px",
    userSelect: "none",
  };

  const styleContainer_text = {
    display: "flex",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#818181",
  };

  const styleSpan = {
    fontWeight: "700",
    paddingRight: "5px",
  };

  const styleTextarea = {
    fontSize: "14px",
    lineHeight: "18px",
    width: "380px",
    border: "none",
    outline: "none",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Apple Color Emoji,Helvetica,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol",
  };

  //handle
  const submitHandle = (e) => {
    e.preventDefault();

    // data user
    const name = e.target[0].value;
    const content = e.target[1].value;
    const date = now.slice(0, 3);

    //update user
    todoList[id] = [id, name, content, date];
    localStorage.setItem("todoList", JSON.stringify(todoList));

    setData({ userName: "", userContent: "" });
  };

  //handle
  const setUserName = (e) =>
    setData(({ userContent }) => {
      return {
        userName: e.target.value,
        userContent,
      };
    });

  const setUserContent = (e) =>
    setData(({ userName }) => {
      return { userName, userContent: e.target.value };
    });

  return (
    <form style={styleContainer} onSubmit={submitHandle}>
      {/* ID */}
      <div style={styleContainer_text}>
        <span style={styleSpan}>ID:</span>
        <div>{id}</div>
      </div>

      {/* user name */}
      <div style={styleContainer_text}>
        <span style={styleSpan}>Name:</span>
        <input
          value={data.userName}
          maxLength="26"
          style={{
            border: "none",
            outline: "none",
            borderBottom: "1px solid #e9e9e9",
          }}
          type="text"
          onChange={setUserName}
          autoFocus
        />
      </div>

      {/* content */}
      <div style={styleContainer_text}>
        <span style={styleSpan}>Content:</span>

        <textarea
          name="text"
          value={data.userContent}
          style={{
            ...styleTextarea,
            border: "none",
            outline: "none",
          }}
          onChange={setUserContent}
        ></textarea>
      </div>
      <Button isValid={isValid} text="Update" />
    </form>
  );
}

export default UpdatingTask;
