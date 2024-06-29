import { Outlet , useNavigate} from "react-router-dom"
import Footer from "../pages/shared/Footer/Footer"
import NavBar from "../pages/shared/NavBar/NavBar"
import { NextUIProvider } from "@nextui-org/react"


function MainLayout({children}) {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
    <div>
    <NavBar />
    <Outlet>{children}</Outlet>
    <Footer />
    </div>
    </NextUIProvider>
  )
}

export default MainLayout
