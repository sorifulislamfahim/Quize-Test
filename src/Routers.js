import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Main from "./components/Main";
import Topics from "./components/Topics";


const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path: '/home', 
          element: <Home></Home>,
          loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: '/topics', 
          element: <Topics></Topics>
        }
      ],
      errorElement: <Error></Error>
    },
    
  ]);

export default router;