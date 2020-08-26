import React, { useReducer, createContext } from "react";

export const FruitContext = createContext();

const initialState = JSON.parse(sessionStorage.getItem("fruit"));

const fruitReducer = (state, { type, name }) => {
  const actions = {
    setName: {
      ...state,
      name
    }
  };
  sessionStorage.setItem("fruit", JSON.stringify(actions[type]));
  return actions[type];
};

export const FruitContextProvider = (props) => {
  const [fruit, dispatch] = useReducer(fruitReducer, initialState);
  return (
    <FruitContext.Provider value={[fruit, dispatch]}>
      {props.children}
    </FruitContext.Provider>
  );
};
