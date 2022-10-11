import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root></Root>,
    children: [
      {
        path: '/home', 
        element: <Home></Home>
      },
      {
        path: '/topics', 
        element: <Topics></Topics>
      }
    ]
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App;
