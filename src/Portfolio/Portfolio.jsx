import './Portfolio.css'

function Portfolio() {

    return (
        <>
            <h1 id='portfolio'>Portfolio</h1>

            <ul class='main-grid'>

                <li>
                    <div class="grid-project img-1">
                        <div class='project-info'>
                            <h1><a class='link-content' href='https://navi-gator-app-939c9d3f9b64.herokuapp.com//' target="_blank">NAVIgator</a></h1>
                            <h4>Travel compainion app for planning, with whimsical design</h4>
                            <div class='skills-box'>
                                <h3 class='portfolio-skills'>Python</h3>
                                <h3 class='portfolio-skills'>PostgreSQL</h3>
                                <h3 class='portfolio-skills'>Django</h3>
                            </div>
                            <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/NAVIgator' target="_blank">Repo</a></h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-2">
                        <div class='project-info'>
                            <h1><a class='link-content' href='https://soundcircle.netlify.app/' target="_blank">SoundCircle</a></h1>
                            <h4>Catalogue your favorite songs and get social with other users </h4>
                            <div class='skills-box'>
                                <h3 class='portfolio-skills'>Express Server</h3>
                                <h3 class='portfolio-skills'>React</h3>
                                <h3 class='portfolio-skills'>MongoDB</h3>
                            </div>
                            <h3><a class='link-content' href='https://github.com/OliverPhillips1229/sound-circle-front-end' target="_blank">Front-end repo</a></h3>
                            <h3><a class='link-content' href='https://github.com/mrodavis/sound-circle-be' target="_blank">Back-end repo</a></h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-3">
                        <div class='project-info'>
                            <h1><a class='link-content' href='https://poppinss-bag-8009da65f7ed.herokuapp.com/' target="_blank">Poppins' Bag</a></h1>
                            <h4>Track your events & supplies</h4>
                            <div class='skills-box' >
                                <h3 class='portfolio-skills'>Express Server</h3>
                                <h3 class='portfolio-skills'>MongoDB</h3>
                                <h3 class='portfolio-skills'>JavaScript</h3>
                                <h3 class='portfolio-skills'>Node</h3>
                                <h3 class='portfolio-skills'>EJS</h3>
                            </div>
                            <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/poppinss_bag' target="_blank">Visit the repo</a></h3>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-4">
                        <div class='project-info'>
                            <h1><a class='link-content' href='https://alicia-brandewie.github.io/memory-maven/' target="_blank">Memory Maven</a></h1>
                            <h4>The classic matching game, featuring randomly generated arrangment, a limited amount of attempts, and reset. </h4>
                            <div class='skills-box' >
                                <h3 class='portfolio-skills'>JavaScript</h3>
                                <h3 class='portfolio-skills'>HTML</h3>
                                <h3 class='portfolio-skills'>CSS</h3>
                            </div>
                            <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/memory-maven' target="_blank"> Visit the repo</a></h3>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Portfolio;