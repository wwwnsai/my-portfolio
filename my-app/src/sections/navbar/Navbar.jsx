import React, { useEffect, useState } from 'react';
import './navbar.css';
import './responsive.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarHeight = isScrolled ? '12vh' : '20vh';
  const logoFontSize = isScrolled ? '2rem' : '2.5rem';
  const textFontSize = isScrolled ? '100%' : '120%';
  const opa = isScrolled ? '1' : '1';
  const dropshadow = isScrolled ? 'none' : 'none';
  // rgba(232, 226, 219, 0.7)
// 0 0 0.5rem rgba(0, 0, 0, 0.5)
  return (
    <nav className="navbar" style={{height: navbarHeight, opacity: opa, boxShadow: dropshadow}} id="navbar">
      <section className="navbar__left">
        <a href='/' className="navbar__left--logo" style={{ fontSize: logoFontSize }}>
          wansai
        </a>
      </section>
      <section className="navbar__right">
        <ul>
            <li>
              <a href="https://wwwnsai.github.io/my-Portfolio/" className="navbar__right--text" style={{ fontSize: textFontSize }}>
                Home
              </a>    
            </li>
            <li>
              <a href="https://wwwnsai.github.io/my-Portfolio/#exp" className="navbar__right--text" style={{ fontSize: textFontSize }}>
                Experiences
              </a>
            </li>
            <li>
              <a href="https://wwwnsai.github.io/my-Portfolio/#skills" className="navbar__right--text" style={{ fontSize: textFontSize }}>
                Skills
              </a>
            </li>
            <li>
              <a href="https://wwwnsai.github.io/my-Portfolio/#projects" className="navbar__right--text" style={{ fontSize: textFontSize }}>
                Projects
              </a>
            </li>
            <li>
              <a href="https://wwwnsai.github.io/my-Portfolio/#contact" className="navbar__right--text" style={{ fontSize: textFontSize }}>
                Contact
              </a>
            </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
