import { Outlet } from 'react-router-dom'
import Navbar from "./NavbarComponent/Navbar"
import Fotter from './Fotter/Fotter';
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Fotter />
    </>
  )
}

export default Layout;