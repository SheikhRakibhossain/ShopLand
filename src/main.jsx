import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shop from './components/Shop/Shop';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/shop',
        element:<Shop></Shop>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
     
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
