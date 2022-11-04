import WritePost from "./WritePost";
import BlogPost from "./BlogPost";
import "./styles/allposts.scss";
import { useEffect, useState } from "react";

function AllPosts({postData, setPostData, setDataExists, setWritePost, loggedIn, user, dataExists, writePost, writePostClick, filter}){
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        if (currentUser===null){
            if (localStorage.getItem('username')!==null){
                setCurrentUser(localStorage.getItem('username'))
            }
        }
    })
    return(
        <div className="blog-main-mid-div">
            {loggedIn && 
                <div className="blog-main-mid-welcome">
                    Welcome {user['firstname'] + " " + user['lastname']}
                </div>
            }
            <div className="blog-main-mid-title">
                Blog Posts
            </div>
            <div className="blog-main-mid-posts">
                {filter=="my_posts" && dataExists && postData.filter(element => element.username==currentUser).map((element, i) => <BlogPost id={i} data={element}/>)}
                {filter=="all"&& dataExists && postData.map((element, i) => <BlogPost id={i} data={element}/>)}
            </div>
            <div className="blog-main-mid-writepost">
                <div className="blog-main-mid-writepost-button">
                    {!writePost && 
                        <button id="blog-main-mid-writepost-button" onClick={writePostClick}>Write Post</button>
                    }
                </div>
                
            </div>
            <div className="blog-main-mid-writepost-content">
                {
                    writePost && <WritePost postData={postData} setPostData={setPostData} setDataExists={setDataExists} setWritePost={setWritePost}/>
                }
            </div>
        </div>
        
    )
}

export default AllPosts;