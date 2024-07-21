import './aboutcart.css';

import gsap from 'gsap-trial';
import { SplitText } from 'gsap-trial/SplitText';
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger)


const AboutCart = () => {

    const aboutmeRef = useRef(null);

    useEffect(() => {

        let mySplitaboutme = new SplitText('.aboutmeslpit', { type: 'chars' });
        let chars = mySplitaboutme.chars;

        gsap.from(chars, {
            yPercent: 160,
            stagger: 0.040,
            duration: 0.3,
            ease: "circ",
            scrollTrigger: {
                trigger: aboutmeRef.current,
                start: 'top 70%',
              },
        });


        return () => {
            mySplitaboutme.revert();
        };

    }, [])



    return (
        <div className='aboutcart'>
            <div className="headingabout">
                <h1 ref={aboutmeRef} className='aboutmeslpit'>ABOUT ME</h1>
            </div>
        </div>
    )
}

export default AboutCart;