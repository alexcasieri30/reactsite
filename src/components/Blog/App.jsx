import './app.scss';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import BlogPost from "./components/BlogPost";
import WritePost from './components/WritePost';

function Blog(){
    const [dataExists, setDataExists] = useState(false);
    const [writePost, setWritePost] = useState(false);
    const [postData, setPostData] = useState(null);
    const [signin, setSignin] = useState(false);
    const [login, setLogin] = useState(false);

    const getFirstPosts = async () => {
        const response = await fetch('http://localhost:3001/posts', {mode: 'cors'});
        const data = await response.json();
        if (postData==null){
            setPostData(
                data
            )
            setDataExists(
                true
            )
        }
    }

    useEffect(() => {
        getFirstPosts();
    });

    function postClick (){
        console.log(postData);
    }

    function writePostClick(){
        setWritePost(true);
    }

    function handleLoginButtons(e){
        if (e.currentTarget.id=="blog-signin-button"){
            setLogin(false);
            setSignin(true);
        }else{
            setLogin(true);
            setSignin(false);
        }
    }
    return(
        <div className="blog-main">
            <div className="blog-main-left">
                
                <div className="blog-sections-title">
                    Sections
                </div>
                <div className="blog-main-sections">
                    <div className="blog-main-section">My Posts</div>
                    <div className="blog-main-section">By Category</div>
                    <div className="blog-main-section">Most Recent</div>
                    <div className="blog-main-section">All</div>
                    <div className="blog-main-section">Search</div>
                </div>
                <div className="blog-main-seeUsers-div">
                    <Link className="see-all-users-link" to={"/blog/users"}>
                        <button className="see-all-users-link-button">See All Users</button>
                    </Link>
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
            <div className="blog-main-right">
                <div className="signin-section">
                    <button className="blog-signin-button" id="blog-signin-button" onClick={(e) => handleLoginButtons(e)}>Sign Up</button>
                    <button className="blog-signin-button" id="blog-login-button" onClick={(e) => handleLoginButtons(e)}>Log in</button>
                </div>
                <div className="signin-form-section">
                    {
                        login && 
                        <div className="signin-form-signin-content">
                            <div className="signin-div">
                                <input type="text" placeholder="username" className="signin-form-username" />
                            </div>
                            <div className="signin-div">
                                <input type="text" placeholder="password" className="signin-form-password" />
                            </div>
                            <div className="signin-div">
                                <button type="submit" id="blog-signin-button-signin">Log In</button>
                            </div>
                        </div>
                    }
                    {
                        signin &&
                        <div className="login-form-login-content">
                            <div className="login-div">
                                <input type="text" placeholder="firstname" className="signin-form-firstname" />
                            </div>
                            <div className="login-div">
                                <input type="text" placeholder="lastname" className="signin-form-lastname" />
                            </div>
                            <div className="login-div">
                                <input type="text" placeholder="username" className="signin-form-username" />
                            </div>
                            <div className="login-div">
                                <input type="text" placeholder="password" className="signin-form-password" />
                            </div>
                            <div className="login-div">
                                <input type="text" placeholder="email" className="signin-form-email" />
                            </div>
                            <div className="login-div">
                                <button type="submit" id="blog-login-button-login">Sign Up</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;