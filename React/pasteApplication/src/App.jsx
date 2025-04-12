import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/home'
import Paste from './components/paste'
import Create from './components/create'
import View from './components/view'
function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {

          path: "",
          element: <Home />
        },
        {

          path: "paste",
          element: <Create />
        },
        {

          path: "paste/:pasteId",  
          element: <Create />

          // paste/?pasteId=fd
        },
        {

          path: "view/:id",  
          element: <View />

          // paste/?pasteId=fd
        },

      ]

    },

  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
