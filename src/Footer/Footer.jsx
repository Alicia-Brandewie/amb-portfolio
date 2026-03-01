import './Footer.css'


function Footer() {
    return (
        <>
        <div class='footer-container'>
        <h1 id='contact'> Get in touch:</h1>
            <a href='https://www.linkedin.com/in/alicia-brandewie/' target="_blank">
                <img src='/Linkedin_circle_icon.jpg' className="company-logo" alt="LinkedIn icon" />
            </a>

            <a href='https://github.com/Alicia-Brandewie' target="_blank">
                <img src='/GitHub_Invertocat_White.svg' className="company-logo" alt="GitHub icon" />
            </a>

                        <a href='mailto:alicia.brandewie@gmail.com' target="_blank">
                <img src='/email_icon.png' className="company-logo" alt="email icon" />
            </a>
</div>
        </>
    )
}

export default Footer;