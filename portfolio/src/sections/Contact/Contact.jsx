import React from "react";

import "./style.scss";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form id="contact-form" name="contact" method="POST">
        {/* Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="input-text-group">
          <div className="input-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" id="first-name" />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" id="last-name" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />
        </div>
        <div className="button-group">
          <button type="submit" className="button primary">
            Submit
          </button>
          <button type="reset" className="button secondary">
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}
