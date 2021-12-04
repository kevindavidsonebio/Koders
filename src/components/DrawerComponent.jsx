import React, { useState } from "react";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
  },
  icon: {
    color: "white",
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>
                Home{" "}
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/insights" className={classes.link}>
                Insights{" "}
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/careers" className={classes.link}>
                Careers
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/team" className={classes.link}>
                Our Team
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                Contact Us
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
