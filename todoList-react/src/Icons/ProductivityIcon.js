import classes from "./Icons.module.css";

function ProductivityIcon(props) {
  return (
    <div className={`${classes.classIcon} ${classes.hover} ${props.className}`}>
      <svg
        viewBox="-2 -2 4 4"
        style={{ width: "24px", height: "24px", color: "white" }}
      >
        <circle
          cx="0"
          cy="0"
          r="1.4"
          fill="none"
          visibility="visible"
          stroke="currentColor"
          strokeWidth="0.2"
        ></circle>
        <path
          style={{ fill: "#f7f5f5" }}
          d="M 1 0 A 1 1 0 1 1 -0.8090169943749475 -0.587785252292473 L 0 0"
        ></path>
      </svg>
      <div style={{ fontSize: "13px", color: "white", marginLeft: "4px" }}>
        3/5
      </div>
    </div>
  );
}

export default ProductivityIcon;
