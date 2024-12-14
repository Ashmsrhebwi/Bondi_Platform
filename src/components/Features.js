import React from "react";

function Freatures () {
    return(
        <div className="features text-center pt-5 pb-5">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative">
                    <img className="mb-4" src="images/title.png" alt="title"></img>
                    <h2>We Will Provide You</h2>
                    <p className="text-black-50 text-uppercase">Some Of These Courses Under</p>
                </div>
                <div className="row">
                    <Feature
                    number="1"
                    icon="fa-chart-line"
                    title="Graphic Design"
                    description="Innovation Graphic Design That Brings You Ideas To Life With Creativity And Precision. "
                     />
                     <Feature
                    number="2"
                    icon="fa-laptop-code"
                    title="Web Site"
                    description="Modern Web Design That Comines Functionality With Stunnung Visuals For an Exeptional User Experience."
                     />
                     <Feature
                    number="3"
                    icon="fa-cogs"
                    title="Web Development"
                    description="Cutting-edg Web Development to Build Fast, Secure, and scalable digital solutions Tailored To Your Needs."
                     />
                </div>
            </div>
        </div>
    );
}

function Feature({number , icon , title , description }) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="feat">
                <div className="icon-holder position-relative">
                    <i className={`fa-solid fa-${number} position-absolute buttom-0 number`}></i>
                    <i className={`fa-solid fa-4x ${icon} position-absolute buttom-0 icon`}></i>
                </div>
                <h4 className="mb-4 mt-4 text-uppercase">{title}</h4>
                <p className="text-black-50 lh-lg">{description}</p>
            </div>
        </div>
    )
}

export default Freatures;