// importation de react et react-router-dom
import * as React from "react";
import { createRoot } from "react-dom/client";
import "./style/main.css";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

// initilitation de router and paths
const router = createBrowserRouter([
  {
    path: "*",
    element: <Home/>,
  },
  {
    path: "/search/:query",
    element: <div>Search Page</div>,
  },
  {
    path: "/offre/:id",
    element: <div>OFFRE </div>,
  },
  {
    // role = candidat ou entreprise
    path: "/profile/:role/:id",
    element: <div>Profile</div>,
  },
  {
    // page de login de admin
    path: "/admin/login",
    element: <AdminLogin/>,
  },
  {
    // admin dashboared (protection de la page => admin ne peut pas acceder sauf que a deja authentifier)
    path: "/admin/dashbored",
    element: <div>Admin dashbored</div>,
  },
  ,
  {
    path: "/login/:role",
    element: <Login/>,
  },
  ,
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/discover/genre/:id/:name",
    element: <h1>Genre</h1>,
  },
]);

// creation de router et injection a root dans index.html
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);