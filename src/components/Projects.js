import './Projects.css';

function Projects() {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <hr />
            <h2>XYZ</h2>
            <ul className="skills">
                <li>Python</li>
                <li>Django</li>
                <li>Tensorflow</li>
            </ul>
            <p>
                Lorem ipsum. Lorem ipsum. Lorem ipsum.
            </p>
            <br />
            <div className="screenshot">
                <img
                    src="/src/images/xyz.jpg"
                    width="100%"
                    alt="XYZ screenshot"
                    loading="lazy"
                />
            </div>
            <hr />
        </section>
    );
}

export default Projects;
  