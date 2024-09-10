import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './Com/Form';
import Test from './Com/Test'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import Nv from './Com/Nv/Nv'
export default function App() {
  return (
    <>
  
    <RouterProvider router={router}/>
    </>
     
  )
}

