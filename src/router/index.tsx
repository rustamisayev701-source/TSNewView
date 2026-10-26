import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../MainLayout"

import Home from "../pages/home/Home"
import About from "../pages/about/About"
import List from "../pages/list/List"
import Profile from "../pages/profile/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: (
                    <About
                        product={{
                            id: 1,
                            name: "Laptop",
                            price: 1500
                        }}
                        count={5}
                    />
                )
            },
            {
                path: "/list",
                element: <List />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
])

export default router