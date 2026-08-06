import "./About.css";
import Nav from "./Nav";

export default function About() {
  return (
    <>
      <Nav />

      <section className="about">

        <p className="title">ABOUT ME</p>

        <h1>
          Building Modern Digital <span>Experiences</span>
        </h1>

        <p className="description">
          I am a passionate Full Stack Developer dedicated to designing and
          developing modern, scalable, and user-focused web applications.
          Combining creativity with technical expertise, I build solutions that
          deliver exceptional user experiences while maintaining clean,
          efficient, and maintainable code.
        </p>

        <div className="cards">

          <div className="card">
            <h2>Who I Am</h2>

            <p>
              I am a Software Development student with experience in frontend,
              backend, UX/UI design, and graphic design. I enjoy transforming
              ideas into interactive digital products that are visually
              appealing, responsive, and performance-driven.
            </p>
          </div>

          <div className="card">
            <h2>My Journey</h2>

            <p>
              My journey started with HTML and CSS before progressing to
              JavaScript, Vue.js, React, Node.js, Express, and database
              development. Every project has strengthened my problem-solving
              abilities and expanded my understanding of modern software
              engineering.
            </p>
          </div>

          <div className="card">
            <h2>My Mission</h2>

            <p>
              I strive to develop high-quality digital solutions that improve
              user experiences, simplify complex processes, and help businesses
              establish a strong online presence through innovative technology.
            </p>
          </div>

          <div className="card">
            <h2>Professional Goals</h2>

            <p>
              My goal is to become a professional Full Stack Developer capable
              of delivering complete web solutions, from designing intuitive
              user interfaces to developing secure backend systems and scalable
              databases.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}