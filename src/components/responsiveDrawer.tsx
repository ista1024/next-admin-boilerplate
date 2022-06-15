import React, { useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SideMenu from "@/components/sideMenu";
import { SIDE_MENU_WIDTH } from "@/const/menu/sideMenu";

import MaterialUISwitch from "@/components/MuiSwitch";
import { palette } from "@mui/system";
import { blueGrey } from "@mui/material/colors";

import { ThemeContext } from "@/contexts/ThemeContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ff00",
    },
  },
});

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function ResponsiveDrawer({ title, children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(SIDE_MENU_WIDTH);

  const handleDrawerToggle = () => {
    setDrawerWidth(mobileOpen ? SIDE_MENU_WIDTH : 100);
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "65px",
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title ? title : "KMS ADMIN CONSOLE"}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <MaterialUISwitch />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: blueGrey[900],
            },
          }}
        >
          <SideMenu open={!mobileOpen} handleOpen={handleDrawerToggle} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: blueGrey[900],
            },
          }}
          open={mobileOpen}
        >
          <SideMenu open={!mobileOpen} handleOpen={handleDrawerToggle} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
