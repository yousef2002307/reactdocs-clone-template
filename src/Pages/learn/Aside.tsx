import React from "react";
import { NavLink } from "react-router-dom";
interface IProps {

}
export const Aside= ({} : IProps) => {
    return (
 <>
<aside>
<ul>
 <li><NavLink to="/learn" end> Home </NavLink></li>
 <li><NavLink to="/learn/heading2">heading2 </NavLink></li>


 </ul>
</aside>
 </>       

    )

}
export default Aside