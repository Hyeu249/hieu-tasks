import FilterIcon from "../../../../Icons/FilterIcon";

function DateOfSubmit() {
  //get current date
  const now = Date(Date.now()).split(" ");
  const date = `${now[0]} ${now[2]} ${now[1]}`;

  //css
  const styleContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "36px 0 10px 0",
  };

  const styleContainer_child_today = {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "25px",
  };

  const styleContainer_child_date = {
    position: "relative",
    top: "8px",
    left: "8px",
    fontSize: "12px",
    color: "#808080",
  };

  return (
    <div style={styleContainer}>
      {/* Todate */}
      <div style={{ display: "flex" }}>
        <div style={styleContainer_child_today}>Today</div>
        <div style={styleContainer_child_date}>{`${date}`}</div>
      </div>

      {/* filter & view */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          color: "#808080",
        }}
      >
        <FilterIcon />
        View
      </div>
    </div>
  );
}

export default DateOfSubmit;
