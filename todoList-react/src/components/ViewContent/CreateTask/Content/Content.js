import classes from "./Content.module.css";

function Content(props) {
  const setData = props.setData;
  const data = props.data;

  //css
  const styleContain = {
    width: "788px",
    padding: "10px 10px 0 10px",
    border: "1px solid #e2e2e2",
    borderRadius: "10px",
  };
  const styleInput = {
    width: "90%",
    height: "20px",
    border: "none",
    outline: "none",
    fontWeight: "600",
    color: "#303030",
  };
  const styleTextarea = {
    fontSize: "13px",
    lineHeight: "18px",
    width: "99%",
    height: "115px",
    border: "none",
    outline: "none",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Apple Color Emoji,Helvetica,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol",
  };

  //handle
  const setUserName = (e) =>
    setData(({ userDescription }) => {
      return {
        userName: e.target.value,
        userDescription,
      };
    });

  const setUserDescription = (e) =>
    setData(({ userName }) => {
      return { userName, userDescription: e.target.value };
    });

  //return JSX
  return (
    <div className={classes.responsive} style={styleContain}>
      <input
        type="text"
        value={data.userName}
        style={styleInput}
        maxLength="100"
        placeholder="Name"
        onChange={setUserName}
      />
      <textarea
        id="text"
        name="text"
        value={data.userDescription}
        placeholder="Description"
        style={styleTextarea}
        onChange={setUserDescription}
      ></textarea>
    </div>
  );
}

export default Content;
