import { AppBar } from "@mui/material"
import MenuAppBar from "../app-bar/MenuAppBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <MenuAppBar/>
            <Outlet/>
        </>
    )
}

export default MainLayout