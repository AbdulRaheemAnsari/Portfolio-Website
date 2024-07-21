import './techstack.css'
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Tech_Stack = () => {

    return (
        <div className="techstackcontainers">

            <div className="tech-item">
                <div className="techiconsheadings">
                    <img src="https://assets-global.website-files.com/6017e817edf32734686c1b92/635d777747d1613f5b83aef5_icon-1.svg" alt="" />
                    <p>Web Development</p>
                </div>
                <h1>Web development involves building and maintaining websites, combining coding, design, and content creation for a seamless user experience.</h1>
            </div>
            <div className="tech-item">
                <div className="techiconsheadings">
                    <img src="https://assets-global.website-files.com/6017e817edf32734686c1b92/635d7777f572820b1df399ac_icon-5.svg" alt="" />
                    <p>Web Designing</p>
                </div>
                <h1>Web designing involves creating visually appealing and user-friendly websites through thoughtful layout and design.</h1>
            </div>
            <div className="tech-item">
                <div className="techiconsheadings">
                    <img src="https://assets-global.website-files.com/6017e817edf32734686c1b92/635d77777b758d05a8c74d05_icon-4.svg" alt="" />
                    <p>UI Designing</p>
                </div>
                <h1>UI designing focuses on crafting intuitive and aesthetically pleasing user interfaces for digital products.</h1>
            </div>
            <div className="tech-item">
                <div className="techiconsheadings">
                    <img src="https://assets-global.website-files.com/6017e817edf32734686c1b92/635d7777c917934e443a63f3_icon-6.svg" alt="" />
                    <p>Graphic Designing</p>
                </div>
                <h1>Graphic designing involves creating visually compelling content using typography, imagery, and layout techniques.</h1>
            </div>

            <div className='projectviewbutton'>
                <RouterLink to="/Projects">
                    <ScrollLink to="Projects" smooth={true} duration={900}>
                        <button> <a>Explore My Work <MdSubdirectoryArrowLeft className='viewicons' /></a></button>
                    </ScrollLink>
                </RouterLink>
            </div>
        </div>
    )
}

export default Tech_Stack;