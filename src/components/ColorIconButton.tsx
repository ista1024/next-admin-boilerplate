import { styled, useTheme, Theme } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

const ColorIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default ColorIconButton;
