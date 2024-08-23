import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="conteiner_app">
      <div className="folder">
        <div className="box_glass">
          <img src="./public/logo.png" alt="" />
        </div>

      </div> 
      <h1 className="title">Seja vindo</h1>
      <main>

        <Outlet />
      </main>
      <footer>&copy; OPENNET &copy;</footer>
    </div>
  )
}

export default App
