import React from "react";
import Nv from "../../Com/Nv/Nv";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

interface IProps {

}
export const LearnLayout = ({} : IProps) => {
    return (
 <>
<Nv/>
<Aside/>
<Outlet/>

 </>       

    )

}
export default LearnLayout