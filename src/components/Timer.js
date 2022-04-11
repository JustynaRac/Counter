import React, { useState, useEffect } from "react";

import classes from "./Timer.module.css";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setMinutes(0);
      setSeconds(59);
      if (seconds !== 0) {
        setSeconds(seconds - 1);
      }

      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        props.openCounterHandler();
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <React.Fragment>
      <div className={classes.timer}>
        {"0" + minutes}:{seconds < 10 ? "0" + seconds : seconds}
      </div>
    </React.Fragment>
  );
};

export default Timer;
