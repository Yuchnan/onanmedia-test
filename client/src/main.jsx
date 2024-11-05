import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'

import Landing from "@/pages/Landing"
import Crud from "@/pages/Crud"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/crud",
    element: <Crud />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
