import React from "react";

function OurBlog() {
    const blogPosts = [
        {
            img: "images/blog1.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
        {
            img: "images/blog2.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
        {
            img: "images/blog5.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
        {
            img: "images/blog1.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
        {
            img: "images/blog2.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
        {
            img: "images/blog5.png",
            date: "Jan 17, 2023",
            title: "Some Awesome Blog Title Here",
        },
    ];
    
    return (
        <div className="our-blog pt-5 pb-5">
            <div className="container">
                <div className="main-title text-center mt-5 mb-5 position-relative">
                    <img className="mb-4" src="images/title.png" alt="Title" />
                    <h2>Read Our Blog</h2>
                    <p className="text-black-50 text-uppercase">New Stories</p>
                </div>
                
                <div className="row">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <img className="card-img-top" src={post.img} alt="Blog Post" />
                                <div className="card-body">
                                    <span className="text-black-50">{post.date}</span>
                                    <h5 className="card-title">{post.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );

}

export default OurBlog;