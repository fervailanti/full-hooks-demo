import React from "react";
import { FruitContextProvider } from "./providers/Fruit";
import MyFruit from "./modules/MyFruit";
import "./styles.css";

const App = () => (
  <FruitContextProvider>
    <MyFruit />
  </FruitContextProvider>
);

export default App;
