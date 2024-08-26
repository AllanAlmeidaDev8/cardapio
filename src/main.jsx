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
        element:<Cardapio/>
      },
      {
        path:"/cardapio/pizzas",
        element:<Pizza/>
      },
      {
        path:"/selector",
        element:<Pizzaselector/>
      },
      {
        path:"/cardapio/tita_gostos",
        element:<Tiragosto/>
      },
      {
        path:"/cardapio/pirao",
        element:<Pirao/>
      },
      {
        path:"/cardapip/promocoes",
        element:<Promocoes/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
