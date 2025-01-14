import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes=()=>{
    const data=localStorage.getItem("id")


    return data?<Outlet/>:<Navigate to="/"/>
}

export default ProtectedRoutes;