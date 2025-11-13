import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar/>
      <div className="card">

        <h2> Hello! </h2>
        <h1>Alicia Brandewie</h1>
        <p> I'm Alicia, a full-stack software engineer.</p>
        <p className="read-the-docs">
          Coming soon: more information!
        </p>
      </div>

      <Portfolio />
      <About />
      <Footer />
    </>
  )
}

export default App;
