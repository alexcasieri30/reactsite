import { useState } from "react";
import "./styles/writepost.scss";


function WritePost({ postData, setPostData, setDataExists, setWritePost }){
    const [inputs, setInputs] = useState({});

    function changePost(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    async function submitPostButton(){

        const response = await fetch('http://localhost:3001/posts/write_post', {
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
        setWritePost(false);
    }

    const updatePosts = async () => {
        const response = await fetch('http://localhost:3001/posts/get_posts', {mode: 'cors'});
        const data = await response.json();
        setPostData(
            data
        )
        setDataExists(
            true
        )
    }

    function cancelPostButton(){
        setWritePost(false);
    }

    return(
        <div className="blog-main-writepost">
            <div className="blog-main-writepost-container">
                <div className="blog-main-describe">
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
                        <button type="submit" id="cancel-post" onClick={cancelPostButton}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default WritePost;