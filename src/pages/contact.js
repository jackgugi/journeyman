import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Get in Touch!</h1>
    <p>07975 658 423</p>
    <p>jackgugi5213@hotmail.co.uk</p>

    <form name="contact" netlify>
      <h2>Send us a message</h2>
	  <p>
	    <input type="text" name="name" placeholder="Name" />
	  </p>
	  <p>
	    <input type="email" name="email" placeholder="Email" />
	  </p>
	  <p>
	    <button type="submit">Send</button>
	  </p>
	</form>
  </Layout>
)