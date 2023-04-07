import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import Book from './components/Book';
import About from './components/About';

  const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/book',
            element: <Book></Book>
        },
        {
            path: '/about',
            element: <About></About>
        },
    ]
  }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
