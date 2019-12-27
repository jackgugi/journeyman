import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Get in Touch!</h1>
    <p>07975 658 423</p>
    <p>jackgugi5213@hotmail.co.uk</p>

    <form id="contact-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
	  <input type="hidden" name="bot-field" />
	  <input type="hidden" name="form-name" value="contact" />
	  <div className="field half first">
	    <label htmlFor="name">Name</label>
	    <input type="text" name="name" id="name" />
	  </div>
	  <div className="field half">
	    <label htmlFor="email">Email</label>
	    <input type="text" name="email" id="email" />
	  </div>
	  <div className="field">
	    <label htmlFor="message">Message</label>
	    <textarea name="message" id="message" rows="6" />
	  </div>
	  <div className="actions">
	      <input type="submit" value="Send Message" className="special" />
	      <input type="reset" value="Clear" />
	  </div>
	</form>
  </Layout>
)