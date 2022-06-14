import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled, useTheme, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button, { ButtonProps } from "@mui/material/Button";
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

import ColorIconButton from "@/components/ColorIconButton";

import styles from "@/styles/Global.module.css";

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
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  backgroundColor: "#272727",
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
        <Box>
          <Link href="/">
            <a className={styles.a}>
              <Image
                src="/images/logo_ictk_white_125x65.png"
                alt="logo"
                width="115"
                height="60"
              />
            </a>
          </Link>
        </Box>
        <div style={{ marginLeft: "auto" }}>
          <ColorIconButton onClick={() => handleOpen()}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </ColorIconButton>
        </div>
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
              <a href={menu.route} className={styles.a}>
                <ListItemButton>
                  <ListItemIcon>
                    <menu.icon />
                  </ListItemIcon>
                  {open ? <ListItemText primary={menu.title} /> : null}
                  {hasSubMenu(menu) ? handleSubMenu(index) : null}
                </ListItemButton>
              </a>
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
