import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Contact } from "../components/Contact"


export const Layout = () => {
    return (
        <div>
            <Header />
            <div className="mt-[100px]">
                <Outlet />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}
