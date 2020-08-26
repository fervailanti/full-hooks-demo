import React, { useContext, useCallback } from "react";
import { FruitContext } from "../providers/Fruit";
import Button from "../components/Button";
import FruitIcon from "../components/FruitIcon";
import "../styles.css";

const MyFruit = () => {
  const [fruit, setFruit] = useContext(FruitContext);

  const actions = {
    setApple: useCallback(() => {
      setFruit({ type: "setName", name: "Apple" });
    }, [setFruit]),
    setBanana: useCallback(() => {
      setFruit({ type: "setName", name: "Banana" });
    }, [setFruit]),
    clear: useCallback(() => {
      setFruit({ type: "setName", name: "" });
    }, [setFruit])
  };

  const currentFruit = fruit?.name || "...";

  return (
    <div className="App">
      <p>
        Fruit: <b>{currentFruit}</b>
      </p>
      <FruitIcon />
      <Button action={actions.setApple}>Set Apple</Button>
      <Button action={actions.setBanana}>Set Banana</Button>
      <Button action={actions.clear}>Clear</Button>
    </div>
  );
};

export default MyFruit;
