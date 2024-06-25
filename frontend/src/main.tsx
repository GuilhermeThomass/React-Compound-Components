import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './pages/errorPage'
import NavBar from './pages/navBar'
import UserPage from './pages/userPage'
import AdminPage from './pages/adminPage'


const router = createBrowserRouter([
{
  path: '/',
  element: <NavBar/>,
  errorElement: <ErrorPage/>,
  children: [ 
    {
      path:'/user',
      element: <UserPage/>,
    },
    {
      path:'/admin',
      element: <AdminPage/>,
    },
    ] 
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)