import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import UserProfile from './Pages/Acceuil/Profil/UserProfile';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar2 from './Pages/Acceuil/Navbar2/Navbar2';
import Hero2 from './Pages/Acceuil/Navbar2/Hero2';
import Books from './Pages/Acceuil/Books'
import Feeds from './Pages/Acceuil/Feeds';
import Challenges from './Pages/Acceuil/Challenges';
import BookList from './Pages/Acceuil/BookList';
import ContactUs from './Pages/Home/Contactus/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "Signup",
    element: <Signup />
  },

  {
    path: "Login",
    element: <Login />
  },
  
  {
    path: "App",
    element: <App />
  },

  {
    path: "Navbar2",
    element: <Navbar2 />
  },

  {
    path: "Hero2",
    element: <Hero2 />
  },

  {
    path : "UserProfile",
    element: <UserProfile />
  },

  {
    path : "Books",
    element: <Books />
  },

  {
    path : "Feeds",
    element: <Feeds />
  },

  {
    path : "Challenges",
    element: <Challenges />
  },

  {
    path : "BookList",
    element: <BookList />
  },

  {
    path : "ContactUs",
    element: <ContactUs />
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
