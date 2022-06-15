import { createContext, useReducer } from "react";
import { ThemeProvider } from "@mui/material";

import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";

export const ThemeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  darkMode: false,
};

export const ThemeContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setDarkMode = (val) => {
    dispatch({
      type: "SET_THEME",
      payload: val,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode: state.darkMode,
        setDarkMode,
      }}
    >
      <ThemeProvider theme={state.darkMode.payload ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
