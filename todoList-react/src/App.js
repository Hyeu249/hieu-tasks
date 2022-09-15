import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ViewContent from "./components/ViewContent/ViewContent";

function App() {
  return (
    <Fragment>
      {/* useless Navbar, only display purpose */}
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar /> {/* --> redirect the routes */}
        <ViewContent /> {/* --> Render content based on routes */}
      </div>
    </Fragment>
  );
}

export default App;
