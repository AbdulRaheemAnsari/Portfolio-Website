import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import './indexcart.css';
import { Link } from 'react-router-dom';
import { MdSubdirectoryArrowLeft } from "react-icons/md";


const Index = ({ i, title, description, tech1, tech2, tech3, tech4, src, url, color, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });
    

    const scale = useTransform(progress, range, [1, targetScale]);

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    return (
        <div ref={container} className='cardContainer'>
            <motion.div style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} className='card' >
                <div className='leftsections'>
                    <div className='heading'>
                        <h2>{title}</h2>
                        <div className='technologys'>
                            {tech1 && <button>{tech1}</button>}
                            {tech2 && <button>{tech2}</button>}
                            {tech3 && <button>{tech3}</button>}
                            {tech4 && <button>{tech4}</button>}
                        </div>
                    </div>

                    <div className='projectbutton'>
                        <Link to={`/project/${url}`} onClick={handleScroll}><button><a>View Project <MdSubdirectoryArrowLeft className='buttonicons' /></a></button></Link>
                    </div>
                </div>
                <div className='rightsections'>
                    <div className='imageContainer'>
                        <img src={src} alt="project" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Index;
