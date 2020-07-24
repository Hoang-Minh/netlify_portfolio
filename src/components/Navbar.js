import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  Toolbar,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.jpg";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: theme.spacing(35), // 250
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home></Home>,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd></AssignmentInd>,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps></Apps>,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail></ContactMail>,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

function Navbar() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = () => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Minh Nguyen"
      ></Avatar>
      <Divider></Divider>
      <List>{renderListItems()}</List>
    </Box>
  );

  const renderListItems = () => {
    return menuItems.map((item, key) => (
      <ListItem button key={key} component={Link} to={item.listPath}>
        <ListItemIcon className={classes.listItem}>
          {item.listIcon}
        </ListItemIcon>
        <ListItemText
          className={classes.listItem}
          primary={item.listText}
        ></ListItemText>
      </ListItem>
    ));
  };

  return (
    <Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }}></ArrowBack>
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList()}
              <Footer></Footer>
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default Navbar;
