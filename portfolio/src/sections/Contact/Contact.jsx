import React, { useRef, useState } from "react";

import "./style.scss";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const submitHandler = (e) => {
    // remove all error classNames
    const refs = [firstNameRef, lastNameRef, emailRef, subjectRef, messageRef];
    refs.forEach((r) => r.current.classList.remove("error"));

    // Validation

    if (firstName.trim().length <= 0) {
      e.preventDefault();
      firstNameRef.current.focus();
      firstNameRef.current.classList.add("error");

      return 0;
    }

    if (lastName.trim().length <= 0) {
      e.preventDefault();
      lastNameRef.current.focus();
      lastNameRef.current.classList.add("error");

      return 0;
    }

    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.trim().length <= 0 && !emailRegex.test(email)) {
      e.preventDefault();
      emailRef.current.focus();
      emailRef.current.classList.add("error");

      return 0;
    }

    if (subject.trim().length <= 0) {
      e.preventDefault();
      subjectRef.current.focus();
      subjectRef.current.classList.add("error");

      return 0;
    }

    if (message.trim().length <= 0) {
      e.preventDefault();
      messageRef.current.focus();
      messageRef.current.classList.add("error");

      return 0;
    }
  };

  const clearFormHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form
        id="contact-form"
        name="contact"
        method="POST"
        onSubmit={submitHandler}
      >
        {/* Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="input-text-group">
          <div className="input-group">
            <label htmlFor="first-name">First name</label>
            <input
              ref={firstNameRef}
              type="text"
              name="first-name"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Last name</label>
            <input
              ref={lastNameRef}
              type="text"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject</label>
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            ref={messageRef}
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="button primary">
            Submit
          </button>
          <button
            type="reset"
            className="button secondary"
            onClick={clearFormHandler}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}
