import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Announcements from "./pages/announcements.jsx"
import Viewannouncement from "./pages/viewanouncement.jsx"
import AnnouncementsAdminPage from "./pages/announcementsAdminPage.jsx"


import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Announcements/>,
  },
 
   
  {
    path:"/viewannouncement/:announcementid",
    element: <Viewannouncement/>


  } ,

  {
    path:"/announcementadminpage",
    element: <AnnouncementsAdminPage/>


  }

  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
