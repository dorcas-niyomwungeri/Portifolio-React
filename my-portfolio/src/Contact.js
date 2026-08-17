import "./Contact.css";
import Nav from "./Nav";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✓");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Nav />

      <section className="contact">

        <div className="contact-info">

          <p className="contact-title">
            CONTACT ME
          </p>

          <h1>
            Let's Build Something <span>Together</span>
          </h1>

          <p className="contact-text">
            I'm always open to discussing new opportunities, creative ideas,
            collaborations, or freelance projects. Feel free to reach out and
            let's create something amazing together.
          </p>

          <div className="info-box">
            <h3>Email</h3>
            <p>
              dorcasniyomwungeri08@gmail.com
            </p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <p>
              +250 786 073 970
            </p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>
              Kigali, Rwanda
            </p>
          </div>

        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {status && (
            <p className="form-status">
              {status}
            </p>
          )}

        </form>

      </section>
    </>
  );
}