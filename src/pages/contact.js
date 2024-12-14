import React from "react";

function Contact() {
    return (
        <section className="contact_us container pt-5">
            <h2 className="text-center mb-4">We wold Love To Hear From You</h2>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter You Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter You Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows='10'
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </section>
    )
}

export default Contact;