import { BrowserRouter , Routes , Route, createBrowserRouter , RouterProvider } from 'react-router-dom'
import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Layout from './components/Layout/Layout'



export default function App() {
  const router = createBrowserRouter([
    {path :"/" , element : <Layout/> , children : [
      {path :"/" , element : <Home/>},
      {path : "/About" , element : <About/>},
      {path:"/Portfolio" , element:<Portfolio/>},
      {path:"/Contact",element:<Contact/> }
    ]}
  ]);
  return (
    <>
    <RouterProvider router={router}/> 
    




    </>
  )
}
