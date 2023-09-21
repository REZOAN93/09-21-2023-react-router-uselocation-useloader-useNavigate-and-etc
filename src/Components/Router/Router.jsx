import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../About/About";
import Error from "../Error";
import Home from "../Home/Home";
import MealDB from "../MealDB/MealDB";
import More from "../More/More";
import NewDetails from "../Post/NewDetails";
import Post from "../Post/Post";
import Personal from "../User/Personal";
import User from "../User/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/personal/:id",
        element: <Personal />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/post",
        element: <Post></Post>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/NewDetails/:id",
        element: <NewDetails></NewDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
      },
      {
        path: "/mealdb",
        element: <MealDB></MealDB>,
      },
    ],
  },
]);
