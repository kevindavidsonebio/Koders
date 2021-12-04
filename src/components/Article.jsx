import {useState} from 'react';
import { Link } from "react-router-dom";

const Article = ({page, image, title, content}) => {

    const [count, setCount] = useState(24);
    return (
        <div class="article"> 
            <Link to={page}><img width="70%" height="calc(100vw/2)" src={image} alt=""/></Link>
            <div style={{width: "70%"}}>
            <Link to={page}><h2>{title}</h2></Link>
            <p>{count}Likes</p>
            <button onClick={()=>setCount(count+1)}><pre>👍</pre></button>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Article;