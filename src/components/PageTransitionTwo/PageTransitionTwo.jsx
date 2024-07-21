import './pagetransitiontwo.css';
import gsap, { Power4 } from 'gsap';
import { useEffect } from 'react';

const PageTransitionTwo = () => {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".page1", {
            duration: 1.4,
            height: "0%",
            top: "0%",
            delay: 3,
            ease: "expo.inOut"
        }, "jello")
        tl.to(".page2", {
            duration: 1.4,
            height: "0%",
            top: "0%",
            delay: 3.2,
            ease: "expo.inOut"
        }, "jello");
        tl.to(".page3", {
            duration: 1.4,
            height: "0%",
            top: "0%",
            delay: 3.4,
            ease: "expo.inOut"
        }, "jello");

    }, []);


    return (
        <div className="w-full h-screen flex items-start absolute z-1000 top-0 left-0">
            <div className="page1"></div>
            <div className="page2"></div>
            <div className="page3"></div>
        </div>
    )
}

export default PageTransitionTwo;