import React from "react";

function Techs() {
    const techImages = [
        "images/tech-1.png",
        "images/tech-2.png",
        "images/tech-3.png",
        "images/tech-4.png",
        "images/tech-1.png",
        "images/tech-2.png",
    ]

    return (
        <div className="techs pt-5 pb-5 text-center">
            <div className="container">
                <div className="row align-items-center">
                    {techImages.map((image, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                            <img src={image} alt={`Tech ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Techs;