import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layouts from './components/layouts'
import Service from './components/service'
import Hero from './components/Hero'

const route = createBrowserRouter([
  {
    path:"/",
    element: <Layouts/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"service",
        element:<Service/>
      },
      {
        path:"hero/:id",
        element:<Hero/>
      }
    ]
  }
])

function App() {



  return (
    <>
      <RouterProvider router={route} />
      
    </>
  )
}

export default App
