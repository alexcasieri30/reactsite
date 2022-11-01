import './app.scss';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import AllPosts from './components/AllPosts';

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
        if (localStorage.getItem('username')!==null && loggedIn==false){
            console.log('not null')
            setLoggedIn(true)
            retrieveLoginCreds();
        }
    });

    async function retrieveLoginCreds(){
        let res = await fetch(`http://localhost:3001/users?username=${localStorage.getItem('username')}`, {mode: 'cors'});
        res = await res.json();
        setUser({firstname: res.firstname, lastname: res.lastname})
        console.log('res:', res);
    }

    function writePostClick(){
        setWritePost(true);
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
        if (loginCredentials['username']=='' || loginCredentials['password']==''||loginCredentials['username']==null||loginCredentials['password']==null){
            return;
        }
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
            console.log(res);
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
        console.log(res);
        setSignupCredentials({
            first: '',
            last: '',
            email: '',
            username: '',
            password: ''
        })
        setSignin(false);
    }

    function changeSection(e){
        setSection(e.currentTarget.id);
        console.log(section);
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
                </div>
                <div className="blog-main-seeUsers-div">
                    <Link className="see-all-users-link" to={"/blog/users"}>
                        <button className="see-all-users-link-button">See All Users</button>
                    </Link>
                </div>
            </div>
            <div className="blog-main-mid">
                <AllPosts postData={postData} setPostData={setPostData} setDataExists={setDataExists} setWritePost={setWritePost}
                loggedIn={loggedIn} user={user} dataExists={dataExists} writePost={writePost} writePostClick={writePostClick} filter={section}/>
            </div>
            <div className="blog-main-right">
                <div className="signin-section">
                    <button className="blog-signin-button" id="blog-signin-button" onClick={(e) => handleLoginButtons(e)}>Sign Up</button>
                    <button className="blog-signin-button" id="blog-login-button" onClick={(e) => handleLoginButtons(e)}>Log in</button>
                </div>
                <div className="signin-form-section">
                    <div className="signin-form-section-content">
                    {
                        login && 
                        <div>
                            <form className="signin-form-signin-content">
                                <div className="signin-div">
                                    <input required onChange={(e) => handleLogin(e)} value={loginCredentials['username']} type="text" placeholder="username" name="username" className="signin-form-username" />
                                </div>
                                <div className="signin-div">
                                    <input required onChange={(e) => handleLogin(e)} value={loginCredentials['password']} type="password" placeholder="password" name="password" className="signin-form-password" />
                                </div>
                                <div className="signin-div">
                                    <button type="submit" id="blog-signin-button-signin" onClick={handleLoginSubmit}>Log In</button>
                                </div>
                            </form>
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
                    <div className="signin-form-response">
                        {loginInvalid && 
                            <div>Invalid login</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;