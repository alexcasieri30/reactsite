import './app.scss';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import AllPosts from './components/AllPosts';
import FriendActivity from "./components/FriendActivity";
import uniqid from 'uniqid';


function Blog(){
    const [dataExists, setDataExists] = useState(false);
    const [writePost, setWritePost] = useState(false);
    const [postData, setPostData] = useState(null);
    const [signin, setSignin] = useState(false);
    const [login, setLogin] = useState(false);
    const [loginCredentials, setLoginCredentials] = useState({});
    const [loginInvalid, setLoginInvalid] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({})
    const [signupCredentials, setSignupCredentials] = useState({})
    const [section, setSection] = useState('all');
    const [myFriends, setMyFriends] = useState([]);

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
        let container = document.querySelector('.container');
        container.style.backgroundColor = "white";
        let body = document.querySelector("body");
        body.style.backgroundColor = "white";
        getFirstPosts();
        if (localStorage.getItem('username')!==null && loggedIn==false){
            console.log('not null')
            setLoggedIn(true)
            retrieveLoginCreds();
            getMyFriends();
        }
    });

    async function getMyFriends(){
        let res = await fetch('http://localhost:3001/users', {mode: 'cors'});
        res = await res.json();
        let myfriends = [];
        res.filter(friend => friend.username != localStorage.getItem('username'))
        .forEach((friend) => {
            myfriends.push([friend['first_name'], friend['last_name']]);
        })
        setMyFriends(myfriends);
    }

    async function retrieveLoginCreds(){
        let res = await fetch(`http://localhost:3001/users?username=${localStorage.getItem('username')}`, {mode: 'cors'});
        res = await res.json();
        setUser({firstname: res.firstname, lastname: res.lastname})
    }

    function writePostClick(){
        setWritePost(true);
        console.log(myFriends);

    }

    function handleLoginButtons(e){
        if (e.currentTarget.id=="blog-signin-button"){
            setLogin(false);
            setSignin(true);
            setLoginInvalid(false);
        }else{
            setLogin(true);
            setSignin(false);
        }
    }

    const handleLogin = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginCredentials(values => ({...values, [name]: value}))
    }

    async function handleLoginSubmit(){
        console.log("submitting")
        if (loginCredentials['username']=='' || loginCredentials['password']==''||loginCredentials['username']==null||loginCredentials['password']==null){
            return;
        }
        console.log("username/password good, sending req");
        let response = await fetch("http://localhost:3001/users/login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: loginCredentials['username'], password: loginCredentials['password']})
        })
        if (response.status==200){
            const res = await response.json()
            localStorage.setItem('username', loginCredentials['username'])
            setLogin(false);
            setLoginInvalid(false);
            setUser({firstname: res['user']['first'], lastname: res['user']['last']})
        }else{
            setLoginInvalid(true);
        }
        setLoginCredentials({
            username: '',
            password: ''
        })
    }

    const handleSignup = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSignupCredentials(values => ({...values, [name]: value}))
    }

    async function handleSignupSubmit() {
        let response = await fetch("http://localhost:3001/users/signup", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type":'application/json'
            },
            body: JSON.stringify(signupCredentials)
        })
        const res = await response.json();
        setSignupCredentials({
            first: '',
            last: '',
            email: '',
            username: '',
            password: ''
        })
        setSignin(false);
    }
    const handleLogoutButton = (e) => {
        localStorage.removeItem("username");
    }

    function changeSection(e){
        setSection(e.currentTarget.id);
    }

    function friendClick(ind){
        console.log('clicking')
    }

    function setExpanded(e){
        let children = e.currentTarget.parentNode.children;
        for (let i = 0; i < children.length; i++){
            if (children[i].children.length == 3){
                children[i].children[2].classList.add("hidden")
            }
        }
        if (e.currentTarget.children[2]){
            e.currentTarget.children[2].classList.remove('hidden');
        }
    }

    return(
        <div className="blog-main">
            <div className="blog-main-left">
                <div className="blog-sections-title">
                    Sections
                </div>
                <div className="blog-main-sections">
                    <div className="blog-main-section" id="my_posts" onClick={(e) => changeSection(e)}>My Posts</div>
                    <div className="blog-main-section" id="by_category" onClick={(e) => changeSection(e)}>By Category</div>
                    <div className="blog-main-section" id="most_recent" onClick={(e) => changeSection(e)}>Most Recent</div>
                    <div className="blog-main-section" id="all" onClick={(e) => changeSection(e)}>All</div>
                    <div className="blog-main-section" id="search" onClick={(e) => changeSection(e)}>Search</div>
                    <div className="blog-main-seeUsers-div">
                        <Link className="see-all-users-link" to={"/blog/users"}>
                            <button className="see-all-users-link-button">See All Users</button>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="blog-main-mid">
                <AllPosts postData={postData} setPostData={setPostData} setDataExists={setDataExists} setWritePost={setWritePost}
                loggedIn={loggedIn} user={user} dataExists={dataExists} writePost={writePost} writePostClick={writePostClick} filter={section}/>
            </div>
            <div className="blog-main-right">
                {loggedIn && 
                    <form className="logout-section">
                        <button type="submit" className="blog-logout-button" id="blog-logout-button" onClick={(e) => handleLogoutButton(e)}>Log out</button>
                    </form>
                }
                {!loggedIn && 
                    <div className="signin-section">
                        <button className="blog-signin-button" id="blog-signin-button" onClick={(e) => handleLoginButtons(e)}>Sign Up</button>
                        <button className="blog-signin-button" id="blog-login-button" onClick={(e) => handleLoginButtons(e)}>Log in</button>
                    </div>
                }
                {!loggedIn && 
                <div className="signin-form-section">
                    <div className="signin-form-section-content">
                    {
                        login && 
                        <div className="login-form-login-content">
                            <div className="signin-div">
                                <input required onChange={(e) => handleLogin(e)} value={loginCredentials['username']} type="text" placeholder="username" name="username" className="signin-form-username" />
                            </div>
                            <div className="signin-div">
                                <input required onChange={(e) => handleLogin(e)} value={loginCredentials['password']} type="password" placeholder="password" name="password" className="signin-form-password" />
                            </div>
                            <div className="signin-div">
                                <button onClick={handleLoginSubmit} id="blog-signin-button-signin">Log In</button>
                            </div>
                            <div className="signin-form-response">
                            {loginInvalid && 
                                <div id="invalid-login-message">
                                    **Invalid login**
                                </div>
                            }
                            </div>
                        </div>
                    }
                    {
                        signin &&
                        <div>
                            <form className="login-form-login-content" action="/" onSubmit={handleSignupSubmit}>
                                <div className="login-div">
                                    <input required type="text" onChange={(e) => handleSignup(e)} value={signupCredentials['first']} name="first" placeholder="firstname" className="signin-form-firstname" />
                                </div>
                                <div className="login-div">
                                    <input type="text" onChange={(e) => handleSignup(e)} value={signupCredentials['last']} name="last" placeholder="lastname" className="signin-form-lastname" />
                                </div>
                                <div className="login-div">
                                    <input type="text" onChange={(e) => handleSignup(e)} value={signupCredentials['email']} name="email" placeholder="email" className="signin-form-email" />
                                </div>
                                <div className="login-div">
                                    <input required type="text" onChange={(e) => handleSignup(e)} value={signupCredentials['username']} name="username" placeholder="username" className="signin-form-username" />
                                </div>
                                <div className="login-div">
                                    <input required type="text" onChange={(e) => handleSignup(e)} value={signupCredentials['password']} name="password" placeholder="password" className="signin-form-password" />
                                </div>
                                <div className="login-div">
                                    <input type="submit" id="blog-login-button-login" value="Sign Up"/>
                                </div>
                            </form>
                        </div>
                    }
                    </div>
                </div>
                }
                {loggedIn && 
                    <div className="friends-activity-section" onClick={(e) => setExpanded(e)}>
                        <div className="friends-activity-title">
                            <span>Your friends</span>
                        </div>
                        <div className="friends-activity-content">
                            {myFriends.map((friend)=> {
                                return <div className="activity-friend" onClick={(e) => (setExpanded(e))}>
                                    <span>{friend[0]}</span> <span>{friend[1]}</span>
                                    <div className="expanded-friend-info hidden">
                                        <div>
                                            Send message?
                                        </div>
                                        <textarea name="" id="friend-dm-textarea" cols="10" rows="2">

                                        </textarea>
                                        <button>Send</button>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Blog;