import React from 'react'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Work from './component/Work'
import About from './component/About';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";




const Layout = () => {
    return (
      <div className="">
        <Navigation/>
        <Outlet/>
        <Footer />
      </div>
    );
  }

    const router = createBrowserRouter([
      {
    path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element:<About/>,
        },
        {
          path: "/",
          element:<Work/>,
        },
      ]
      },
    ] );

const App = () => {
  return (
    <div className='bg-secondary-100'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App