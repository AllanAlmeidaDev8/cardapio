import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClientForm from './components/ClientForm.jsx';
import Pagina01 from './pages/Pagina01.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Pagina01/>,
   
  },
  {
    path:'cardapio',
    element:<App/>,
    
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
