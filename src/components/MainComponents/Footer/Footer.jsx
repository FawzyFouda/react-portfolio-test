import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
        <>
      <footer>
        <div className="container">
            <div className="content row">
                <div className='text-center col-sm-12 col-md-4 mb-sm-1'>
                    <h2>location</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='text-center col-sm-12 col-md-4 mb-sm-1'>
                    <h2>around the web</h2>
                    <ul className='web d-flex justify-content-center p-0'>
                        <li><a href="#"><i className='fa-brands fa-facebook'></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-solid fa-globe"></i></a></li>
                    </ul>
                </div>
                <div className='text-center col-sm-12 col-md-4 mb-sm-1'>
                    <h2>about freelancer</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
      </footer>
      <div className='bottom-footer'>
        <p>Copyright © Your Website 2021</p>
      </div>
      </>
    )
  }
}
