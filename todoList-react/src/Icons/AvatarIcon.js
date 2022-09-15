import classes from "./Icons.module.css";

function AvatarIcon(props) {
  return (
    <div className={`${classes.avatarIcon} ${props.className}`}>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "450",
          color: "#db4c3f",
        }}
      >
        BH
      </div>
    </div>
  );
}

export default AvatarIcon;
