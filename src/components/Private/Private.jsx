import React from "react";
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "../../hook/useAuth";



export default function PrivateRoutes() {
    const isAuth = useAuth().isAuth
    return (
        <>
            {isAuth ? <Outlet  /> : <Navigate to='/login' />}
        </>

    )

}