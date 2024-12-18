import { useEffect, useState } from 'react';
import './App.css';
import { Menu, Hero, About, Projects, Articles, Contact, Footer } from './components';


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
        <Articles/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
