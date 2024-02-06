import React, { Component } from 'react'
import './LineStar.css'

export default class LineStar extends Component {
  
  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3" style={{background: this.props.blackLine || this.props.whiteLine}}></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3" style={{background: this.props.blackLine || this.props.whiteLine}}></div>
        </div>
      </>
    )
  }
}
