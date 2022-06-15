import { styled, useTheme, Theme } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { blueGrey, grey } from "@mui/material/colors";

const ColorIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[900]),
  backgroundColor: blueGrey[900],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default ColorIconButton;
