import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import Register from "./Pages/Registration";
import { RoutePaths } from "./Utils/enum";
import { useAuthContext } from "../Context/auth.context";

export const MainNavigation = () => {
    const authContext = useAuthContext()
    return (
        <Routes>
            <Route exact path={RoutePaths.Login} element={<Login />} />
            <Route exact path={RoutePaths.Register} element={<Register />} />
        </Routes>
    )
}