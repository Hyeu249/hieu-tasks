function HeaderOfTasks({ text }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        paddingTop: "36px",
        paddingBottom: "20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: 700, lineHeight: "25px" }}>
        {text}
      </div>

      <div></div>
    </div>
  );
}

export default HeaderOfTasks;
