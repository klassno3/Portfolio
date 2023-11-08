import Home from './component/Home'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import CaseStudy from './component/CaseStudy';




    const router = createBrowserRouter([
      
    {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/case study",
          element:<CaseStudy/>,
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