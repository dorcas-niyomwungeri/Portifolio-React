import "./Service.css";
import Nav from "./Nav";

export default function Services() {
  return (
    <>
      <Nav />

      <section className="services">

        <p className="service-title">MY SERVICES</p>

        <h1>
          What I <span>Provide</span>
        </h1>

        <p className="service-text">
          I provide complete digital solutions by combining creative design,
          modern frontend development and powerful backend technologies to
          deliver professional, scalable and user-focused applications.
        </p>

        <div className="service-container">

          <div className="service-card">
            <h2>Frontend Development</h2>

            <p>
              I develop responsive, modern and interactive websites using HTML,
              CSS, JavaScript, React and Vue.js. My focus is creating fast,
              accessible and visually engaging interfaces that provide excellent
              user experiences across all devices.
            </p>
          </div>

          <div className="service-card">
            <h2>Backend Development</h2>

            <p>
              I build secure backend systems using Node.js and Express while
              integrating databases and REST APIs. My solutions emphasize
              performance, scalability, clean architecture and efficient data
              management.
            </p>
          </div>

          <div className="service-card">
            <h2>UX / UI Design</h2>

            <p>
              I design intuitive user interfaces and meaningful user
              experiences through research, wireframing, prototyping and visual
              design, ensuring every product is simple, attractive and easy to
              use.
            </p>
          </div>

          <div className="service-card">
            <h2>Graphic Design</h2>

            <p>
              I create professional visual identities including logos,
              marketing materials, social media graphics, posters and branding
              assets that strengthen brand recognition and communicate ideas
              effectively.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}