import React from "react"
import EmailIcon from  "./EmailIcon"
import LinkedInIcon from "./LinkedInIcon"

export default function Info(){
    return (
        <section className='info-container'>
            <img src='images/portrait.png' className='img'/>
            <div className='info-main'>
                <h1 className='name'>Laura Smith</h1>
                <h2 className='job-title'>Frontend Developer</h2>
                <h3 className='website'>laurasmith.website</h3>
                <div className='btn-container'>
                    <a href="mailto:help@scrimba.com" className="button email">
                        <EmailIcon />
                        Email
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" className="button linkedin">
                        <LinkedInIcon />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}