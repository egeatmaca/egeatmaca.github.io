import './Menu.css';
import { bool, func } from 'prop-types';

function Menu({ menuOpen, setMenuOpen }) {
  const navClass = menuOpen ? 'menu-open' : 'menu-closed';

  return (
    <nav className={navClass}>
      <div className="menu-btn">
        <button className="btn" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="16" height="16">
            <rect className="st0" width="16" height="3.2" />
            <rect y="6.4" className="st0" width="16" height="3.2" />
            <rect y="12.8" className="st0" width="16" height="3.2" />
          </svg>
        </button>
        <div> 
          <a
            className="btn social-btn"
            href="https://www.linkedin.com/in/ege-atmaca/"
            target="_blank"
          >
            <svg width="16" height="16">
              <path
                d="M0.1,2c0-1,0.8-1.8,1.9-1.8c1,0,1.8,0.9,1.8,1.8c0,1-0.8,1.9-1.8,1.9C0.9,3.9,0.1,3.1,0.1,2z M0.1,5h3.7v9.8
            H0.1V5z"
              />
              <path
                d="M15.9,8.5v6.2h-3.5V9.4c0-0.9-0.6-1.6-1.5-1.6c-0.8,0-1.4,0.6-1.4,1.5v5.5H5.8V5h3.7v1
            c0.6-0.7,1.6-1.2,2.8-1.2C14.4,4.7,15.9,6.3,15.9,8.5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="menu-body" onClick={() => setMenuOpen(false)}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div id="tip-scroll">Scroll &#8595;</div>
    </nav>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Menu;
