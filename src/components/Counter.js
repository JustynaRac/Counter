import { useReducer } from "react";
import Button from "./UI/Button";
import classes from "./Counter.module.css";
import Timer from "./Timer";

const initialState = { counter: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      throw new Error();
  }
}

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const resetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <main className={classes.counter}>
      <Timer openCounterHandler={props.openCounterHandler} />
      <div className={classes.value}>{state.counter}</div>
      <div>
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={decrementHandler}>Decrement</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </div>
    </main>
  );
};

export default Counter;
