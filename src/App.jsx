import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar />
      <div className="card">
        <img src='src/assets/corporate_ginger.JPG' class='headshot' alt="Headshot of Alicia looking directly at the camera with ginger-hair and berry lipstick" />
        <h2> Hello! </h2>
        <h1>Alicia Brandewie</h1>
        <p> I'm a full-stack software engineer.</p>
        <p className="coming-soon">
          From poetry to Python: I'm on career 3.0
        </p>
        <p className="coming-soon">
          after years of writing poetry then guiding platform engineers,
        </p>
        <p className="coming-soon">
          and enjoying the many meanings of "continous improvement / continous development"!
        </p>

      </div>
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;
