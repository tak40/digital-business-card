import React from "react"

export default function Info(){
    return (
        <section className='info__container'>
            <img src='images/portrait.png' alt="Portrait of Laura Smith"/>
            <div className='info__main'>
                <h1 className='info__name'>Laura Smith</h1>
                <h2 className='info__job-title'>Frontend Developer</h2>
                <a href="http://laurasmith.website" target="_blank" rel="noopener noreferrer" className='info__website'>laurasmith.website</a>
                <div className='info__btn-container'>
                    <a href="mailto:help@scrimba.com" className="info__icon info__icon--email" aria-label="Send an email">
                        <span className="fa-solid fa-envelope" alt="Email Icon"></span>
                        Email
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="info__icon info__icon--linkedin" aria-label="Visit LinkedIn profile">
                        <span className="fa-brands fa-linkedin" alt="LinkedIn Icon"></span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}