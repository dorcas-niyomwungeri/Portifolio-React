import "./Home.css";
import Nav from "./Nav";

export default function Home() {
  return (
    <div>
      <Nav />

      <div className="home-container">
        <h1>Welcome to My Portfolio</h1>

        <h2>Hello, I'm Dorcas Niyomwungeri</h2>

        <p>I am a Software Development student at Glory Academy.</p>

        <p>I enjoy building websites and learning new technologies.</p>

        <p>This portfolio introduces you to my skills and my journey as a web developer.</p>
      </div>
    </div>
  );
}