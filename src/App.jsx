import { Outlet } from 'react-router-dom'
import './App.css';


function App() {


  return (
    <div className="App">
      <h1>Imagem</h1>
      <Outlet />
      <div>
       
      </div>
      <footer>rodapé</footer>
    </div>
  )
}

export default App
