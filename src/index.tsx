import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Routes imports
import Home from './Routes/Home/Home';
import ErrorPage from './Routes/ErrorPage/ErrorPage';

const router = createBrowserRouter([
{
  path: "/Portiolio", 
  element:<App/>,
  errorElement: <ErrorPage/>,
  children:[
  {
    path:"/Portiolio",
    element: <Home/>
  }
  ]
},
])



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
