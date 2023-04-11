import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home'
import Statistics from './Components/Statistics'
import Blog from './Components/Blog'
import JobDetails from './Components/JobDetail';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: () => fetch(`/jobDetails.json`),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: () => fetch(`jobDetails.json`)
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'JobDetail/:id',
        element: <JobDetails />,
        // loader: ({ params }) => fetch(`/JobDetail/${params.id}`),
        loader: ({ params }) => fetch(`/jobDetails.json`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
)
