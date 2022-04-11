import Button from "./UI/Button";
import classes from "./Header.module.css";

const Header = (props) => {
  let title = props.openCounter === false ? "Let's start" : "Close";

  return (
    <header className={classes.header}>
      <h1>Counter App</h1>
      <Button onClick={props.onClickBtn}>{title}</Button>
    </header>
  );
};

export default Header;
