import React from "react";

import "./style.scss";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form id="contact-form">
        <div className="input-text-group">
          <div className="input-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea />
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