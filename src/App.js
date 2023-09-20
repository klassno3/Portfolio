import React from 'react'
import Navigation from './component/Navigation'
import Footer from './component/Footer'
import Home from './component/Home'
import About from './component/About';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import CaseStudy from './component/CaseStudy';




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
          element:<Home/>,
        },
        {
          path: "/case study",
          element:<CaseStudy/>,
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