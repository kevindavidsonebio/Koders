import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
    content2: {
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        backgroundImage: "url(images/bg1.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "80%", 
        padding: "20px",
        WebkitBoxShadow: '12px 29px 81px 0px rgba(0,0,0,0.75)',
        MozBoxShadow: '12px 29px 81px 0px rgba(0,0,0,0.75)',
        BoxShadow: '12px 29px 81px 0px rgba(0,0,0,0.75)',
        [theme.breakpoints.down('sm')]: {
           flexDirection: "column",
           display: 'block',
        },
    },
    content3: {
        display: "flex",
        flexDirection: "row",
        width: "80%", 
        padding: "20px",
        textAlign: "justify",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            display: 'block',
        }
    },
    paragraph: {
        width: "80%",
        marginTop: "20px",
    },
    content1: {
        align: 'center',
        justifyItems: 'center',
        width: '80%',
        textAlign: 'justify',
        padding: '10px',
        '& img': {
            width: '100%',
            height: 'calc(100vw/2)',
        },
    },

}))
export default function InsightsB() {
    const classes = useStyles();
    return (
        <Typography style={{padding: "20px"}}>
            <div align= "center" justifyItems= "center" width= "80%">
                <div className={classes.content1}>
                    <img src="images/swd.jpeg" alt=""/>
                    <div>
                        <h1>Best practices of a Software Developer</h1>
                        <p>Software development is an art, not just a science.  You can learn all the technicalities of software development, but you need to be absolutely passionate about coding and perceive it as an art to be extremely good at it.  If you are one such person, I will introduce you to the journey of becoming a "Great Developer".  The objective of a Great Developer, as i name him/her is to make his/her art as beautiful as possible and make it the best.</p>
                        <p>In my own thoughts, I will share some attitudes which a great developer should have apart from the general expectations of being technically and analytically sound, understanding requirements in detail, good design skills, etc.</p>
                    </div>
                </div>
                <div className={classes.content2}>
                    <img src="images/swd3.jpg" alt=""/>
                    <div>
                        <h3>The bug</h3>
                        <p>Fixing bugs is part and parcel of a software developer's activities.  A bug is obviously the worst enemy of a Developer.  But how many developers think in the following lines while fixing the defects</p>
                        <ul>
                            <li>What I could have done to avoid this bug in the first place?</li>
                            <li>How did I allow this bug to escape my eyes?</li>
                            <li>OK, something wrong has happened this time.  How do I avoid the same mistake next time? What steps do I need to take?</li>
                        </ul>
                    </div>
                </div>        
                <div className={classes.paragraph}>
                    <p>Truth is very few developers think on those lines.</p>
                    <p>person willing to be a great developer should consider a bug as a threat to his position, as a threat to his credibility, as a threat to his programming skills.  That is the attitude that will make him/her a great developer.</p>    
                </div>
                <div className={classes.content3}>
                    <img src="images/swd4.jpg" alt=""/>
                    <div>
                        <h3>!Compromise</h3>
                        <p>Code quality should be of prime importance to a developer.  That will include following the right coding standards, making the code more maintainable using proper design and code refactoring, etc, etc.  But how many of us compromise code quality for many reasons best known to us?</p>
                        <p>A great developer or a person willing to become a great developer should never compromise on the code quality, no matter what.</p>            
                    </div>
                </div>
                <div className={classes.content3}>
                    <img src="images/swd2.jpg" alt=""/>
                    <div>
                        <h3>The Tester</h3>
                        <p>It can happen that despite all the hard work and efforts put in by the great developer, a great tester can still find defects in his code.  In those cases, acknowledge the great tester.</p>
                        <p>A great developer or a person willing to be a great developer should always acknowledge the tester for the bug that he found.  He/she should remember that the bug is the enemy, and not the tester :-)</p>
                        <p>source: https://dzone.com/articles/attitudes-great-software</p>
                    </div>
                </div>
            </div>
        </Typography>
    );
}
