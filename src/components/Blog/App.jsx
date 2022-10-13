import './app.scss';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import BlogPost from "./components/BlogPost";
import WritePost from './components/WritePost';

function Blog(){
    const [dataExists, setDataExists] = useState(false);
    const [writePost, setWritePost] = useState(false);
    const [postData, setPostData] = useState(null);

    const getFirstPosts = async () => {
        const response = await fetch('http://localhost:3001/posts/get_posts', {mode: 'cors'});
        const data = await response.json();
        if (postData==null){
            setPostData(
                data
            )
            setDataExists(
                true
            )
        }
        console.log(data);
    }

    useEffect(() => {
        let body = document.querySelector('#root');
        getFirstPosts();
    });



    function postClick (){
        console.log(postData);
    }

    function writePostClick(){
        setWritePost(true);
    }
    return(
        <div className="blog-main">
            <div className="blog-main-left">
                <div className="blog-main-seeUsers-div">
                    <Link className="see-all-users-link" to={"/blog/users"}>
                        <button>See All Users</button>
                    </Link>
                </div>
                
                <div className="blog-main-sections">
                    <div className="blog-main-section">Section1</div>
                    <div className="blog-main-section">Section2</div>
                    <div className="blog-main-section">Section3</div>
                    <div className="blog-main-section">Section4</div>
                    <div className="blog-main-section">Section5</div>
                </div>
            </div>
            <div className="blog-main-mid">
                <div className="blog-main-mid-title">
                    Blog Posts
                </div>
                <div className="blog-main-mid-posts" onClick={postClick}>
                    {dataExists && postData.map((element) => <BlogPost data={element}/>)}
                </div>
                <div className="blog-main-mid-writepost">
                    <div className="blog-main-mid-writepost-button">
                        {!writePost && 
                            <button id="blog-main-mid-writepost-button" onClick={writePostClick}>Write Post</button>
                        }
                        
                    </div>
                    <div className="blog-main-mid-writepost-content">
                        {
                            writePost && <WritePost postData={postData} setPostData={setPostData} setDataExists={setDataExists} setWritePost={setWritePost}/>
                        }
                    </div>
                </div>
            </div>
            <div className="blog-main-right"></div>
        </div>
    )
}

/*
    posts:
    create table posts(id serial primary key,
                        text text, 
                        author id int references users(id), 
                        time time, 
                        category varchar(20),
                        title varchar(50), 
                        subtitle varchar(50));
*/

export default Blog;