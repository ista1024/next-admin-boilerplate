import React, { useState } from "react";
import Image from "next/image";
import { styled, useTheme, Theme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import sideMenu, {
  hasSubMenu,
  SideMenuConstProps,
} from "@/const/menu/sideMenu";

interface SideMenuProps {
  open: boolean;
  handleOpen: () => void;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function SideMenu({ open, handleOpen }: SideMenuProps) {
  const theme = useTheme();
  const [showMenu, setMenu] = useState<boolean[]>([]);

  const handleSubMenu = (index: number) => {
    // setShowHistoryMenu(!showHistoryMenu);
    return (
      <div>{showMenu[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
    );
  };

  const handleSubMenuClick = (idx: number) => {
    const newShowMenu = [...showMenu];
    newShowMenu[idx] = !showMenu[idx];
    setMenu(newShowMenu);
  };

  return (
    <div>
      <DrawerHeader>
        <Image
          src="/images/logo_ictk_white_125x65.png"
          alt="logo"
          width="125"
          height="65"
        />
        <IconButton onClick={() => handleOpen()}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sideMenu.menus.map((menu, index) => (
          <div key={menu.title + index}>
            <ListItem
              key={menu.title}
              onClick={() => {
                hasSubMenu(menu) ? handleSubMenuClick(index) : null;
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                {open ? <ListItemText primary={menu.title} /> : null}
                {hasSubMenu(menu) ? handleSubMenu(index) : null}
              </ListItemButton>
            </ListItem>
            {hasSubMenu(menu) ? (
              <Collapse in={showMenu[index]} timeout="auto" unmountOnExit>
                <List>
                  {menu.subMenu.map((subMenu) => (
                    <ListItem key={subMenu.title} disablePadding>
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        {open ? <ListItemText primary={subMenu.title} /> : null}
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </div>
        ))}
      </List>
    </div>
  );
}
