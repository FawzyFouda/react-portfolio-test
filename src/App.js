import React, { Component } from 'react'
import './App.css'
import About from './components/MainComponents/About/About'
import Portfolio from './components/MainComponents/Portfolio/Portfolio'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Masterlayout from './components/MainComponents/Masterlayout/Masterlayout'
import Contact from './components/MainComponents/Contact/Contact'
import Home from './components/MainComponents/Home/Home'
import Notfound from './components/SubComponents/Notfound/Notfound'

const router = createBrowserRouter([
  {path:'',element:<Masterlayout/>,children:[
    {path:'/',element:<Home/>},
    {path:'contact',element:<Contact/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'*',element:<Notfound/>},
  ]}
])
class App extends Component {
  
  

  render() {
    return (
      <>
      <RouterProvider router={router}/>
      </>
    )
  }
}

export default App