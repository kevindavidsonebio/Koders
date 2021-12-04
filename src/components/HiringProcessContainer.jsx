import { Container, Typography, Divider, makeStyles} from "@material-ui/core"
import hiringProcess from "./hiringProcess"
import ArticleContent from "./ArticleContent"

const useStyles = makeStyles(theme=>({
    heading: {
        textAlign:'center',
        fontWeight: 'bolder',
        margin: '20px'
    }
}))

const HiringProcess = () => {
    const classes = useStyles()
    return (
        <Container>
            <Typography variant="h3" className={classes.heading} align="center">The Journey to be a Koder</Typography>
            <Divider />
            {hiringProcess.map(process=> <ArticleContent number={process.number} title={process.title} image={process.image} content={process.content} />)}
        </Container>
    )
}

export default HiringProcess
