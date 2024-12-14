import React from "react";


function OurWork() {
    const categories = ["All", "Design", "Code", "Photo", "App"];

    const works = [
        { id: 1, img: 'images/work01.jpg', category:'Go To Course->...' },
        { id: 2, img: 'images/work02.jpg', category:'Go To Course->...' },
        { id: 3, img: 'images/work03.jpg', category:'Go To Course->...' },
        { id: 4, img: 'images/work04.jpg', category:'Go To Course->...' },
        { id: 5, img: 'images/work05.jpg', category:'Go To Course->...' },
        { id: 6, img: 'images/work06.jpg', category:'Go To Course->...' },
        { id: 7, img: 'images/work07.jpg', category:'Go To Course->...' },
        { id: 8, img: 'images/work08.jpg', category:'Go To Course->...' },
        { id: 9, img: 'images/work01.jpg', category:'Go To Course->...' },
        { id: 10, img: 'images/work02.jpg', category:'Go To Course->...' },
        { id: 11, img: 'images/work03.jpg', category:'Go To Course->...' },
        { id: 12, img: 'images/work04.jpg', category:'Go To Course->...' },
        { id: 13, img: 'images/work05.jpg', category:'Go To Course->...' },
        { id: 14, img: 'images/work06.jpg', category:'Go To Course->...' },
        { id: 15, img: 'images/work07.jpg', category:'Go To Course->...' },
        { id: 16, img: 'images/work08.jpg', category:'Go To Course->...' },
        { id: 17, img: 'images/work05.jpg', category:'Go To Course->...' },
        { id: 18, img: 'images/work06.jpg', category:'Go To Course->...' },
        { id: 19, img: 'images/work07.jpg', category:'Go To Course->...' },
        { id: 20, img: 'images/work08.jpg', category:'Go To Course->...' },
    ]

    return(
        <div className="our-work text-center pt-5 pb-5">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative">
                    <img className="mb-4" src="images/title.png" alt="title"></img>
                    <h2>We Make This</h2>
                    <p className="text-black-50 text-upprecase">Prepare To Be Amazde</p>
                </div>
                <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
                    {categories.map((category, index) => (
                        <li key={index} className={index === 0 ? 'active rounded-pill' : ''}>
                            {category}
                        </li>
                    ))}
                </ul>

                <div className="row">
                    {works.map((work) => (
                        <div key={work.id} className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box mb-3 bg-white" data-work={work.category}>
                                <img className="img-fluid" src={work.img} alt={`Work ${work.id}`} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default OurWork;