import { Routes, Route, Navigate } from "react-router-dom";

import CreateTask from "./CreateTask/CreateTask";
import ItemOfReading from "./ItemOfReading/ItemOfReading";
import ItemOfUpdate from "./ItemOfUpdate/ItemOfUpdate";
import RenderItems from "./RenderItems/RenderItems";
import ItemOfDelete from "./ItemOfDelete/ItemOfDelete";

import Delete from "./Delete/Delete";
//Usage:
//   - <CreateTask/>  display a place to create task
//   - <RenderItems/> render items and attach an action on items based on the type of route
//   - <Delete/>  display all items, and make these items are deletable

//   - <ItemOfReading/> display item of reading action
//   - <ItemOfUpdate/>  display item of update action
//   - <ItemOfDelete/>  display item of delete action
function ViewContent() {
  //css
  const styleContainer = {
    display: "flex",
    justifyContent: "center",
    flex: 1,
    height: "100vh",
  };

  return (
    <div style={styleContainer}>
      <Routes>
        <Route path="/create" element={<CreateTask />} />
        <Route path="/read" element={<RenderItems route="read" />} />
        <Route path="/update" element={<RenderItems route="update" />} />
        {/* <Route path="/delete" element={<RenderItems route="delete" />} /> */}
        <Route path="/delete" element={<Delete />} />
        {/*  */}
        <Route path="/read/:path" element={<ItemOfReading />} />
        <Route path="/update/:path" element={<ItemOfUpdate />} />
        <Route path="/delete/:path" element={<ItemOfDelete />} />

        {/* auto navigate to "create path" when the path is "/" */}
        <Route path="/" element={<Navigate to="create" />} />
      </Routes>
    </div>
  );
}

export default ViewContent;
