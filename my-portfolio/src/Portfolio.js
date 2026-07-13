import Nav from "./Nav";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <Nav />

      <h1 className="title">My Portfolio</h1>

      <div className="projects">
        <div className="card">
          <img src="/Image1.jpeg" alt="Project 1" />
          <h2>Finance Management System</h2>
          <p>
            A website that helps users manage income and expenses.
          </p>
        </div>

        <div className="card">
          <img src="/Image2.jpeg" alt="Project 2" />
          <h2>Tech Store</h2>
          <p>
            An online shopping website built with React.
          </p>
        </div>

      </div>
    </div>
  );
}