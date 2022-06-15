import { createContext, useReducer } from "react";
import { ThemeProvider } from "@mui/material";

import lightTheme from "@/styles/theme/lightTheme";
import darkTheme from "@/styles/theme/darkTheme";

type ThemeContextType = {
  darkMode: boolean;
  setThemeMode: (darkMode: boolean) => void;
};

type State = {
  darkMode: boolean;
};
type Action = {
  type: "SET_THEME";
  payload: boolean;
};

// TODO: change any to type
export const ThemeContext = createContext<any>(null);

const reducer = (state: State, action: Action) => {
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

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setDarkMode = (val: boolean) => {
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
      <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
