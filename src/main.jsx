import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/Users.jsx';
import Userdetails from './components/Userdetails.jsx';
import Errorpage from './components/Errorpage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: < Users ></Users >
      },
      {
        path: '/users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Userdetails></Userdetails>
      }
    ]


  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
