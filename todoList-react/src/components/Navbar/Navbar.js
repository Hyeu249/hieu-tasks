import classes from "./Navbar.module.css";

// Icon components return img element
import MenuIcon from "../../Icons/MenuIcon";
import HomeIcon from "../../Icons/HomeIcon";
import SearchIcon from "../../Icons/SearchIcon";
import AddIcon from "../../Icons/AddIcon";
import ProductivityIcon from "../../Icons/ProductivityIcon";
import QuestionMarkIcon from "../../Icons/QuestionMarkIcon";
import NotificationIcon from "../../Icons/NotificationIcon";
import AvatarIcon from "../../Icons/AvatarIcon";

function Navbar() {
  return (
    <div className={classes.top_bar}>
      <div className={classes.LeftSide}>
        <MenuIcon className={classes.leftSide_icon} />
        <HomeIcon className={classes.leftSide_icon} />
        <SearchIcon className={classes.leftSide_icon} />
      </div>
      <div className={classes.RightSide}>
        <AddIcon className={classes.rightSide_icon} />
        <ProductivityIcon className={classes.rightSide_icon} />
        <QuestionMarkIcon className={classes.rightSide_icon} />
        <NotificationIcon className={classes.rightSide_icon} />
        <AvatarIcon className={classes.rightSide_icon} />
      </div>
    </div>
  );
}

export default Navbar;
