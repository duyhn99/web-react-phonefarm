import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import DeveloperBoardOutlinedIcon from "@material-ui/icons/DeveloperBoardOutlined";

import clsx from "clsx";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { MuiStylesSidebar } from "../MuiStyles/MuiStyles";
import path from "../../resources/path";
const Sidebar = ({ children }) => {
  const mainNav = [
    {
      name: "Danh sách kịch bản",
      path: path.SCRIPTS,
      icon: <DescriptionOutlinedIcon />,
    },
    {
      name: "Danh sách thiết bị",
      path: path.DEVICES,
      icon: <DeveloperBoardOutlinedIcon />,
    },
    {
      name: "Danh sách nhóm thiết bị",
      path: path.GROUPDEVICES,
      icon: <ImportantDevicesOutlinedIcon />,
    },
  ];
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const classes = MuiStylesSidebar();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {mainNav.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`${index === activeNav ? "active" : ""}`}
            >
              <ListItem button key={item} className={classes.listItem}>
                {item.icon}
                {item.name}
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
