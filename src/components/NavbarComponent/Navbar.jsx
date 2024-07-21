import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const openMenu = () => {
    setMenu((prev) => !prev);
  }

  const menuclose = () => {
    setMenu(false);
  }


  return (
    <>
      <div className="navbar bg-[#292929]">
        <div className="logo">
          <Link onCanPlay={handleScroll} to="/"><h1>@ Abdul Raheem</h1></Link>
        </div>
        <div className="rightside">
          <div onClick={openMenu} className="menuicon">
            <div className={`menudiv ${menu ? "isactive_cross" : ""}`}>
              <div className="top_line icon"></div>
              <div className="bottom_line icon"></div>
            </div>
          </div>
        </div>
      </div>

      {/* side menu bar */}
      <div className={`menu_container ${menu ? "isactivemenu_container" : "closemenu"} `}>
        <div className="wrraper">
          <div className="menulink flex flex-col gap-2">
            <div className="menuName">
              <Link onClick={handleScroll}><h1 onClick={menuclose}>Home</h1></Link>
              <p>01</p>
            </div>
            {/* <div className="menuName">
            <RouterLink to="/about-section">
              <ScrollLink to="about-section" smooth={true} duration={900}>
                <h1 onClick={menuclose}>About</h1>
              </ScrollLink>
            </RouterLink>
            <p>02</p>
          </div> */}
            <div className="menuName">
              <RouterLink to="/Projects">
                <ScrollLink to="Projects" smooth={true} duration={1000}>
                  <h1 onClick={menuclose}>Work</h1>
                </ScrollLink>
              </RouterLink>
              <p>02</p>
            </div>
            <div className="menuName">
              <RouterLink to="/Fotter">
                <ScrollLink to="Fotter" smooth={true} duration={1600}>
                  <h1 onClick={menuclose}>Contact</h1>
                </ScrollLink>
              </RouterLink>
              <p>03</p>
            </div>
          </div>


          <div className="footersociallinks">
            <div className="buttonslink">
              <Link to="https://www.linkedin.com/in/abdulraheemansari/" target="_blank" rel="noopener noreferrer">
                <button><a>LinkedIn</a></button>
              </Link>
              <Link to="https://github.com/AbdulRaheemAnsari" target="_blank" rel="noopener noreferrer">
                <button><a>GitHub</a></button>
              </Link>
              <Link to="https://www.instagram.com/remo___0011/" target="_blank" rel="noopener noreferrer">
                <button><a>Instagram</a></button>
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100072271120804" target="_blank" rel="noopener noreferrer">
                <button><a>Facebook</a></button>
              </Link>
            </div>
            <div className="emailbutton">
              <a href="mailto:ansariabdulraheem957@gmail.com"><h1><a>ansariabdulraheem957@gmail.com</a></h1></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar;