function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Inventory Management System</h3>

          <p>
            A web-based inventory management application that helps manage
            products, categories, suppliers, stock, and orders.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, Node.js, Express.js,
            MongoDB
          </p>

          <button>View Project</button>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Student Portfolio</h3>

          <p>
            A professional personal portfolio website that showcases my
            skills, education, projects, and contact information.
          </p>

          <p>
            <strong>Technologies:</strong> React.js, JavaScript, HTML, CSS
          </p>

          <button>View Project</button>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Python Projects</h3>

          <p>
            A collection of Python programming practice projects focused on
            problem solving, algorithms, and programming fundamentals.
          </p>

          <p>
            <strong>Technologies:</strong> Python
          </p>

          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;