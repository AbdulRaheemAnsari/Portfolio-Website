import './summury.css';
// import profilepic from '../../assets/images/profile-pic.png';
// import line from '../../assets/images/line.png';
// import photo from '../../assets/images/p3.jpg';
import photo from '../../assets/images/newp.jpg';
// import Button from '../ButtonComponents/Button';
import { Link } from 'react-router-dom'
// import gsap from 'gsap-trial';
// import { SplitText } from 'gsap-trial/SplitText';
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { useEffect, useRef } from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

// gsap.registerPlugin(SplitText, ScrollTrigger)


const Summury = () => {

  // const summuryRef = useRef(null);

  // useEffect(() => {

  //   let mySplitSummury = new SplitText('.summurysplit', { type: 'chars' });
  //   let chars = mySplitSummury.chars;

  //   gsap.from(chars, {
  //     yPercent: 400,
  //     stagger: 0.002,
  //     ease: "circ",
  //     duration: 0.4,
  //     delay: 4,
  //   });

  //   return () => {
  //     mySplitSummury.revert();
  //   };
  // }, [])



  return (
    <>
      <div className="aboutsection">
        <div className="leftsidesection">
          <div className="text">
            <h1>Nice to meet you! I'm Abdul Raheem, I work with people from all over the world to create a websites in React.js and Next.js.</h1>
          </div>
          <div className="button">
            <RouterLink to="/About_Page">
              <ScrollLink to="about-section" smooth={true} duration={900}>
                <button><a>A bit about me<MdSubdirectoryArrowLeft className='iconss' /></a></button>
              </ScrollLink>
            </RouterLink>
          </div>
        </div>
        <div className="rightsidesection">
          <img src={photo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Summury;











































{/* <div className='summury-container'>
  <div className="summury-main">
    <div className="topside">
      <div className="text">
        <p ref={summuryRef} className='summurysplit'>Nice to meet you! I'm Abdul Raheem, I work with people from all over the world to create a websites in React.js and Next.js.</p>
      </div>
      <div className="img">
        <img src={profilepic} alt="" />
      </div>
    </div>
    <div className="bottomside">
      <div className="line">
        <img src={line} alt="" />
      </div>
      <Button />
    </div>
  </div>
</div> */}