import "./Home.css";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero">

        <div className="hero-text">

          <p className="small-title">FULL STACK DEVELOPER</p>

          <h1>
            Hello, I'm <br />
            <span>Dorcas Niyomwungeri</span>
          </h1>

          <p className="hero-description">
            I design and develop modern digital experiences that combine
            creativity, usability, and performance. My passion lies in building
            responsive web applications, creating intuitive user interfaces,
            developing scalable backend systems, and transforming ideas into
            impactful digital products.
          </p>

          <div className="buttons">
            <button>Download CV</button>
            <button className="outline">Contact Me</button>
          </div>

          <div className="stats">

            <div>
              <h2>15+</h2>
              <p>Projects</p>
            </div>

            <div>
              <h2>8+</h2>
              <p>Technologies</p>
            </div>

            <div>
              <h2>2+</h2>
              <p>Years Learning</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="circle"></div>

          <img src="/portImage.png" alt="Dorcas" />

        </div>

      </section>

    </>
  );
}