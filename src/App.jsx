import React, {useContext, useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import UserProvider from './context/User/UserProvider.jsx'
import PropertyProvider from "./context/Property/PropertyProvider"
import UserContext from './context/User/UserContext.js'
import AlertModal from './components/AlertModal.jsx'



function App() {

  const context = useContext(UserContext)
  const {showAlert, isAlertOpen, onClose, alertMessage} = context


  return (
    <div className="font-poppins">
      {/* <UserProvider> */}
        <PropertyProvider>
          <Header />
          <AlertModal isOpen={isAlertOpen} onClose={onClose} message={alertMessage}/>
          <Outlet />
        </PropertyProvider>
      {/* </UserProvider> */}
    </div>
  )
}

export default App
