import { Outlet,Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="conteiner_app folder">
      <div className="folder">
        

      </div> 
      <div className="intro">
      <h1 className="title">Seja vindo</h1>
      <p>Ao Sr Pizza Bar</p>
      </div>
      
      <main>

        <Outlet />
      </main>
      <footer><Link to="https://www.instagram.com/opennetbr" target='_blank'>&#169; OPENNET &#169;</Link></footer>

    </div>
  )
}

export default App
