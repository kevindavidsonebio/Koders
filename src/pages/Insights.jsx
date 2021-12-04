import Typography from "@material-ui/core/Typography";
import Article from "../components/Article";

const articles = [
    {
        page: '/insights1',
        image:'images/teamwork6.jpg',
        title:'The best team management you should know',
        content:'Managing a project team becomes increasingly more complex as a person works with people of different work styles, different languages, different cultures, and different generations. The project manager is expected to work in real time with people from around the world and generate cost-effective results to help the companies remain competitive in the global market. Information Technology (IT) project management is a complex task that requires a solid depth of skills.'
    }, {
        page: '/insights2',
        image: 'images/swd.jpeg',
        title: 'Best practices of a Software Developer',
        content: 'If you are one such person, I will introduce you to the journey of becoming a "Great Developer".  The objective of a Great Developer, as i name him/her is to make his/her art as beautiful as possible and make it the best.'
    }, {
        page: '/insights3',
        image: 'images/programmer8.png',
        title: 'How to become a programmer in 2022?',
        content: 'Programmers are revered in the technical world with programming being a respected profession. Are you one of those who have wondered how to become a programmer? With the world of data science, machine learning, and artificial intelligence offering lucrative and fulfilling programming jobs, many young folks are pondering over this question. This blog shows you how to make a career in programming and the skills are yours if you follow some simple steps—consistently.'
    }
]

export default function Insights() {
    return (
        <Typography style={{padding: "50px"}}>
            <div align= "center" justifyItems= "center"> 
            {articles.map(article=><Article key={article.title} page={article.page} image={article.image} title={article.title} content={article.content} />)}
            </div>
        </Typography>
    );
}
