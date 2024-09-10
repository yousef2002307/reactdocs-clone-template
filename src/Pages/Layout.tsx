import React from "react";
import Nv from "../Com/Nv/Nv";
import { Outlet } from "react-router-dom";
interface IProps {

}
export const Layout= ({} : IProps) => {
    return (
 <>
 <div>
            <Nv/>
            <Outlet/>
            <h2>jpcjpjerrfekfnrf er fo ref</h2>
        </div>
 </>       

    )

}
export default Layout