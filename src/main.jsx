import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cardapio from './pages/Cardapio.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Pizza from './pages/Pizza.jsx'
import Pizzaselector from './pages/Pizzaselector.jsx'
import Tiragosto from './pages/Tiragosto.jsx'
import Pirao from './pages/Pirao.jsx'
import Promocoes from './pages/Promocoes.jsx'
import Bebidas from './pages/Bebidas.jsx'
import QRcodeCardapio from './pages/QRcodeCardapio.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cardapio",
        element:<Pizza/>
      },
      {
        path:"/cardapio/listas_itens",
        element:<Pizza/>
      },
      {
        path:"/selector",
        element:<Pizzaselector/>
      },
      {
        path:"/cardapio/tira_gostos",
        element:<Tiragosto/>
      },
      {
        path:"/cardapio/pirao",
        element:<Pirao/>
      },
      {
        path:"/cardapio/bebidas",
        element:<Bebidas/>
      },
      {
        path:"/cardapio/promocoes",
        element:<Promocoes/>
      }
    ]
  },
  {
    path:"/qrcardapio",
    element:<QRcodeCardapio/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
