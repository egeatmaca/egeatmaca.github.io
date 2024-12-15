import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Hero from './components/Hero.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


function App() {
  // Show menu on scroll
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      if (window.scrollY > 10) {
        root.dataset.scroll = 'true';
      } else {
        root.dataset.scroll = 'false';
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // State to toggle menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='App'>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Hero/>
      <main>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
