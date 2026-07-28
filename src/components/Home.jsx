import Home from "./Home.css";
function Home() {
  return (
    <section id="home" className="home">
      
      <div className="home-content">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Shaik Basheerun
        </h1>

        <h2>
          Aspiring Software Engineer
        </h2>

        <p className="description">
          I am a final-year Computer Science Engineering student
          passionate about software Engineer and problem solving.
          I enjoy learning new technologies and building practical
          applications.
        </p>

        <div className="home-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn">
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;