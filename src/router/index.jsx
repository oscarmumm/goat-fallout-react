import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Quiz from "../views/Quiz";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../views/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/quiz',
        element: <Quiz />
      },
    ]
  }
])