import { useEffect, useRef } from 'react';
import styles from './projects.module.scss';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Index from '../Card/Index';

const Projects = ({ projects }) => {

    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <div className={styles.project_container} id="Projects" name="Projects">
            <main ref={container} className={styles.main}>
                {projects && projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <Index key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />;
                })}
            </main>
        </div>
    );
};

export default Projects;
