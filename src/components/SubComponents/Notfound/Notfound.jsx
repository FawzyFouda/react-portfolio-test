import React, { Component } from 'react'
import notfound from '../../../assets/images/notfound.png'

export default class Notfound extends Component {
  render() {
    return (
        <>
        <div>
            <img src={notfound} alt="notfound" />
        </div>
        </>
    )
  }
}
