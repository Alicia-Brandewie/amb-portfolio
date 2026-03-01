import './Footer.css'
import LinkedIn from '../assets/Linkedin_circle_icon.jpg'
import Github from '../assets/GitHub_Invertocat_White.svg'
import Email from '../assets/email_icon.png'


function Footer() {
    return (
        <>
            <div class='footer-container'>
                <h1 id='contact'> Get in touch:</h1>
                <a href='https://www.linkedin.com/in/alicia-brandewie/' target="_blank">
                    <img src={LinkedIn} class="company-logo" alt="LinkedIn icon" />
                </a>

                <a href='https://github.com/Alicia-Brandewie' target="_blank">
                    <img src={Github} class="company-logo" alt="GitHub icon" />
                </a>

                <a href='mailto:alicia.brandewie@gmail.com' target="_blank">
                    <img src={Email} class="company-logo" alt="email icon" />
                </a>
            </div>
        </>
    )
}
// image help from

// https://medium.com/@andrewmasonmedia/how-to-use-images-with-vite-and-vue-937307a150c0
// https://vite.dev/guide/assets.html#the-public-directory
// https://stackoverflow.com/questions/77138313/why-wont-my-images-load-in-my-react-vite-project
export default Footer;

