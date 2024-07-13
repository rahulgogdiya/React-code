import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routs/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //useloder function
    children: [
      { path: "/", element: <PostList />,loader:PostLoder},
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
