import { useEffect, useRef } from 'react';
import './transition.css'
import gsap from 'gsap';

const Transition = () => {
    const countRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(".transition", {
            duration: 3,
            height: "100%",
            ease: "power4.in",
        })
        .to(".transition", {
            duration: 1.6,
            height: "0%",
            bottom: "120%",
            delay: 0.7,
            ease: "power4.inOut",
        });


        gsap.fromTo(countRef.current, 
            { textContent: 1 }, 
            { 
                duration: 4,
                textContent: 100,
                ease: "power4.inOut",
                snap: { textContent: 1 },
                onUpdate: function() {
                    countRef.current.textContent = `${Math.round(this.targets()[0].textContent)}%`;
                }
            }
        );
    }, []);

    return (
        <div className="transition">
            <h1 ref={countRef}></h1>
        </div>
    );
}

export default Transition;

