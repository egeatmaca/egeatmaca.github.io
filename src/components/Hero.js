import './Hero.css';
import NetworkGraph from './NetworkGraph';

function Hero() {
    return (
      <div id="home" class='hero'>
        <h3>Hi, I’m</h3>
        <h1>Ege</h1>
        <div>
          I build data / ml solutions that drive actionable insights to create value.
        </div>
        <NetworkGraph/>
      </div>
    );
  }
  
export default Hero;
