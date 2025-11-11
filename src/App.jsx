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
      <h1>Alicia Brandewie</h1>
      <div className="card">
        <button>
          count is cute but [currently] useless
        </button>
        <p>
        Site under construction
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
