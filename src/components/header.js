import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import logo from "../images/logo.png"
import email from "../images/email.png"
import phone from "../images/phone.png"


const Header = () => (
  <div id="header">
    <div id="header-inner">
      <Link to="index">
        <div id="logo-wrap">
    		  <img id="logo" src={logo} alt="Codesoul logo" />
        </div>
    	</Link>

      <div id="navlinks">
      	<Link to="">
      		<a class="nav-link">Home</a>
      	</Link>
        <Link to="about">
          <a class="nav-link">The Team</a>
        </Link>
      	<Link to="">
      		<a class="nav-link">Our Work</a>
      	</Link>
      	<Link to="">
      		<a class="nav-link">Contact</a>
      	</Link>
      </div>
    </div>

    <div id="contact-head">
      <a id="phone" href="tel:07975658423"><img id="phone" src={phone} alt="Phone icon" /></a>
      <a id="email" href="mailto:jackgugi5213@hotmail.co.uk"><img id="email" src={email} alt="Email icon" /></a>
    </div>

  </div>
)
export default Header