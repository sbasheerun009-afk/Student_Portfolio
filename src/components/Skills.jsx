import "./Skills.css";
function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        <div className="skill">
          <h3>Programming Languages</h3>
          <p>Python, JavaScript</p>
        </div>

        <div className="skill">
          <h3>Frontend</h3>
          <p>HTML, CSS, React.js</p>
        </div>

        <div className="skill">
          <h3>Backend</h3>
          <p>Node.js, Express.js</p>
        </div>

        <div className="skill">
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div className="skill">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;