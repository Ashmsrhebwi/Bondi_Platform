import React from "react";

function Team() {
    const teamMembers = [
        {
            img: "images/team1.png",
            name: "Shahm Sardini",
            desc: "I Dont Understand How We Got By Those Troops.",
        },
        {
            img: "images/team2.png",
            name: "Ahmad Marai",
            desc: "The Force Will Be With You. Always",
        },
        {
            img: "images/team3.png",
            name: "Omar Hajij",
            desc: "Never Tell Me The odds Never Tell ",
        },
        {
            img: "images/team5.png",
            name: "Mosab Haidar",
            desc: "The Force Will Guide Us. Never Tell Me ",
        }
    ]

    return (
        <div className="team text-center pb-5 pt-5">
            <div className="container pb-5 pt-5">
                <h2 className="fw-bold">Meet The Team</h2>
                <p className="text-black-50 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, animi distinctio! Autem iusto reprehenderit ea sunt 
                </p>

                <div className="row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-6 col-lg-3 mainbox">
                            <div className="box bg-white">
                                <img className="img-fluid" src={member.img} alt={member.name} />
                                <h4 className="p-3 text-right fw-bold name">{member.name}</h4>
                                <blockquote className="text-black-50 p-3">{member.desc}</blockquote>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Team;