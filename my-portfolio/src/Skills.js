import "./Skills.css";
import Nav from "./Nav";

export default function Skills() {
  return (
    <div>
      <Nav />

      <div className="skills-container">
        <h1>My Skills</h1>

        <p><strong>Name:</strong> Dorcas Niyomwungeri</p>
        <p><strong>School:</strong> Glory Academy</p>
        <p><strong>Course:</strong> Software Development</p>

        <h2>Technical Skills</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vue.js</li>
          <li>Currently Learning React</li>
        </ul>
      </div>
    </div>
  );
}