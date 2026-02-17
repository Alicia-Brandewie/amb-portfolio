import './About.css';

function About() {
    return (
        <>
            <div class='about-container'>
                <img src='src/assets/eyebrow.jpg' class='headshot' alt="Headshot of Alicia" />
                <div class='about-text'>
                    <p>I’m a full-stack software engineer who enjoys organizing and building back ends while enhancing them with intuitive and aesthetically-complementary front ends for well-rounded applications.From my time as a poet & educator, I know the value of precision writing balanced with user impact. My familiarity of the technology industry from daily work with software engineers from my years as a technical recruiter combined with my drive to build (art, then companies, and now applications) brought me to engineering.</p>
                    <p>I bring my tenacity for solutioning, asking for help, and listening to application development from my experiences not getting into any graduate school on my first round of applications to graduating my dream program, as well my experience hiring a startup’s first-ever CRO as acting talent-partner even though I had no prior C-suite hiring experience. Patterns, punctuation, and people are what makes writing poems and code both amazing, engaging, and valuable. I thrive at the intersection between human problems and technical solutions, and I look forward to bringing this balance to my next technical team.</p>
                </div>
            </div>
            <div class='skills-box'>
                <h2>Technical Skills</h2>
                <p class='skills'>Python</p>
                <p class='skills'>Express Server</p>
                <p class='skills'>API</p>
                <p class='skills'>MongoDB</p>
                <p class='skills'>Node</p>
                <p class='skills'>Django</p>
                <p class='skills'>PostgresQL</p>
                <p class='skills'>Postman</p>
                <p class='skills'>EJS</p>
                <p class='skills'>JavaScript</p>
                <p class='skills'>CSS</p>
                <p class='skills'>HTML</p>
            </div>
        </>
    )
}

export default About;