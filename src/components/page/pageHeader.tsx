import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import MenuConst from "@/const/menu/MenuConst";
import { MenuConstTypes } from "@/const/menu/sideMenu";

interface pageHeaderProps {
  title: MenuConstTypes;
}

const PageHeader = ({ title }: pageHeaderProps) => {
  const menu = MenuConst[title];

  return (
    <Box sx={{ display: "flex", alignSelf: "flex-start" }}>
      <CssBaseline />
      <Box component="div">
        <Typography variant="h5">{menu.title}</Typography>
        <Typography variant="h6" mt={1} ml={2}>
          {menu.subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageHeader;
