import React, { Component } from 'react'
import LineStar from '../../SubComponents/LineStar/LineStar'
import './Portfolio.css'
import img1 from '../../../assets/images/port1.png'
import img2 from '../../../assets/images/port2.png'
import img3 from '../../../assets/images/port3.png'
import $ from 'jquery';

export default class Portfolio extends Component {

  state = {
    blackLine:'#000',
    PortfolioImg :[{
      id:1,
      source:img1,},
    {
      id:2,
      source:img2,
    },
    {
      id:3,
      source:img3,
    },
    {
      id:4,
      source:img1,
    },
    {
      id:5,
      source:img2,
    },
    {
      id:6,
      source:img3,
    }],
        // method to open selected image
    selectedImg:function(imgsrc){
      $('.selectImgContainer').append(`
        <img src=${imgsrc}/>`);
        $('.layout').removeClass('d-none')
    },
    // method to close image
    closeImg:function() {
      $('.layout').click(() =>{
        $('.layout').addClass('d-none')
        $('.selectImgContainer').empty()
      })
    }
  }

  render() {
    
    return (
      <>
        <section className='portfolio d-flex flex-column justify-content-center align-items-center'>
          <div className="container">
            <h2 className='text-center'>portfolio component</h2>
            <LineStar  blackLine={this.state.blackLine}/>
            <div className='portfolio-content row g-5'>
{/* map to display images  */}
              {
                this.state.PortfolioImg.map((item,idx) => {
                  return(
                  <div className='col-lg-4 col-md-6' key={idx}>
                <div className='port-img-container position-relative' onClick={() =>this.state.selectedImg(item.source)}>
                  <img src={item.source} alt="" className='w-100 rounded-2'/>
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 rounded-2 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
                  )
                })
              }
              </div>
          </div>
          <div className='selectImg'>
          <div className='layout d-none' onClick={() =>this.state.closeImg()}></div>
              <div className="selectImgContainer"></div>
          </div>
      </section>
      </>
    )
  }
}
