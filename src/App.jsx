import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar />

      <div className='main'>
        <div className="card">
          <img src='src/assets/eyebrow.jpg' class='headshot' alt="Headshot of Alicia looking to the side with an eyebrow raised" />
          <div className="card-text">
            <h2> Hello! </h2>
            <h1>I'm Alicia Brandewie,</h1>
            <h3> a full-stack software engineer.</h3>
            <h4 className="coming-soon">
              From poetry to Python: I'm on career 3.0:
            </h4>
            <p className="coming-soon">
              after years of writing poetry then guiding platform engineers,

              I'm delighting in the many meanings of "continous improvement / continous development"!
            </p>
          </div>
        </div>

        <h1 id="skills">Technical Skills</h1>

        <div class='skills-box'>
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

        <About />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default App;
