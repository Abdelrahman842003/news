import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../img/logo.jpeg";
import HomeIcon from "@mui/icons-material/Home";
import Esraiel from "../../img/اسرائيل.jpeg";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MapIcon from "@mui/icons-material/Map";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import "../header/header.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ marginLeft: open ? `calc(${drawerWidth}px + 1px)` : 0 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-around",
            flexDirection: "row-reverse",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            sx={{
              marginLeft: 5,
              marginRight: open ? "auto" : 0,
              color: theme.palette.text.primary,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 25,
              color: theme.palette.info.main,
            }}
            variant="h6"
            noWrap
            component="div"
          >
            فلسطين الحبيبة
          </Typography>

          <Typography noWrap component="div">
            <img alt="" src={Logo} style={{ width: "20%" }} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ flexDirection: "row-reverse" }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["", "تاريخ فلسطين", " الكيان الصهيوني", "التبرعات"].map(
            (text, index) => (
              <Link to={`/${text}`}>
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: theme.palette.info.main,
                      fontWeight: 800,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        textAlign: "center",
                        color: theme.palette.info.main, // Add this line
                        fontWeight: 800,
                        width: 45,
                      }}
                    >
                      {index === 0 ? <HomeIcon /> : null}
                      {index === 1 ? (
                        <img
                          alt=""
                          src={Logo}
                          style={{ width: "76%", borderRadius: "20px" }}
                        />
                      ) : null}
                      {index === 2 ? (
                        <img
                          alt=""
                          src={Esraiel}
                          style={{ width: "76%", borderRadius: "20px" }}
                        />
                      ) : null}
                      {index === 3 ? <VolunteerActivismIcon /> : null}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: theme.palette.info.main,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
        <Divider />
        <List>
          {["احتياجات المواطنين", "الاخبار العاجله", "خريطه فلسطين"].map(
            (text, index) => (
              <Link to={`/${text}`}>
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block", color: theme.palette.info.main }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: theme.palette.info.main, // Add this line
                        width: 42,
                      }}
                    >
                      {index === 0 ? <FastfoodIcon /> : null}
                      {index === 1 ? <NewspaperIcon /> : null}
                      {index === 2 ? <MapIcon /> : null}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: theme.palette.info.main,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
