import './App.css'
import NavBar from './NavBar/NavBar'
import Portfolio from './Portfolio/Portfolio'

function App() {

  return (
    <>
      <NavBar/>
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
      <Portfolio/>
    </>
  )
}

export default App;
