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
                            <h3>Travel compainion app for planning, with whimsical design</h3>
                            <div class='skills-box'>
                                <p class='skills'>Python</p>
                                <p class='skills'>PostgreSQL</p>
                                <p class='skills'>Django</p>
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
                            <h3>Catalogue your favorite songs and get social with other users </h3>
                            <div class='skills-box'>
                                <p class='skills'>Express Server</p>
                                <p class='skills'>React</p>
                                <p class='skills'>MongoDB</p>
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
                            <h3>Track your events & supplies</h3>
                            <div class='skills-box' >
                                <p class='skills'>Express Server</p>
                                <p class='skills'>MongoDB</p>
                                <p class='skills'>JavaScript</p>
                                <p class='skills'>Node</p>
                                <p class='skills'>EJS</p>
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
                            <h3>The classic matching game, featuring randomly generated arrangment of symbols, a limited amount of attempts, and rest. </h3>
                            <div class='skills-box' >
                                <p class='skills'>JavaScript</p>
                                <p class='skills'>HTML</p>
                                <p class='skills'>CSS</p>
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
                        <p>Travel compainion app for planning, with whimsical design</p>
                    </div>
                    <div class='skills-box'>
                        <p class='skills'>Python</p>
                        <p class='skills'>PostgreSQL</p>
                        <p class='skills'>Django</p>
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
                        <p>Catalogue your favorite songs and get social with other users</p>
                    </div>
                    <div class='skills-box'>
                        <p class='skills'>Express Server</p>
                        <p class='skills'>React</p>
                        <p class='skills'>MongoDB</p>
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
                        <p>A real-world solution, this application lets you track your event supplies</p>
                    </div>
                    <div class='skills-box' >
                        <p class='skills'>Express Server</p>
                        <p class='skills'>MongoDB</p>
                        <p class='skills'>JavaScript</p>                    <p class='skills'>JavaScript</p>
                        <p class='skills'>Node</p>
                        <p class='skills'>EJS</p>
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
                        <p>The classic matching game, featuring randomly generated arrangment of symbols, a limited amount of attempts, and rest. </p>
                    </div>
                    <div class='skills-box' >
                        <p class='skills'>JavaScript</p>
                        <p class='skills'>HTML</p>
                        <p class='skills'>CSS</p>
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