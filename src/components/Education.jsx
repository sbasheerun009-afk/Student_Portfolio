function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">

        {/* B.Tech */}
        <div className="education-card">
          <h3>Bachelor of Technology (B.Tech)</h3>

          <h4>Computer Science and Engineering</h4>

          <p>
            Chalapathi Institute of Technology
          </p>

          <p>
            2023 - 2027
          </p>

          <p>
            CGPA: 8.5
          </p>
        </div>

        {/* Intermediate */}
        <div className="education-card">
          <h3>Intermediate</h3>

          <p>
            Your College Name
          </p>

          <p>
            2021 - 2023
          </p>
        </div>

        {/* School */}
        <div className="education-card">
          <h3>SSC</h3>

          <p>
            Your School Name
          </p>

          <p>
            2020 - 2021
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;