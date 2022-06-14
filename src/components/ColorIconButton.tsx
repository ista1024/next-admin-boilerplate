import { styled, useTheme, Theme } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

const ColorIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#272727"),
  backgroundColor: "#272727",
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default ColorIconButton;
