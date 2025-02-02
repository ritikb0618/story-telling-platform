import './App.css'
import { NavBar , Home , Discover  } from './Components/index';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <NavBar />
      <Home/>
    </div>
  },
  {
    path: '/discover',
    element: <div>
      <NavBar />
      <Discover/>
    </div>
  },
  {
    path: '*',
    element: <div>Not Found</div>
  },
]);
function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
