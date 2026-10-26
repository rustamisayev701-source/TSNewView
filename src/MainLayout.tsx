import { useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function MainLayout() {
    const [isdark, setisdark] = useState<boolean>(false)

    return (
        <div className={isdark ? "dark" : ""}>
            <Header isdark={isdark} setisdark={setisdark} />
            <Outlet />
        </div>
    )
}

export default MainLayout