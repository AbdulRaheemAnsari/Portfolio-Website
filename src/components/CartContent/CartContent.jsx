import './cartcontent.css';
import gsap from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger)

const CartContent = () => {

  const content = useRef(null);

  useEffect(() => {

    let mySplitcontent = new SplitText('.contentslpit', { type: 'chars' });
    let chars = mySplitcontent.chars;

    gsap.from(chars, {
      yPercent: 990,
      stagger: 0.001,
      duration: 0.8,
      ease: "circ",
      scrollTrigger: {
        trigger: content.current,
        start: 'top 70%',
      },
    });


    return () => {
      mySplitcontent.revert();
    };

  }, [])


  return (
    <div className='cart-content'>
      <div className="abouttext">
        <h1 ref={content} className='contentslpit'>As a creative developer, I specialize in both design and development, enabling me to handle projects from inception to launch. I focus on crafting unique layouts, engaging interactions, and exceptional typography to create standout websites.</h1>
      </div>
    </div>
  )
}

export default CartContent;


// Nice to meet you! I'm Abdul Raheem, a passionate Frontend Developer specializing in React.js and Next.js. With a strong foundation in HTML, CSS, and Tailwind CSS, I excel in creating dynamic and responsive user interfaces that enhance the user experience. I have a deep understanding of JavaScript and leverage modern frameworks like React.js and Next.js to build intuitive, high-performance web applications. My problem-solving skills enable me to tackle complex challenges efficiently, helping businesses transform their ideas into seamless digital solutions. I am dedicated to using my technical expertise to drive innovation and success in the digital realm.