import "./Skills.css";
import Nav from "./Nav";

export default function Skills() {
  return (
    <>
      <Nav />

      <section className="skills-page">

        <p className="skills-title">MY SKILLS</p>

        <h1>
          Technologies & <span>Expertise</span>
        </h1>

        <p className="skills-text">
          I continuously improve my technical and creative skills to build
          responsive, scalable and visually appealing digital products. My
          experience covers frontend development, backend development,
          user experience design and graphic design.
        </p>

        <div className="skills-container">

          <div className="skill-card">
            <h2>HTML5</h2>
            <span>100%</span>
          </div>

          <div className="skill-card">
            <h2>CSS3</h2>
            <span>100%</span>
          </div>

          <div className="skill-card">
            <h2>JavaScript</h2>
            <span>90%</span>
          </div>

          <div className="skill-card">
            <h2>React</h2>
            <span>85%</span>
          </div>

          <div className="skill-card">
            <h2>Vue.js</h2>
            <span>90%</span>
          </div>

          <div className="skill-card">
            <h2>Node.js</h2>
            <span>80%</span>
          </div>

          <div className="skill-card">
            <h2>Express.js</h2>
            <span>80%</span>
          </div>

          <div className="skill-card">
            <h2>UX / UI Design</h2>
            <span>100%</span>
          </div>

          <div className="skill-card">
            <h2>Graphic Design</h2>
            <span>100%</span>
          </div>

          <div className="skill-card">
            <h2>Git & GitHub</h2>
            <span>100%</span>
          </div>

        </div>

      </section>
      <p className="copyright">
      © 2026 Dorcas Niyomwungeri. All Rights Reserved.
    </p>
    </>
  );
}