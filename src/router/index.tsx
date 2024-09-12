

import { Outlet } from "react-router-dom";
import HomePage from "../Pages";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Layout from "../Pages/Layout";
import LearnLayout from "../Pages/learn/Layout";
import Index from "../Pages/learn";
import Heading2 from "../Pages/learn/Heading2";
import Login from "../Pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import Contribute from "../Pages/Contribute";
import ProtectedRoute from "../Auth/ProtectedRoute";
import RouteErrorHandler from "../Errors/RouteErrorHandler";
const loggedin = true;
const useData : {email : string} | null = loggedin ? {email:"mmaihd@gmail.com"} : null
const router =createBrowserRouter( createRoutesFromElements(
    <>
    <Route path="/" element={
       <Layout/>
    } errorElement={<RouteErrorHandler statusCode={404}/>}>
          <Route path="/" element={<HomePage/>}/>
        <Route path="/con" element={<Contact/>}/>

        <Route path="/ab" element={<About/>}/>
        <Route path="/login" element={ <ProtectedRoute IsAllowed={!loggedin} redirectTo="/cont" data={useData}>
<Login/>
</ProtectedRoute >}/>

<Route path="/cont" element={ <ProtectedRoute IsAllowed={loggedin} redirectTo="/login" data={useData}>
  <Contribute/>
</ProtectedRoute>}/>
    </Route>


<Route path="/learn" element={
    <LearnLayout/>
 }>
       <Route index element={<Index/>}/>
     
       <Route path ="heading2" element={<Heading2/>}/>
    
 </Route>

 <Route path="*" element={<h2>404</h2>}/>
 </>
));

export default router;

