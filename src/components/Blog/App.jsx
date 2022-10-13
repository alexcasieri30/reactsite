import './app.scss';
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

function Blog(){
    const [inputs, setInputs] = useState({});
    const [postData, setPostData] = useState(null);
    const [dataExists, setDataExists] = useState(false);

    const getFirstPosts = async () => {
        const response = await fetch('http://localhost:3001/get_posts', {mode: 'cors'});
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

    const updatePosts = async () => {
        const response = await fetch('http://localhost:3001/get_posts', {mode: 'cors'});
        const data = await response.json();
        setPostData(
            data
        )
        setDataExists(
            true
        )
    }

    async function submitPostButton(){
        const response = await fetch('http://localhost:3001/write_post', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    title: inputs['title'].replace("'", "''"),
                    subtitle: inputs['subtitle'].replace("'", "''"),
                    username: inputs['username'].replace("'", "''"),
                    category: inputs['category'].replace("'", "''"),
                    text: inputs['text'].replace("'", "''"),
                    time: '03/01/2022'
                }
            )
        });
        setInputs({
            title: '',
            subtitle: '',
            username: '',
            category: '',
            text: '',
        }, updatePosts());
        
    }

    function changePost(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function postClick (){
        console.log(postData);
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
                    {dataExists && postData.map((element) => {
                        const str = "TEXT: " + element.text + "\n" + "TIME: " + element.time;
                        return str;
                    }).join('\n\n')}
                </div>
                <div className="blog-main-mid-writepost">
                    <div className="blog-main-mid-describe">
                        <input onChange={(e) => changePost(e)} className="blog-main-mid-describe-input" type="text" name="title" placeholder="Title" value={inputs['title']}/>
                        <input onChange={(e) => changePost(e)} className="blog-main-mid-describe-input" type="text" name="subtitle" placeholder="Subtitle" value={inputs['subtitle']}/>
                        <input onChange={(e) => changePost(e)} className="blog-main-mid-describe-input" type="text" name="category" placeholder="Category" value={inputs['category']}/>
                        <input onChange={(e) => changePost(e)} className="blog-main-mid-describe-input" type="text" name="username" placeholder="Username" value={inputs['username']}/>
                    </div>
                    <div className="blog-main-mid-textarea">
                        <div className="submit-post-text">
                            <textarea onChange={(e) => changePost(e)} name="text" id="blog-post" placeholder="Write post" value={inputs['text']}></textarea>
                        </div>
                        <div className="submit-post-div">
                            <button type="submit" id='submit-post' onClick={submitPostButton}>Submit post</button>
                        </div>
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