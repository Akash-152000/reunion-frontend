import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import MyProfile from './components/MyProfile.jsx'
import UpdateProperty from './components/UpdateProperty.jsx'
import AddProperty from './components/AddProperty.jsx'
import MyProperties from './components/MyProperties.jsx'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path = "/myprofile" element={<MyProfile />} />
      <Route path = "/myproperties" element={<MyProperties />} />
      <Route path = "/property/:id" element={<UpdateProperty />} />
      <Route path = "/property/add" element={<AddProperty />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
