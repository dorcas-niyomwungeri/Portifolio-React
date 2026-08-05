import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <Nav />

      <div className="portfolio">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I've developed using React, Vue.js,
          JavaScript, and other web technologies.
        </p>

        <div className="projects">

          <Link to="/finance" className="project-card">
            <h2>💰 Finance Management System</h2>
            <p>
              A finance management website that helps users manage income,
              expenses, budgets, and financial reports.
            </p>

            <span>React • Node.js • MySQL</span>
          </Link>

          <Link to="/techstore" className="project-card">
            <h2>🛒 Tech Store</h2>
            <p>
              An e-commerce website where users can browse products, add items
              to a cart, and complete purchases.
            </p>

            <span>React • CSS • Fake Store API</span>
          </Link>

          <Link to="/checkers" className="project-card">
            <h2>♟️ Checkers Game</h2>
            <p>
              A fully playable Checkers game built with Vue.js featuring
              interactive gameplay and move validation.
            </p>

            <span>Vue.js • JavaScript</span>
          </Link>

          <Link to="/igisoro" className="project-card">
            <h2>🎲 Igisoro Game</h2>
            <p>
              A digital version of the traditional Rwandan Igisoro board game,
              recreated with an interactive interface.
            </p>

            <span>Vue.js • JavaScript</span>
          </Link>

          <Link to="/weather" className="project-card">
            <h2>🌤️ Weather App</h2>
            <p>
              Displays real-time weather information, forecasts, and
              temperature using a weather API.
            </p>

            <span>Vue.js • Weather API</span>
          </Link>

        </div>
      </div>
    </>
  );
}