import './topanimation.css';
import gsap from 'gsap';
// import { SplitText } from 'gsap-trial/SplitText';
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

// gsap.registerPlugin(SplitText, ScrollTrigger)

const TopAnimation = () => {

    // useEffect(() => {

    //     let mySplitAnimation = new SplitText('.splits', { type: 'chars' });
    //     let chars = mySplitAnimation.chars;

    //     gsap.from(chars, {
    //         yPercent: 150,
    //         stagger: 0.01,
    //         ease: "circ",
    //         duration: 0.6,
    //         delay: 4,
    //     });

    //     return () => {
    //         mySplitAnimation.revert();
    //     };
    // }, [])


    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])


    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.010 * direction;
    }

    return (
        <div className='topanimatecontainer'>
            <div className="name">
                <h1 ref={firstText} className='splits'>I AM A WEB DESIGNER & FRONTEND DEVELOPER</h1>
                <h1 ref={secondText} className='splits'>I AM A WEB DESIGNER & FRONTEND DEVELOPER</h1>
            </div>
        </div>
    )
}

export default TopAnimation;