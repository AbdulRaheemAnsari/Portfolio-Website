import './heading.css';
// import gsap from 'gsap-trial';
// import { SplitText } from 'gsap-trial/SplitText';
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
// import { useEffect, useRef } from 'react';
import { MdSubdirectoryArrowLeft } from "react-icons/md";

// gsap.registerPlugin(SplitText, ScrollTrigger);

const Heading = (props) => {
    // const headingRef = useRef(null);

    // useEffect(() => {
    //     let mySplitheading = new SplitText('.headingslpit', { type: 'chars' });
    //     let chars = mySplitheading.chars;

    //     gsap.from(chars, {
    //         yPercent: 140,
    //         stagger: 0.04,
    //         // ease: "circ",
    //         duration: 0.4,
    //         delay: 1.2
    //     });

    //     return () => {
    //         mySplitheading.revert();
    //     };
    // }, []);

    return (
        <div className='heading-container'>
            <div className="heading-wrraper">
                <h1 className='headingslpit'>{props.heading}</h1>
                {props.link && (
                    <button onClick={() => window.open(props.link, '_blank')}>
                        <a>Visit Website <MdSubdirectoryArrowLeft className='icons' /></a>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Heading;







{/* <div className="technames">
                    {props.tech && <button>{props.tech}</button>}
                    {props.tech1 && <button>{props.tech1}</button>}
                    {props.tech2 && <button>{props.tech2}</button>}
                    {props.tech3 && <button>{props.tech3}</button>}
                </div> */}