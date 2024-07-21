import './contactform.css'
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";
import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom'

const ContactForm = () => {

    useEffect(() => {

        gsap.from(".form_container", {
            opacity: 0,
            y: 40,
            scale: 0,
        });
        gsap.to(".form_container", {
            duration: 0.8,
            opacity: 1,
            y: 0,
            scale: 1,
            delay: 0.1,
            scrollTrigger: {
                trigger: ".contact_Form",
                scroller: "body",
                start: "top 100%",
                end: "bottom 0%",
                // markers: true,
            }
        });

    }, [])


    return (
        <>
            <div className="form_container">
                <div className="contact_Form">
                    <div className="namefield">
                        <p>01</p>
                        <div className="messages">
                            <h1>What’s your name?</h1>
                            <input type="text" placeholder='Abdul Raheem' />
                        </div>
                    </div>
                    <div className="emailfield">
                        <p>02</p>
                        <div className="messages">
                            <h1>What’s your email?</h1>
                            <input type="text" placeholder='john@doe.com' />
                        </div>
                    </div>
                    <div className="organizationfield">
                        <p>03</p>
                        <div className="messages">
                            <h1>What's the name of your organization?</h1>
                            <input type="text" placeholder='John & Doe ®' />
                        </div>
                    </div>
                    <div className="servicefield">
                        <p>04</p>
                        <div className="messages">
                            <h1>What services are you looking for?</h1>
                            <input type="text" placeholder='Web Design, Web Development ...' />
                        </div>
                    </div>
                    <div className="messagefield">
                        <p>05</p>
                        <div className="messages">
                            <h1>Your message</h1>
                            <input className='mess' type="text" placeholder='Hello Raheem, can you help me with ...' />
                        </div>
                    </div>

                    <div className="submit_button">
                        <button><a>Sent it! <GoArrowUpRight fontSize={'1.4rem'} /></a></button>
                    </div>
                </div>


                {/* Contact Detials */}
                <div className="contact_datial">
                    <div className="detials">
                        <div className="email">
                            <h1>CONTACT DETIALS <HiOutlineArrowDownLeft fontSize={"1.6rem"} color='#FFF' /></h1>
                            <div className="contect-num">
                                <p>ansariabdulraheem957@gmail.com</p>
                                <p>+92 3131007385</p>
                            </div>
                        </div>
                        <div className="location">
                            <h1>LOCATION</h1>
                            <div className="address">
                                <p>Karachi, Pakistan</p>
                            </div>
                        </div>
                        <div className="social">
                            <h1>SOCIALS</h1>
                            <div className="social-name">
                                <Link to="https://www.linkedin.com/in/abdulraheemansari/" target="_blank" rel="noopener noreferrer">
                                    <p>Linkedin</p>
                                </Link>
                                <Link to="https://github.com/AbdulRaheemAnsari" target="_blank" rel="noopener noreferrer">
                                    <p>Github</p>
                                </Link>
                                <Link to="https://www.instagram.com/remo___0011/" target="_blank" rel="noopener noreferrer">
                                    <p>Instagram</p>
                                </Link>
                                <Link to="https://www.facebook.com/profile.php?id=100072271120804" target="_blank" rel="noopener noreferrer">
                                    <p>Facebook</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;