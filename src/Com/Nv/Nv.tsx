import React from "react";
import { Link,NavLink } from "react-router-dom";
interface IProps {

}
export const Nv= ({} : IProps) => {
    return (
 <>
 <div className="nav">
 <h1>Navbar</h1>
 <ul>
 <li><NavLink to="/"> Home </NavLink></li>
 <li><NavLink to="/ab">About </NavLink></li>
 <li><NavLink to="/con">contact </NavLink></li>
 <li><NavLink to="/learn">lesran </NavLink></li>
 </ul>
 </div>
 </>       

    )

}
export default Nv