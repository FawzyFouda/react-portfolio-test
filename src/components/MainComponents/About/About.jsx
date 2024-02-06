import React, { Component } from 'react'
import LineStar from '../../SubComponents/LineStar/LineStar'
import './About.css'

class About extends Component {
  state = {
    whiteLine:'#FFF',
    blackLine:'#000'
  }
  
  render() {
    return (
      <>
      <section className='about d-flex flex-column justify-content-center align-items-center'>
        <div className="container">
            <h2 className='text-center '>about component</h2>
            <LineStar  whiteLine={this.state.whiteLine}/>
            <div className='about-content row'>
              <p className='col-lg-6 col-sm-12 col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              <p className='col-lg-6 col-sm-12 col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>  
      </section>
      </>
    )
  }
}

export default About