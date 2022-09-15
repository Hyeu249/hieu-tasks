import classes from "./Icons.module.css";

function MenuIcon(props) {
  return (
    <svg
      className={`${classes.classIcon} ${classes.hover} ${props.className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        style={{ fill: "#f7f5f5" }}
        fillRule="evenodd"
        d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
      ></path>
    </svg>
  );
}

export default MenuIcon;
