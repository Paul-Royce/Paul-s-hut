import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/layout/Layout.jsx'
import Pizza from "./pages/Pizza.jsx"
import PizzaInfo from './pages/PizzaInfo.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  defer
} from "react-router-dom";
import Home from './pages/Home.jsx';
import { getPromotions, getPizzas, getPizzainfo } from './api.js';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=> {
          return  defer({promotions: getPromotions()})
        }
      },
      {
        path: "/pizza",
        element: <Pizza />,
        loader: () => {
          return defer({pizzas: getPizzas()})
        },
      },
      {
        path: "pizza/:id",
        element: <PizzaInfo />,
        loader: ({params})=> {
          console.log(params.id)
          return defer({pizza: getPizzainfo(params.id)})
        },
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
