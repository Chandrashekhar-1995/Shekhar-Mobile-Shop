import React from 'react'
import {Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Body from "./Body";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
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
        path: "/about",
        element: <AboutPage/>
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