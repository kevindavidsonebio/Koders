import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent"


const useStyles = makeStyles((theme) => ({
    navlink: {
        marginLeft: theme.spacing(5),
        display: 'flex',
    },
    logo: {
        flexGrow: 1,
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '20px',
        marginLeft: theme.spacing(5),
        '&:hover': {
            color: '#a3CB38',
            borderBottom: '1px solid white',
        },
    },
}));

function Header() {
    
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <AppBar position="static">
        <CssBaseline />
        <Toolbar>
            <Typography variant="h4" className={classes.logo}>
                K O D E R S!
            </Typography>
            {isMobile ? <DrawerComponent />
                :<div className={classes.navlink}>
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/contact" className={classes.link}>Contact Us</Link>
                    <Link to="/services" className={classes.link}>Services</Link>
                    <Link to="/careers" className={classes.link}>Careers</Link>
                    <Link to="/team" className={classes.link}>Our Team</Link>
                </div>
            }
        </Toolbar>
    </AppBar>
    )
}

export default Header
