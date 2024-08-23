import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import Home from './routes/Home.jsx'
import Cardapio from './routes/Cardapio.jsx'

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './routes/ErrorPage.jsx'
import Pizza from './routes/Pizza.jsx'
import PizzaTradicional from './routes/PizzaTradicional.jsx'
import PizzaTop from './routes/PizzaTop.jsx'
import PizzaEspecial from './routes/PizzaEspecial.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage/>,
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
        path:"/pizzas", 
        element: <Pizza/>
      },
      {
        path:"/pizzas/pizzas_tardicionais", 
        element:<PizzaTradicional/>
      },
      {
        path:"/pizzas/pizza_top",
        element:<PizzaTop/>
      },
      {
        path:"/pizzas/pizzas_especiais",
        element:<PizzaEspecial/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
