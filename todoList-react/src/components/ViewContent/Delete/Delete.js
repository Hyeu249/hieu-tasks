import RenderItems from "../RenderItems/RenderItems";
import Button from "../../UI/Button";
import { useState } from "react";

function Delete() {
  //get todoList
  const todoList = JSON.parse(localStorage.getItem("todoList"));
  const isTodolist = Object.values(todoList).length;

  //state
  const [isDelete, setIsDelete] = useState(false);

  //handle
  const deleteAllHandle = () => {
    if (isDelete || !isTodolist) return;

    localStorage.setItem("todoList", JSON.stringify({}));
    setIsDelete(true);
  };

  return (
    <div>
      <RenderItems route="delete" />
      <Button
        handle={deleteAllHandle}
        isValid={isTodolist}
        text="Delete All"
        style={{ backgroundColor: "black", marginLeft: "87%" }}
      />
    </div>
  );
}

export default Delete;
