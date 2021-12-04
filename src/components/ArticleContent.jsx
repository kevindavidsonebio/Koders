import { Container, Typography, makeStyles, Divider } from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    imageContainer: {
        display: 'inline-block',
        width: '20%'
    },
    picture: {
        width: '100%'
    },
    textContainer: {
        display: 'inline-block',
        width: '80%'
    }
}))

const ArticleContent = ({number,title,content,image}) => {
    const classes = useStyles()

    return (
        <>
            <Container>
                <Container className={classes.imageContainer}>
                    <img className={classes.picture}src={image} alt={title} />
                </Container>
                <Container className={classes.textContainer}>
                    <Typography variant="h3" gutterbottom>{`${number}. ${title}`}</Typography>
                    <Typography variant="h5" paragraph>{content}</Typography>
                </Container>
            </Container>
            <Divider />
        </>
    )
}

export default ArticleContent
