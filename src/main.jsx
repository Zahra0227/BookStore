import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {PrimeReactProvider} from 'primereact/api'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

import LoginPage from './pages/Login'
import Layout from './components/layout'
import HomePage from './pages/Home'
import RegisterPage from './pages/Register'
import BookListPage from './pages/BookList'
import AddBook from './pages/AddBook'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
      path:'/',
      element: <HomePage/>,
    },
    {
      path:'/login',
      element:<LoginPage/>,
    },
    {
      path:'/register',
      element:<RegisterPage/>,
    },
    {
      path:'/books/list',
      element:<BookListPage/>,
    },
    {
      path:'/books/add',
      element:<AddBook/>,
    },
  ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
    <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>,
);
