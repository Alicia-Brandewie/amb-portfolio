import './Portfolio.css'

function Portfolio() {

    return (
        <main>
            <div class='card'>
                <img src='' className="logo" alt="MM game logo" />
                <h1>Memory Maven</h1>
                <p>The classic matching game, featuring randomly generated arrangment of symbols, a limited amount of attempts, and rest. </p>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                    <a href='https://alicia-brandewie.github.io/memory-maven/'>Play</a>
                    <a href='https://github.com/Alicia-Brandewie/memory-maven'>Repo</a>
            </div>

            <div class='card'>
                <img src='' className="logo" alt="Poppins' logo" />
                <h1>Poppins' Bag</h1>
                <p>A real-world solution, this application lets you track your event supplies</p>
                <ul>
                    <li>Express Server</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>EJS</li>
                </ul>
                  <a href='https://poppinss-bag-8009da65f7ed.herokuapp.com/'>Organize</a>
                    <a href='https://github.com/Alicia-Brandewie/poppinss_bag'>Repo</a>
            </div>

            <div class='card'>
                <img src='' className="logo" alt="SoundCircle logo" />
                <h1>SoundCircle</h1>
                <p>Catalogue your favorite songs and get social with other users</p>
                <ul>
                    <li>Express</li>
                    <li>React</li>
                    <li>MongoDB</li>
        <a href='https://soundcircle.netlify.app/'>Circle</a>
                    <a href='https://github.com/OliverPhillips1229/sound-circle-front-end'>Front-End Repo</a>
          
                    <a href='https://github.com/mrodavis/sound-circle-be'>Back-End Repo</a>

                </ul>
            </div>

            <div class='card'>
                <img src='' className="logo" alt="NAVIgator logo" />
                <h1>NAVIgator</h1>
                <p>Travel compainion app for planing</p>
                <ul>
                    <li>Python</li>
                    <li>PostgeSQL</li>
                    <li>Django</li>
                </ul>
                        <a href='https://navi-gator-app-939c9d3f9b64.herokuapp.com//'>Explore</a>
                    <a href='https://github.com/Alicia-Brandewie/NAVIgator'>Repo</a>
          
            </div>

        </main>

    )
}

export default Portfolio;