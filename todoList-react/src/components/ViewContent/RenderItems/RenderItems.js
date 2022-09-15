import HeaderOfTasks from "../../ReuseComponents/HeaderOfTasks/HeaderOfTasks";
import Task from "./Task/Task";
//Usage:
//   - <Task/> display item and attaching a handle that navigate to the "id path",
//             the path which performing the real CRUD operation
function RenderItems({ route }) {
  const todoList =
    Object.values(JSON.parse(localStorage.getItem("todoList"))) || [];

  //css
  const styleContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
  };

  return (
    <div className="responsive" style={styleContainer}>
      <HeaderOfTasks text={`Tasks to ${route}`} />

      {/* line */}
      <div style={{ width: "100%", borderTop: "1px solid #cbcbcb" }}></div>

      {/* items of users */}
      {todoList.map(([id, name, content, date]) => {
        return (
          <Task
            key={id}
            id={id}
            name={name}
            content={content}
            date={date}
            route={route}
          />
        );
      })}
    </div>
  );
}

export default RenderItems;
