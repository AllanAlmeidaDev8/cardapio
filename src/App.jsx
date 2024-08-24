import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="conteiner_app">
      <div className="folder">
        

      </div> 
      <div className="intro">
      <h1 className="title">Seja vindo</h1>
      <p>Ao Sr Pizza Bar</p>
      </div>
      
      <main>

        <Outlet />
      </main>

    </div>
  )
}

export default App
