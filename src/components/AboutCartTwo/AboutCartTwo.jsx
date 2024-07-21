import './aboutcarttwo.css';
// import gsap from 'gsap-trial';
// import { SplitText } from 'gsap-trial/SplitText';
// import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useEffect, useRef } from 'react';

const AboutCartTwo = () => {
    // const colloRef = useRef(null);

    // useEffect(() => {

    //     let mySplitaboutme = new SplitText('.collobrationslpit', { type: 'chars' });
    //     let chars = mySplitaboutme.chars;

    //     gsap.from(chars, {
    //         yPercent: 160,
    //         stagger: 0.040,
    //         duration: 0.3,
    //         ease: "circ",
    //         scrollTrigger: {
    //             trigger: colloRef.current,
    //             start: 'top 70%',
    //         },
    //     });


    //     return () => {
    //         mySplitaboutme.revert();
    //     };

    // }, [])



    return (
        <div className='collocart'>
            <div className="colloabout">
                <h1 className='collobrationslpit'>HERE'S WHAT I DO</h1>
            </div>
        </div>
    )
}

export default AboutCartTwo