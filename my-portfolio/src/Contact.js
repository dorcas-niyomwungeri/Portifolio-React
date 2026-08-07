import "./Contact.css";
import Nav from "./Nav";

export default function Contact() {
  return (
    <>
      <Nav />

      <section className="contact">

        <div className="contact-info">

          <p className="contact-title">CONTACT ME</p>

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
            <p>dorcasniyomwungeri@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <p>+250 7XX XXX XXX</p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>Kigali, Rwanda</p>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="7"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>

        </form>

      </section>
<p className="copyright">
      © 2026 Dorcas Niyomwungeri. All Rights Reserved.
    </p>
    </>
  );
}