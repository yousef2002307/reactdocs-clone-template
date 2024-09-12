import React from "react";
import { useLocation } from "react-router-dom";
interface IProps {

}
export const Contribute= ({} : IProps) => {
    const location = useLocation();
    console.log(location)
    return (
 <>
hi {location.state.email}
 </>       

    )

}
export default Contribute