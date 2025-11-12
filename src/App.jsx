import About from './About/About';
import './App.css'
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar/>
      <class>
        <h2> Hello! </h2>
      <div className="card">
              <h1>Alicia Brandewie</h1>
        <p> I'm Alicia, a full-stack software engineer. 
        </p>
      </div>
      <p className="read-the-docs">
      Coming soon: more information!
      </p>
      <About/>
      <Portfolio/>
      </class>
      <Footer/>
    </>
  )
}

export default App;
