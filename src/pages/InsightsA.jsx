import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

    content2: {
        display: "flex",
        flexDirection: "row",
        color: "white",
        backgroundImage: "url(images/bg2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "80%", 
        padding: "20px",
        [theme.breakpoints.down('sm')]: {
           flexDirection: "column",
           display: 'block',
        },
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

export default function InsightsA() {
    const classes = useStyles();
    return (
        <>
            <div align= "center" justifyItems= "center" width= "80%">
                <div className={classes.content1}>
                    <img src="images/teamwork6.jpg" alt=""/>
                    <div>
                        <h2>The best team management you should know</h2>
                        <p>Managing a project team becomes increasingly more complex as a person works with people of different work styles, different languages, different cultures, and different generations. The project manager is expected to work in real time with people from around the world and generate cost-effective results to help the companies remain competitive in the global market. Information Technology (IT) project management is a complex task that requires a solid depth of skills. (source: https://www.sciencedirect.com/science/article/pii/B9781597490375500083</p>
                        <p>Transparent working environments have been found to make teams more accountable, happy and creative.</p>
                        <p>It sounds like a big claim but transparent environments help to develop a feeling of mutual respect between team members and team leaders. Via open and consistent communication, transparent and authentic workplaces help employees to feel secure in their positions. In turn, team members feel freer to contribute ideas and suggestions, enhancing creativity. (source:https://www.meistertask.com/blog/6-simple-tips-effective-team-management/</p>
                    </div>
                </div>
                <div className={classes.content2}>
                    <img width= "275" src="images/teamwork2.jpg" alt=""/>
                    <div>
                        <p>At the first project team meeting draw on the group to identify the behaviours that will help the project team. This can be done simply by capturing ‘expectations of the project leader’ and ‘expectations of each team member’; onto flip-chart paper. These can then be typed up and circulated to the team and used as a reminder at the start of each meeting.</p>
                        <p> Any variances of these behaviours can then be constructively challenged referring back to the team code.(source: https://www.ksl-training.co.uk/free-resources/performance-management/managing-project-teams/</p>
                    </div>
                </div>
                <div className={classes.content2}>
                    <div>
                        <p>Over the course of a day, managers might be responsible for making a number of decisions that impact their team or the project they're overseeing. Prioritizing tasks, allocating resources, delegating duties—each of these is a decision that falls to the manager.Sometimes, a manager will need to make an authoritative decision to resolve an issue. Other times, decision-making might involve consensus building, wherein members of the team are invited to participate in the discussion and help guide the process. Ultimately, the manager is responsible for the outcome of the decision and, as such, must be comfortable with ensuing results.</p>
                        <p>Source: https://online.hbs.edu/blog/post/team-management-skills</p>
                    </div>
                    <img width= "70%" height= "calc(100vw/2)" src="images/teamwork4.png" alt=""/>
                </div>
            </div>
        </>
    );
}
