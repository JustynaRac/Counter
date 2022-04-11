import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const [openCounter, setOpenCounter] = useState(false);

  const openCounterHandler = () => {
    setOpenCounter(!openCounter);
  };

  return (
    <Fragment>
      <Header onClickBtn={openCounterHandler} openCounter={openCounter} />
      {openCounter && <Counter openCounterHandler={openCounterHandler} />}
    </Fragment>
  );
}

export default App;
