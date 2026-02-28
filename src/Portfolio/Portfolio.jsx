import './Portfolio.css'

function Portfolio() {

    return (
        <>
            <h1 id='portfolio'>Portfolio</h1>

            <ul class='main-grid'>

                <li>
                    <div class="grid-project img-1">
                        <div class='project-info'>
                            <h1>NAVIgator</h1>
                            <h4>Travel compainion app for planning, with whimsical design</h4>
                            <div class='skills-box'>
                                <h3 class='portfolio-skills'>Python</h3>
                                <h3 class='portfolio-skills'>PostgreSQL</h3>
                                <h3 class='portfolio-skills'>Django</h3>
                            </div>
                            <div class='project-links'>
                                <h3><a class='link-content' href='https://navi-gator-app-939c9d3f9b64.herokuapp.com//' target="_blank">Start navigating</a></h3>
                                {/* <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/NAVIgator' target="_blank">Visit the repo</a></h3> */}
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-2">
                        <div class='project-info'>
                            <h1>SoundCircle</h1>
                            <h4>Catalogue your favorite songs and get social with other users </h4>
                            <div class='skills-box'>
                                <h3 class='portfolio-skills'>Express Server</h3>
                                <h3 class='portfolio-skills'>React</h3>
                                <h3 class='portfolio-skills'>MongoDB</h3>
                            </div>
                            <div class='project-links'>
                                <h3><a class='link-content' href='https://soundcircle.netlify.app/' target="_blank">Explore SoundCircle</a></h3>
                                {/* <h3><a class='link-content' href='https://github.com/OliverPhillips1229/sound-circle-front-end' target="_blank">Visit the front-end repo</a></h3>
                                <h3><a class='link-content' href='https://github.com/mrodavis/sound-circle-be' target="_blank">Visit the back-end repo</a></h3> */}
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-3">
                        <div class='project-info'>
                            <h1>Poppins' Bag</h1>
                            <h4>Track your events & supplies</h4>
                            <div class='skills-box' >
                                <h3 class='portfolio-skills'>Express Server</h3>
                                <h3 class='portfolio-skills'>MongoDB</h3>
                                <h3 class='portfolio-skills'>JavaScript</h3>
                                <h3 class='portfolio-skills'>Node</h3>
                                <h3 class='portfolio-skills'>EJS</h3>
                            </div>
                            <div class='project-links'>
                                <h3><a class='link-content' href='https://poppinss-bag-8009da65f7ed.herokuapp.com/' target="_blank">Organize your things</a></h3>
                                {/* <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/poppinss_bag' target="_blank">Visit the repo</a></h3> */}
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div class="grid-project img-4">
                        <div class='project-info'>
                            <h1>Memory Maven</h1>
                            <h3>The classic matching game, featuring randomly generated arrangment, a limited amount of attempts, and reset. </h3>
                            <div class='skills-box' >
                                <h3 class='portfolio-skills'>JavaScript</h3>
                                <h3 class='portfolio-skills'>HTML</h3>
                                <h3 class='portfolio-skills'>CSS</h3>
                            </div>
                            <div class='project-links'>
                                <h3><a class='link-content' href='https://alicia-brandewie.github.io/memory-maven/' target="_blank">Play the game</a></h3>
                                {/* <h3><a class='link-content' href='https://github.com/Alicia-Brandewie/memory-maven' target="_blank"> Visit the repo</a></h3> */}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>





















            {/* <main id='main'>

                <div class='project-card'>
                    <div class='project-header'>
                        <h1>NAVIgator</h1>
                        <img src='src/assets/Navi.png' className="logo" alt="NAVIgator logo" />
                        <h3>Travel compainion app for planning, with whimsical design</h3>
                    </div>
                    <div class='skills-box'>
                        <h3 class='skills'>Python</h3>
                        <h3 class='skills'>PostgreSQL</h3>
                        <h3 class='skills'>Django</h3>
                    </div>
                    <div class='project-links'>
                        <a class='link-content' href='https://navi-gator-app-939c9d3f9b64.herokuapp.com//' target="_blank">Start navigating</a>
                        <a class='link-content' href='https://github.com/Alicia-Brandewie/NAVIgator' target="_blank">Visit the repo</a>
                    </div>
                </div>


                <div class='project-card'>
                    <div class='project-header'>
                        <h1>SoundCircle</h1>
                        <img src='src/assets/SoundCircle transparent.png' className="logo" alt="SoundCircle logo" />
                        <h3>Catalogue your favorite songs and get social with other users</h3>
                    </div>
                    <div class='skills-box'>
                        <h3 class='skills'>Express Server</h3>
                        <h3 class='skills'>React</h3>
                        <h3 class='skills'>MongoDB</h3>
                    </div>
                    <div class='project-links'>
                        <a class='link-content' href='https://soundcircle.netlify.app/' target="_blank">Explore SoundCircle</a>
                        <a class='link-content' href='https://github.com/OliverPhillips1229/sound-circle-front-end' target="_blank">Visit the front-end repo</a>
                        <a class='link-content' href='https://github.com/mrodavis/sound-circle-be' target="_blank">Visit the back-end repo</a>
                    </div>
                </div>



                <div class='project-card'>
                    <div class='project-header'>
                        <h1>Poppins' Bag</h1>
                        <img src="src/assets/Poppings's Bag icon.jpg" className="logo" alt="Poppins' logo" />
                        <h3>A real-world solution, this application lets you track your event supplies</h3>
                    </div>
                    <div class='skills-box' >
                        <h3 class='skills'>Express Server</h3>
                        <h3 class='skills'>MongoDB</h3>
                        <h3 class='skills'>JavaScript</h3>                    <h3 class='skills'>JavaScript</h3>
                        <h3 class='skills'>Node</h3>
                        <h3 class='skills'>EJS</h3>
                    </div>
                    <div class='project-links'>
                        <a class='link-content' href='https://poppinss-bag-8009da65f7ed.herokuapp.com/' target="_blank">Organize your things</a>
                        <a class='link-content' href='https://github.com/Alicia-Brandewie/poppinss_bag' target="_blank">Visit the repo</a>
                    </div>
                </div>

                <div class='project-card'>
                    <div class='project-header'>
                        <h1>Memory Maven</h1>
                        <img src='src/assets/Memory Maven  image.png' className="logo" alt="MM game logo" />
                        <h3>The classic matching game, featuring randomly generated arrangment of symbols, a limited amount of attempts, and rest. </h3>
                    </div>
                    <div class='skills-box' >
                        <h3 class='skills'>JavaScript</h3>
                        <h3 class='skills'>HTML</h3>
                        <h3 class='skills'>CSS</h3>
                    </div>
                    <div class='project-links'>
                        <a class='link-content' href='https://alicia-brandewie.github.io/memory-maven/' target="_blank">Play the game</a>
                        <a class='link-content' href='https://github.com/Alicia-Brandewie/memory-maven' target="_blank"> Visit the repo</a>
                    </div>
                </div>

            </main> */}
        </>
    )
}

export default Portfolio;