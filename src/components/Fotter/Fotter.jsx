import './fotter.css';
import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
// import { useEffect, useRef } from 'react';

const Fotter = () => {

    // const handleScroll = () => {
    //     window.scrollTo({ top: 0, behavior: 'auto' });
    // };


    // const footerRef = useRef(null);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const footerContainer = footerRef.current;
    //         const wrapper = footerContainer.querySelector('.wrrapper');
    //         const maxPadding = 1; // maximum top/bottom padding in rem
    //         const minPadding = 0; // minimum top/bottom padding in rem
    //         const maxPaddingSides = 2; // maximum left/right padding in rem
    //         const maxBorderRadius = 1; // maximum border-radius in rem
    //         const minBorderRadius = 0; // minimum border-radius in rem
    //         const maxScroll = document.body.scrollHeight - window.innerHeight;
    //         const scrollRatio = window.scrollY / maxScroll;
    //         const newPaddingTopBottom = minPadding + (maxPadding - minPadding) * scrollRatio;
    //         const newPaddingSides = (maxPaddingSides - minPadding) * scrollRatio;
    //         const newBorderRadius = minBorderRadius + (maxBorderRadius - minBorderRadius) * scrollRatio;

    //         footerContainer.style.padding = `${newPaddingTopBottom}rem ${newPaddingSides}rem`;
    //         wrapper.style.borderRadius = `${newBorderRadius}rem`;
    //     };

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 window.addEventListener('scroll', handleScroll);
    //             } else {
    //                 window.removeEventListener('scroll', handleScroll);
    //                 // Reset styles when footer leaves the viewport
    //                 const footerContainer = footerRef.current;
    //                 const wrapper = footerContainer.querySelector('.wrrapper');
    //                 footerContainer.style.padding = '0rem 0rem';
    //                 wrapper.style.borderRadius = '0rem';
    //             }
    //         },
    //         { threshold: 0.6 }
    //     );

    //     if (footerRef.current) {
    //         observer.observe(footerRef.current);
    //     }

    //     return () => {
    //         if (footerRef.current) {
    //             observer.unobserve(footerRef.current);
    //         }
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    const moveToTop = () => {
        const scrollStep = -window.scrollY / (1200 / 15); // Adjust the 500 value for speed

        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 25);
    };


    return (
        <div className='fotter-container' id="Fotter" name="Fotter">
            <div className="wrrapper">
                <div className="top-side">
                    <div className="designby">
                        <h1>Designer and Developer <br />Portfolio - 2024</h1>
                    </div>
                    <div className="mylogo">
                        <h1>@ ABDUL RAHEEM</h1>
                    </div>
                    <div className="freelencework">
                        <h1>Available for Freelance <br /> work</h1>
                    </div>
                </div>
                <div className="middle-side">
                    <div className="nextprojectheading">
                        <h1>LET’S CREATE SOMETHING EXCEPTIONAL <br /> ON YOUR NEXT PROJECT.</h1>
                        <div className="contact">
                            <p>Drop me an email:</p>
                            <a href="mailto:ansariabdulraheem957@gmail.com"><button className='contact'><a>ansariabdulraheem957@gmail.com <GoArrowUpRight className='connecticon' /> </a></button></a>
                        </div>
                    </div>
                </div>
                <div className="bottom-side">
                    <div className="allrights">
                        <div onClick={moveToTop} className="backtotop">
                            <h1>Back to top</h1>
                            <GoArrowUpRight className='topicon text-1xl cursor-pointer' />
                        </div>
                        <h1 className='right'>© 2024 All Rights Reserved</h1>
                    </div>
                    <div className="sociallinks">
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

                    <div className="designanddevelopeby">
                        <h1>Design and Development <br /> by: Abdul Raheem</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter;