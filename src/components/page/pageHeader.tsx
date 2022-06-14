import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import { MenuProps } from "@/const/menu/MenuConst";

const PageHeader = ({ title, subtitle }: MenuProps) => {
  return (
    <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
      <CssBaseline />
      <Box component="div">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6" mt={1} ml={2}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageHeader;
