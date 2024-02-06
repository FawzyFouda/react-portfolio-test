import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

 class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarPadding: '25px 0',
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

     handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY)
      const navbarHeight = 70; // ارتفاع Navbar بدون تغيير اللون

      // تحديث لون الخلفية بناءً على السكرول
      if (scrollY > navbarHeight) {
        this.setState({ navbarPadding: '10px 0' });
      } else {
        this.setState({ navbarPadding: '25px 0' });
      }
    };
  render(){
  return (
      <>
        <nav className="navbar navbar-expand-lg" style={{padding:this.state.navbarPadding}}>
          <div className="container">
            <a className="navbar-brand" href="#">Start Framework</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"  aria-current="page" to="portfolio">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"  aria-current="page" to="contact">Contacts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
export default Nav
