import classs from "./Button.module.css";

function Button({ isValid, text, style, handle }) {
  return (
    <button
      onClick={handle}
      className={`${isValid ? classs.active : ""} `}
      style={{
        backgroundColor: `${isValid ? "#db4c3f" : "#ffb2ab"}`,
        fontSize: "13px",
        fontWeight: "600",
        marginLeft: "90%",
        marginTop: "10px",
        padding: "8px 12px 8px 12px",
        border: "none",
        borderRadius: "5px",
        color: "white",
        cursor: `${isValid ? "pointer" : "no-drop"}`,
        ...style,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
