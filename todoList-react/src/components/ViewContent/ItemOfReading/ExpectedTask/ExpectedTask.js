function ExpectedTask({ route }) {
  const expectedUserArray = JSON.parse(localStorage.getItem("todoList"))[route];

  // data user
  const id = expectedUserArray[0];
  const name = expectedUserArray[1];
  const content = expectedUserArray[2];

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

export default ExpectedTask;
