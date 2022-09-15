import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./CreateTask.module.css";

import DateOfSubmit from "./DateOfSubmit/DateOfSubmit";
import Content from "./Content/Content";
import Button from "../../UI/Button";

function CreateTask() {
  //state of user input
  const [data, setData] = useState({ userName: "", userDescription: "" });
  const isValid =
    data?.userName?.trim().length > 0 &&
    data?.userDescription.trim().length > 0;

  //date
  const now = Date(Date.now()).split(" ");

  //submit
  const submitTask = (e) => {
    e.preventDefault();
    if (!isValid) return;

    //data to submit
    const id = uuidv4();
    const name = e.target[0].value;
    const content = e.target[1].value;
    const date = now.slice(0, 3);

    // get from localStorage
    let todoList = JSON.parse(localStorage.getItem("todoList"));

    if (!todoList) todoList = {};

    //set todoList to localStorage
    todoList[id] = [id, name, content, date];
    localStorage.setItem("todoList", JSON.stringify(todoList));

    //reset user input
    setData({ userName: "", userDescription: "" });
  };

  return (
    <form className={`${classes.createTask}`} onSubmit={submitTask}>
      {/* <DateOfSubmit /> display the current date */}
      <DateOfSubmit />
      {/*  <Content/> handle user input */}
      <Content data={data} setData={setData} />

      <Button isValid={isValid} text="Add task" />
    </form>
  );
}

export default CreateTask;
