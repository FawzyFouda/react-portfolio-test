import React, { Component } from 'react'
import LineStar from '../../SubComponents/LineStar/LineStar'
import './Contact.css'
import $ from 'jquery';

export default class Contact extends Component {
  state = {
    blackLine:'#000'
  }
  componentDidMount(){
    $( "input" ).on( "keyup", function(e) {
      if(e.target.value.length > 0){
        $(`label[for=${e.target.id}]`).addClass('move')
      }else if(e.target.value.length === 0){
        $(`label[for=${e.target.id}]`).removeClass('move')
      }
    } )
  }

  render() {
    return (
      <>
      <section className='contacts'>
        <h2 className='text-center'>Contacts section</h2>
        <LineStar  blackLine={this.state.blackLine}/>
        <form className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
          <label htmlFor="userName" className="position-relative top-0">userName : </label>
          <input id="userName" type="text" placeholder="userName" name="userName" className="border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
          <label  htmlFor="userAge" className="position-relative top-0">userAge : </label>
          <input  id="userAge" type="text" placeholder="userAge" name="userName" className="border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
          <label  htmlFor="userEmail" className="position-relative top-0">userEmail : </label>
          <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
          <label  htmlFor="userPassword" className="position-relative top-0">userPassword : </label>
          <input id="userPassword" type="text" placeholder="userPassword" name="userName" className="border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
          <button className="btn mt-4 text-white" style={{backgroundColor: "#1abc9c"}}> send Message </button>
        </form>
      </section>
      </>
    )
  }
}
