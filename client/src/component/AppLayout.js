import React from 'react'
import {Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from "../pages/Home";
import Services from "../pages/Services";
import Shop from "../pages/Shop";
import Offers from"../pages/Offers";
import Membership from"../pages/Membership";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Footer from './Footer';
import SignUp from '../pages/SignUp';



const AppLayout = () => {
 
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

export const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/offers",
        element: <Offers/>
      },
      {
        path: "/membership",
        element: <Membership/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/sign-up",
        element: <SignUp/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/contact",
        element: <ContactPage/>
      } ,        
        ],
    errorElement: <Error/>,
  },
]);

export default Home;