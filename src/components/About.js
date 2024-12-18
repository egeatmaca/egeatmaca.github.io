import './About.css';
import profilePic from '../images/profile.png'

function About() {
    return (
      <section id="about">
        <h1>Hi there!</h1>
        <div class="profile">
          <img
            src={profilePic}
            alt="Profile"
            loading="lazy"
          />
        </div>
        <p>
          My name is Ege Atmaca, I'm a passionate data scientist with a highly solution-oriented mindset. 
          I like to build data products that solve business problems in the most effective way.
        </p>
        <p>
          My superpowers are customer analytics and developing domain-specific machine learning applications.
        </p>
        <p>
          In addition to my love of data science, I am also interested in philosophy, psychology, mindfulness, social entrepreneurship and quantitative investment.
        </p>
        <p>
          Below are some open-source projects I've developed over the last years. You can also find some Medium articles from me in the end. 
        </p>
      </section>
    );
  }
  
  export default About;
  