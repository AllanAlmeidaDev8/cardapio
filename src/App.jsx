import { Outlet,Link } from 'react-router-dom'
import Logo from '../src/assets/logo.png';
import './App.css';
import instaLogo from './assets/instagram.svg';
import tikTokLogo from './assets/tik-tok.svg';
import faceLogo from './assets/face-book.svg';

function App() {


  return (
    <div className="conteiner_app folder">
      <div className="folder">
        <img src={Logo} alt="logo" className=' logo' />
        
      </div> 
      <div className="intro">
      <h1 className="title">Seja bem vindo</h1>
      <p>A Sr Pizza Bar</p>
      </div>
      
      <main>

        <Outlet />
        <div>
          <h3 style={
            {
              color: 'silver'
            }
          }>Siga-nos em?</h3>
        </div>
        <div className="nossasRedes" style={
          {
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '20px',
            paddingBottom: '10px',
            alignItems: 'center'
          }
        }>
          <Link to='https://www.instagram.com/sr_pizza_bar/' target='_black'><img src={instaLogo} alt="" width={50}/></Link>
          <Link to='https://www.tiktok.com/@ronaldofragoso2' target='_black'><img src={tikTokLogo} alt="" width={40}/></Link>
          <Link to='https://www.facebook.com/srpizzabar' target='_black'><img src={faceLogo} alt="" width={40}/></Link>
        </div>
      </main>
      <footer><Link to="https://www.instagram.com/opennetbr" target='_blank'>&#169; OPENNET &#169;</Link></footer>

    </div>
  )
}

export default App
