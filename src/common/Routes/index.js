import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Dashboard from "../modules/dashboard";
import Login from "../modules/login";
import Users from "../modules/users";
import Blog from "../modules/blog";
import BlogDetails from "../modules/blog/blogDetails";
import Layout from "../components/layout";
import Parent from "../modules/parent";
import { getStoredData } from "../utils/storage";

// BrowserRouter
// Router
// Route

function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/blog-details/:blogId",
          element: <BlogDetails />,
        },
        {
          path: "/parent",
          element: <Parent />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="users" element={<Users />} />
    //       <Route path="blog" element={<Blog />} />
    //       <Route path="blog/blog-details" element={<BlogDetails />} />
    //     </Route>
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default Routing;
