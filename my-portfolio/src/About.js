import "./About.css";
import Nav from "./Nav";

export default function About() {
  return (
    <div>
      <Nav />

      <div className="about-container">
        <h1>About Me</h1>

        <p>
          Hello! My name is <strong>Dorcas Niyomwungeri</strong>.
        </p>

        <p>
          I am a Software Development student at <strong>Glory Academy</strong>.
        </p>

        <p>
          I enjoy creating simple and responsive websites using HTML, CSS, and
          JavaScript.
        </p>

        <p>
          I also have experience with Vue.js and I am currently learning React
          to improve my web development skills.
        </p>

        <p>
          My goal is to become a professional full-stack web developer.
        </p>
      </div>
    </div>
  );
}