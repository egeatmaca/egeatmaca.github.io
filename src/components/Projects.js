import './Projects.css';

function Projects() {
    // <img
    // src="/src/img/xyz.jpg"
    // width="100%"
    // alt="XYZ screenshot"
    // loading="lazy"
    // style="aspect-ratio: 2500 / 1500"
    // />
    return (
        <section>
            <h1 id="projects">Projects</h1>
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
            <div className="image">
            <img
                src="/src/img/xyz.jpg"
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
  