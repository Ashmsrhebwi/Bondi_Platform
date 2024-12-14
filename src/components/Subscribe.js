import React from "react";

function Subscribe() {
    return (
        <div className="subscribe pt-5 pb-5 text-center text-md-start">
            <div className="container">
                <form className="row align-items-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="fw-bold fs-4 mb-3">
                            Subscribe To Our Newsletter:
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <input 
                        className="w-100 text-light p-2 bg-transparent" 
                        type="text"
                        placeholder="Enter Your Email"
                        style={{borderBottom: '1px solid #fff'}}
                        />
                    </div>
                    <div className="col-md-5 col-lg-2 mt-4">
                        <input 
                        className="btn rounded-pill"
                        type="submit"
                        value="Subscribe"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Subscribe;