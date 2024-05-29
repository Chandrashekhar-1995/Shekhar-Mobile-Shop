import React from 'react'
import {Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Body from "./Body";
import Services from "./Services";
import Offers from "./Offers";
import Membership from "./Membership";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Login from "./Login";
import Error from "./Error";
import Footer from './Footer';



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
        element: <Body/>
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

export default Body;