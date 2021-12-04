import { Container, Typography, makeStyles } from "@material-ui/core"
import { Email, Phone, Delete, AccountCircle } from "@material-ui/icons"


const useStyles = makeStyles(theme=>({
    mainContainer: {
        border: '1px solid black',
        borderRadius: '25px'
    }
}))

const UserInteraction = ({id,name,interaction,email,phone,onlinePortfolio,resume, address, birthdate,deleteApplicant}) => {
    const classes = useStyles()
    return (
        <Container className={classes.mainContainer}>
            <Typography>
                {name}
            </Typography>
            <Typography>
                {interaction?interaction:'This does not contain any message.'}
            </Typography>
            <a href={`mailto:${email}`}><Email /></a>
            {phone&&<a href={`tel:${phone}`}><Phone /></a>}
            {onlinePortfolio&&<a href={onlinePortfolio}><AccountCircle /></a>}
            <Delete onClick={()=>deleteApplicant(id)}/>

        </Container>
    )
}

export default UserInteraction
