import { createTheme } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
    background: {
      default: blueGrey[900],
      paper: blueGrey[900],
    },
  },
});

export default darkTheme;
