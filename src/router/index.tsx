import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements
  } from "react-router-dom";

import { Outlet } from "react-router-dom";
import HomePage from "../Pages";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Layout from "../Pages/Layout";
import LearnLayout from "../Pages/learn/Layout";
import Index from "../Pages/learn";
import Heading2 from "../Pages/learn/Heading2";
const router =createBrowserRouter( createRoutesFromElements(
    <>
    <Route path="/" element={
       <Layout/>
    }>
          <Route path="/" element={<HomePage/>}/>
        <Route path="/con" element={<Contact/>}/>

        <Route path="/ab" element={<About/>}/>
    </Route>


<Route path="/learn" element={
    <LearnLayout/>
 }>
       <Route index element={<Index/>}/>
     
       <Route path ="heading2" element={<Heading2/>}/>
    
 </Route>
 </>
));

export default router;

