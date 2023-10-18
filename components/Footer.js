import React from "react"

export default function Footer() {
    return (
        <footer>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Twitter profile">
                <span class="fa-brands fa-square-x-twitter fa-2x footer__icon" alt="Twitter Icon"></span>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook profile">
                <span class="fa-brands fa-square-facebook fa-2x footer__icon" alt="Facebook Icon"></span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram profile">
                <span class="fa-brands fa-square-instagram fa-2x footer__icon" alt="Instagram Icon"></span>
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub repository">
                <span class="fa-brands fa-square-github fa-2x footer__icon" alt="GitHub Icon"></span>
            </a>
        </footer>
    )
}