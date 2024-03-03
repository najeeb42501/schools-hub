import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  username: "Guest",
  email: "",
  password: "",
  type: "guest",
};

const AppContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
