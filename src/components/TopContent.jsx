import { Container, Button, Typography, makeStyles } from "@material-ui/core"


const useStyles = makeStyles(theme=>({
    mainContainer: {
        backgroundImage: 'url(https://resources.workable.com/wp-content/uploads/2016/08/web-programmer-job-description.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '500px',
        minWidth: '100vw',
        display:'block'
    },
    textButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        background:'rgba(255,255,255,0.7)',
        border: '1px solid gray',
        padding: theme.spacing(3),
        borderRadius: '25px',
        position: 'absolute',
        top: '12%',
        left: '10%'
    },
    button: {
        display: 'block',
        height: '50px',
        width: '200px',
        cursor: 'pointer',
        background: '#a3cb38',
        color:'white',
        fontWeight: 'bolder',
        '&:hover': {
            background: '#7f9c2d'
        },
        '&:active': {
            background: '#a3cb38'
        }
    }
    
    }))
    
const TopContent = ({main, sub, buttonText, buttonOff, buttonOn, buttonAlt}) => {

    const classes = useStyles()
    return (
        <Container className={classes.mainContainer}>
            <Container className={classes.textButtonContainer}>
                <Typography variant="h5" gutterBottom>
                    {main}
                </Typography>
                <Typography variant="h6" paragraph>
                    {sub}
                </Typography>
                {buttonOn ? <Button variant="contained" className={classes.button} onClick={()=>buttonOff(true)}>
                    {buttonText}
                </Button>:<Typography variant="h6" align="center">{buttonAlt}</Typography>}
            </Container>
        </Container>
    )
}

export default TopContent