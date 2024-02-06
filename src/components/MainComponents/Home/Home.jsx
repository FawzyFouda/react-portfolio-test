import React, { Component } from 'react'
import './Home.css'
import img1 from '../../../assets/images/avatar.svg'
import LineStar from '../../SubComponents/LineStar/LineStar'
export default class Home extends Component {
  state = {
    whiteLine:'#FFF',
  }
  render() {
    return (
      <>
        <div className="home d-flex flex-column justify-content-center align-items-center text-white">
            <div className='profile-img'>
                <img src={img1} alt="" />
            </div>
            <div>
                <h2>START FRAMEWORK</h2>
            </div>
            <LineStar whiteLine={this.state.whiteLine}/>
            <div className="text-center">      
                <div>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
      </>
    )
  }
}
