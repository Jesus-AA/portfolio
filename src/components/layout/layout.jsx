import { useEffect, useState } from 'react';
import { About } from '../about/about';
import { Home } from '../home/home';
import { Projects } from '../projects/projects';
import { AutoplayCarousel } from '../tech-carousel/autoplay-carousel';
import './layout.scss';

export function Layout() {
  const [page, setPage] = useState('Home');
  useEffect(() => {}, [page]);

  return (
    <>
      <header className="header">
        <nav className="tabs">
          <h3 onClick={() => setPage('Home')} className="tabs__item">
            Home
          </h3>
          <h3 onClick={() => setPage('About')} className="tabs__item">
            About
          </h3>
          <h3 onClick={() => setPage('Projects')} className="tabs__item">
            Projects
          </h3>
        </nav>
      </header>

      <main className="main">
        {page === 'Home' && (
          <>
            <Home />
            <AutoplayCarousel />
          </>
        )}
        {page === 'About' && <About />}
        {page === 'Projects' && <Projects />}
      </main>
    </>
  );
}
