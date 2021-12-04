import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  // Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  navlink: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    width: '100px',
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    textAlign: 'center',
    "&:hover": {
      color: "#a3CB38",
    },
  },
  Appbar: {
    backgroundColor: "#284265",
  }
}));

function TeamHeader() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" className={classes.Appbar}>
      <CssBaseline />
      <Toolbar>
        <Container className={classes.logo}>
          <img src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/262719855_4386742911453137_6873996981553598878_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=9QSAU7I3f10AX9-uLTB&_nc_ht=scontent.fmnl3-1.fna&oh=d023ba02cecf9cd485de2bb2ab9d7f30&oe=61AB38A3" alt="logo" />
        </Container>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlink}>
            
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/insights" className={classes.link}>
                Insights
              </Link>
              <Link to="/careers" className={classes.link}>
                Careers
              </Link>
              <Link to="/team" className={classes.link}>
                Our Team
              </Link>
              <Link to="/contact" className={classes.link}>
                Contact Us
              </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TeamHeader;
