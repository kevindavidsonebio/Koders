import { useState } from "react";
import {Grid, Card, Button, CardMedia, CardContent, Typography, makeStyles, Container} from "@material-ui/core";

export default function OurTeam() {
    const [missionVisonIO, setMissionVisonIO] = useState(true)
    const cardInfo = [
        {image: "https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg", name: "Lolife Cabrera", title: "Chief Executive Officer", info: "She is the Chief Executive Officer of Koders. A very well-respected woman around the office."},
        {image: "https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg", name: "Gabriel Abiera", title: "Director of Operations", info: "He is the Director of Operations. Demanding but kind-hearted."},
        {image: "https://4.img-dpreview.com/files/p/E~TS1180x0~articles/3925134721/0266554465.jpeg", name: "Kevin Davidson Ebio", title: "Chief Operating Officer", info: "He is the Chief Operating Officer. He always meets the requirements."},
    ]

    const togglefield = [
        {title: "Mission", text: "Our team are dedicated in serving company find the talent they need with the ease of the process of recruitment as well as the job seekers. Insuring the right fit talent with our flatform making applicants showcase their skill set. As an avenue of job applicants and client find their right fit, we insure we serve them both. The team were also job seekers before and have needed one in a time or two, so know it. We make job seekers better showcase their potential, and we help find the waited right-fit asset in our clients." },
        {title: "Vision", text: "To be recognised as a signicant platform that provides clients and job seekers connect seamlessly."}
    ]
    const useStyles = makeStyles(theme=>({
        cardMedia: {
            paddingTop: '56.25%'
        },
        container: {
            height: '200px',
            display: 'flex',
        },
        card: { 
            width: '18rem', 
            marginTop: '20px', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column'
        },
        text: {
            display: 'block',
            margin: 'auto',
        },
        hidden: {
            display: 'none',
        },   
        selected: {
            background: 'rgb(98, 161, 98)',
            backgroundColor: 'lightgreen',
        },
        cardContainer: {
            marginBottom: '20px'
        }
    }))

    const renderCard = (card, index) => {
        return (
            <Grid item>               
                <Card  className={classes.card} key={index}>
                  <CardMedia image={card.image} title={card.name} className={classes.cardMedia}/>
                  <CardContent>
                    <Container className={classes.container}><Typography  className={classes.text} variant='h3' color='textPrimary' gutterBottom align='center'>{card.name}</Typography></Container>
                    <Typography variant='h6' color='textSecondary' align='center' paragraph>{card.info}</Typography>
                    <Button variant="contained" href={card.github} >GitHub</Button>
                    <Button variant="outlined" href={card.portfolio} >Portfolio</Button>
                  </CardContent>
                </Card> 
            </Grid>
        )
    }

    const MissionVissionStatement = ({statement}) => {
        return (
            <>
                <div className={classes.text} onClick={()=>setMissionVisonIO(!missionVisonIO)}>{statement.title}</div><br/>
                <p className={classes.text}>{statement.text}</p>
            </>
        )
    }

    const classes = useStyles();
    return (
        <>
            <div align= "center" justifyItems= "center" style={{marginTop: "20px"}}>
                <h1>Our Team</h1>
                <img width= "50%" height= "calc(100vw/4)" class="teamImg" src="images/photo1.jpeg" alt=""/><br/><br/><br/>
                <div style={{width: "75%", text: "center", gap: "10px", padding: " 20px"}}>
                    <p>Our team are dedicated in serving company find the talent they need with the ease of the process of recruitment as well as the job seekers. Insuring the right fit talent with our flatform making applicants showcase their skill set. As an avenue of job applicants and client find their right fit, we insure we serve them both. The team were also job seekers before and have needed one in a time or two, so know it. We make job seekers better showcase their potential, and we help find the waited right-fit asset in our clients..</p>
                    </div>
                <hr/>
                <h2>Our Porfolios</h2>
            </div>
            <Grid container className={classes.cardContainer} spacing={2} alignItems='stretch' justifyContent='center'>
               {cardInfo.map(renderCard)}
            </Grid>
            <MissionVissionStatement statement={missionVisonIO?togglefield[0]:togglefield[1]} />
           {/* {missionVisonIO?<renderToggle title={togglefield[0]} />:<renderToggle title={togglefield[1]} />} */}
        </>
    );
    
}
