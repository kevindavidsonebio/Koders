import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: "url(images/bg7.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "80%", 
    },
    content2: {
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        width: "80%", 
        padding: "20px",
        justifyItems: 'center',
        align: 'center',
        [theme.breakpoints.down('sm')]: {
           flexDirection: "column",
           display: 'block',
        },
    },
    p: {
        textAlign: "justify",
    },
    h3: {
        textAlign: "justify",
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
            height: 'calc(100vw/2',
        },
    },

}))
export default function InsightsC() {
    const classes = useStyles();
    return (
        <Typography style={{padding: "50px"}}>
            <div align= "center" justifyItems= "center">
                <div>
                    <div className={classes.content1}>
                    <img width= "75%" height= "calc(100vw/2)" src="images/programmer8.png" alt=""/>
                        <h1>How to become a programmer in 2022?</h1>
                        <p>Programmers are revered in the technical world with programming being a respected profession. Are you one of those who have wondered how to become a programmer? With the world of data science, machine learning, and artificial intelligence offering lucrative and fulfilling programming jobs, many young folks are pondering over this question. This blog shows you how to make a career in programming and the skills are yours if you follow some simple steps—consistently. </p>      
                    </div>
                </div>
                <div className={classes.container}>
                    <div  className={classes.content2}>
                        <img src="images/programmer2.jpg" alt=""/>
                        <div>
                            <h3>The right mindset</h3>
                            <p>While mastering a language to get a job is important, this thinking may not be a strong motivation for you to gain programming proficiency. Think of what coding skills can do for you. “It’s the closest thing we have to a superpower,” says Drew Hudson, Dropbox CEO.</p>
                            <p>Think of programming skills as your personal superpower to change the world in some constructive way.</p>        
                        </div>
                    </div>
                    <div className={classes.content2}>
                        <div>
                            <h3>What would you like to do</h3>
                            <p>Determine the type of work you would like to engage in—build websites, become a data scientist, automate business processes, become an artificial intelligence expert? </p>
                        </div>
                        <img src="images/programmer7.jpg" alt=""/>
                    </div>
                </div>
                <div className={classes.paragraph}>
                    <h3>Choose a language</h3>
                    <p>Once you hone in on the type of work you want to do, choosing a language to learn becomes easy. Each programming language has a typical set of applications. This will help you stay focused on learning one language that really matters in your chosen field. As a result, you won’t be bogged down by having to learn several languages. Please read the section “Which language do I choose” of this blog for more information.</p>
                </div>
                <div className={classes.content2}>
                    <img src="images/programmer3.jpg" alt=""/>
                    <div style={{backgroundColor: "lightgreen"}}>
                        <p style={{fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'", padding: "40px"}}><strong>“The first time I actually had something come up and say ‘Hello World’ …made a computer do that, was astonishing.”</strong></p>
                        <p style={{textAlign: "end"}}>-Gabe Newell, the founder of the gaming company Valve</p>
                    </div>
                </div>
                <div className={classes.paragraph}>
                    <h3>Start small</h3>
                    <p>Gabe Newell, the founder of the gaming company Valve, says, “The first time I actually had something come up and say ‘Hello World’ …made a computer do that, was astonishing.” Small achievements can motivate you to continue learning.</p>
                    <h3>Use the Internet</h3>
                    <p>Websites like Code.org have experience in designing coding courses for beginners. Online sites, such as Springboard.com, emphasize both ease of learning and skills proficiency. Such sites offer mentors who solve every learning problem and coach you towards success.</p>
                </div>
                <div className={classes.content2}>
                    <img src="images/programmer4.jpg" alt=""/>
                    <div>
                        <h3>Stay on the Course</h3>
                        <p>When the going gets tough, the wise get going. Are you not getting your code right? Is it throwing up errors that you are clueless about? Take a step back. Are you biting off more than you can chew? Choose a program complexity you can handle. Research the Internet for similar problems and how fellow learners handled them. Importantly, being a part of a community of learners goes a long way in staying the course and mastering a programming language.</p>
                    </div>
                </div>
                <p>source: https://www.springboard.com/blog/software-engineering/how-to-become-a-programmer/</p>
            </div>
        </Typography>
    );
}
