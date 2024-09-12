import React from "react";
import { Navigate } from "react-router-dom";
interface IProps {
IsAllowed : boolean,
redirectTo : string
children : JSX.Element,
data ?: unknown
}
export const ProtectedRoute= ({IsAllowed,redirectTo,children,data} : IProps) => {
if(!IsAllowed){
return <Navigate to={redirectTo} replace state={data}/>
}else{
return children
}

}
export default ProtectedRoute