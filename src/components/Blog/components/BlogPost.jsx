import "./styles/blogpost.scss";

function BlogPost({ data }){
    console.log(data);
    return(
        <div className="blog-post-outline">
            <div className="blog-post-header">
                <div className="blog-post-title-info">
                    <div className="blog-post-title">
                        {data.title}
                    </div>
                    <div className="blog-post-subtitle">
                        {data.subtitle}
                    </div>
                </div>
                <div className="blog-post-other-info">
                    <div className="blog-post-author">
                        {data.username}
                    </div>
                    <div className="blog-post-time">
                        {data.time}
                    </div>
                </div>
            </div>
            <div className="blog-post-body">
                <div className="blog-post-text">
                    {data.text}
                </div>
               
            </div>
           <div className="blog-post-footer">
                
           </div>
        </div>
    )
}

export default BlogPost;