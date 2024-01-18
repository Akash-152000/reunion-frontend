import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import UserProvider from './context/User/UserProvider.jsx'
import PropertyProvider from "./context/Property/PropertyProvider"

function App() {

  return (
    <div className="font-poppins">
      <UserProvider>
      <PropertyProvider>
        <Header />
        <Outlet />
      </PropertyProvider>
      </UserProvider>
    </div>
  )
}

export default App
