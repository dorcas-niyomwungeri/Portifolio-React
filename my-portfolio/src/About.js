import "./About.css";
import Nav from "./Nav";

export default function About() {
  return (
    <>
      <Nav />

      <section className="about">

        <div className="about-left">

          <p className="intro">ABOUT ME</p>

          <h1>
            Hi, I'm <span>Dorcas Niyomwungeri</span>
          </h1>

          <p className="lead">
            I am a passionate software developer who enjoys building modern,
            responsive, and user-friendly web applications. I believe that
            technology should solve real problems while providing users with an
            enjoyable experience.
          </p>

          <div className="section">
            <h2>Who I Am</h2>

            <p>
              I am currently studying Software Development at Glory Academy,
              where I have gained experience in both front-end and back-end
              development. I enjoy turning ideas into functional applications
              and continuously improving my programming skills through personal
              projects and practice.
            </p>

            <p>
              My curiosity drives me to learn new technologies, experiment with
              different frameworks, and build projects that challenge my
              problem-solving abilities.
            </p>
          </div>

          <div className="section">
            <h2>My Journey</h2>

            <p>
              My journey started with HTML and CSS, where I learned how to build
              simple web pages. As my skills grew, I explored JavaScript to add
              interactivity and later moved on to frameworks like Vue.js and
              React to create more dynamic and scalable applications.
            </p>

            <p>
              Along the way, I have also worked with Node.js, Express, MySQL,
              and REST APIs, giving me experience in developing complete
              full-stack web applications.
            </p>
          </div>

          <div className="section">
            <h2>Technical Skills</h2>

            <div className="skills">

              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Vue.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
              <span>Git & GitHub</span>
              <span>Responsive Design</span>

            </div>
          </div>

          <div className="section">
            <h2>Current Focus</h2>

            <p>
              I am currently expanding my React and full-stack development
              skills while building practical projects that improve my
              understanding of software architecture, APIs, databases, and user
              experience.
            </p>

            <p>
              My long-term goal is to become a professional full-stack developer
              who creates impactful digital solutions and contributes to
              meaningful software projects.
            </p>
          </div>

        </div>

        <div className="about-right">
  <img src="/portImage.png" alt="Dorcas" />
        </div>

      </section>
    </>
  );
}