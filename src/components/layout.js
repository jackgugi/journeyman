import React from "react"
import "./layout.css"
import Header from "../components/header"

export default ({ children }) => (
  <div>
  	<Header />
  	<div id="main-sec">
    	{children}
    </div>
    <div id="footer">
    	<p id="foot-left">Copyright 2019 | Codesoul</p>
    	<p id="foot-right">Keith Greer & Jack Gugi</p>
    </div>
  </div>
)