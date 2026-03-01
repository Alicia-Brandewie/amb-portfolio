import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar />

      <div id='main'>
        <div class="card">
          <img src='/eyebrow.jpg' class='headshot' alt="Headshot of Alicia looking to the side with an eyebrow raised" />
          <div class="card-text">
            <h2> Hello! </h2>
            <h1>Alicia Brandewie</h1>
            <h3>I'm a full-stack software engineer,</h3>
            <h3>who came to Python via people and poetry.</h3>
            <h3 class="coming-soon">
              I'm like the API between humans and computers.
            </h3>
          </div>
        </div>

        <h1 id="skills">Technical Skills</h1>

        <div class='skills-box'>
          <h3 class='skills'>Python</h3>
          <h3 class='skills'>Express Server</h3>
          <h3 class='skills'>API</h3>
          <h3 class='skills'>MongoDB</h3>
          <h3 class='skills'>Node</h3>
          <h3 class='skills'>Django</h3>
          <h3 class='skills'>PostgresQL</h3>
          <h3 class='skills'>Postman</h3>
          <h3 class='skills'>EJS</h3>
          <h3 class='skills'>JavaScript</h3>
          <h3 class='skills'>CSS</h3>
          <h3 class='skills'>HTML</h3>
        </div>

        <About />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default App;
