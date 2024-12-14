import React from "react";

function StuffAboutUs() {
    return (
        <div className="stuff pt-5 pb-5">
            <div className="container">
                <div className="main-title text-center mt-5 mb-5 position-relative">
                    <img className="mb-4" src="images/title.png" alt="title"></img>
                    <h2>Some Stuff About Us</h2>
                    <p className="text-black-50 text-upprecase">The Greate Team</p>
                </div>

                <p className="description text-center mb-5 m-auto">
                    We are a team of professionals who love creating beautiful and functional products
                </p>

                <div className="row align-items-center">
                    <div className="col-lg-4 mb-4 text-center text-md-start">
                        <div className="text">
                            <h4>The Great Team</h4>
                            <p className="text-black-50 fs-5">We Collaborate, innovate, and achieve excelen togther
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ut a sunt repellat ex architecto temporibus assumenda 
                            </p>
                            <a className="btn rounded-pill main-btn text-uppercase" href="#">
                                Order Me One
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="image">
                            <img className="img-fluid" src="images/laptop.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default StuffAboutUs;