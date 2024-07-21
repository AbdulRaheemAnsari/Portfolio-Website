import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import styles from './style.module.scss';
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
        <div ref={container} className={styles.cardContainer}>
            <motion.div style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} className={styles.card} >
                <div className={styles.leftsections}>
                    <div className={styles.heading}>
                        <h2>{title}</h2>
                        <div className={styles.technologys}>
                            {tech1 && <button>{tech1}</button>}
                            {tech2 && <button>{tech2}</button>}
                            {tech3 && <button>{tech3}</button>}
                            {tech4 && <button>{tech4}</button>}
                        </div>
                    </div>

                    <div className={styles.projectbutton}>
                        <Link to={`/project/${url}`} onClick={handleScroll}><button><a>View Project <MdSubdirectoryArrowLeft className={styles.icons} /></a></button></Link>
                    </div>
                </div>
                <div className={styles.rightsections}>
                    <div className={styles.imageContainer}>
                        <img src={src} alt="project" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Index;
