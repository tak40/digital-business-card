import React from "react"
import TwitterIcon from "./TwitterIcon"
import FacebookIcon from "./FacebookIcon"
import InstagramIcon from "./InstagramIcon"
import GithubIcon from "./GithubIcon"

export default function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <a href="https://www.twitter.com/" target="_blank" className="footer-btn twitter">
                    <TwitterIcon />
                </a>
                <a href="https://www.facebook.com/" target="_blank" className="footer-btn facebook">
                    <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="footer-btn instagram">
                    <InstagramIcon />
                </a>
                <a href="https://www.github.com/" target="_blank" className="footer-btn github">
                    <GithubIcon />
                </a>
            </div>
        </footer>
    )
}