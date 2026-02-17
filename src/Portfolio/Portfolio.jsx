import './Portfolio.css'

function Portfolio() {

    return (
        <main id='main'>
            <div class='project-card'>
                <h1>Memory Maven</h1>
                <img src='' className="logo" alt="MM game logo" />
                <p>The classic matching game, featuring randomly generated arrangment of symbols, a limited amount of attempts, and rest. </p>
                <div class='skills-box' >
                    <p class='skills'>JavaScript</p>
                    <p class='skills'>HTML</p>
                    <p class='skills'>CSS</p>
                </div>
                <div class='project-links'>
                    <a class='link-content' href='https://alicia-brandewie.github.io/memory-maven/'>Click anywhere on the tile to play</a>
                    <a class='link-content' href='https://github.com/Alicia-Brandewie/memory-maven'>Click here to visit the repo</a>
                </div>
            </div>

            <div class='project-card'>
                <h1>Poppins' Bag</h1>
                <img src='' className="logo" alt="Poppins' logo" />
                <p>A real-world solution, this application lets you track your event supplies</p>
                <div class='skills-box' >
                    <p class='skills'>Express Server</p>
                    <p class='skills'>MongoDB</p>
                    <p class='skills'>JavaScript</p>                    <p class='skills'>JavaScript</p>
                    <p class='skills'>Node</p>
                    <p class='skills'>EJS</p>
                </div>
                <div class='project-links'>
                    <a class='link-content' href='https://poppinss-bag-8009da65f7ed.herokuapp.com/'>Organize</a>
                    <a class='link-content' href='https://github.com/Alicia-Brandewie/poppinss_bag'>Repo</a>
                </div>
            </div>

            <div class='project-card'>
                <h1>SoundCircle</h1>
                <img src='' className="logo" alt="SoundCircle logo" />
                <p>Catalogue your favorite songs and get social with other users</p>
                <div class='skills-box'>
                    <p class='skills'>Express Server</p>
                    <p class='skills'>React</p>
                    <p class='skills'>MongoDB</p>
                </div>
                <div class='project-links'> 
                    <a class='link-content' href='https://soundcircle.netlify.app/'>Circle</a>
                    <a class='link-content' href='https://github.com/OliverPhillips1229/sound-circle-front-end'>Front-End Repo</a>
                    <a class='link-content' href='https://github.com/mrodavis/sound-circle-be'>Back-End Repo</a>
                </div>
            </div>

            <div class='project-card'>
                <h1>NAVIgator</h1>
                <img src='' className="logo" alt="NAVIgator logo" />
                <p>Travel compainion app for planing</p>
                <div class='skills-box'>
                    <p class='skills'>Python</p>
                    <p class='skills'>PostgreSQL</p>
                    <p class='skills'>Django</p>
                </div>
                <div class='project-links'> 
                    <a class='link-content' href='https://navi-gator-app-939c9d3f9b64.herokuapp.com//'>Explore</a>
                    <a class='link-content' href='https://github.com/Alicia-Brandewie/NAVIgator'>Repo</a>
                </div>
            </div>

        </main>

    )
}

export default Portfolio;