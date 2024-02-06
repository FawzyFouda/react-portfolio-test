import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default class MasterLayout extends Component {
  
  render() {
    return (
      <div>
        <Nav/>
        <Outlet />
        <Footer/>
      </div>
    )
  }
}
