import { useNavigate } from "react-router-dom";

function Action({ operation, id, Icon, className, defaultChecked }) {
  //css
  const styleIcon = {
    width: "24px",
    height: "24px",
    padding: "0 10px 0 10px",
  };

  const navigate = useNavigate();
  return (
    <div style={{ width: "90%" }}>
      <input
        style={{ display: "none" }}
        type="radio"
        name="action"
        id={id}
        defaultChecked={defaultChecked}
      />

      <label
        className={className}
        htmlFor={id}
        onClick={() => navigate(operation.toLowerCase())}
      >
        <Icon style={styleIcon} />
        <div style={{ fontSize: "14px" }}>{operation}</div>
      </label>
    </div>
  );
}

export default Action;
