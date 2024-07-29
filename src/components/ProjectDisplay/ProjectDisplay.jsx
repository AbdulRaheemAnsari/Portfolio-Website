import { useParams } from 'react-router-dom';
import './projectdisplay.css';
import { Link } from 'react-router-dom'
// import Heading from "../Pages_Heading_Components/Heading";
import PageTransition from '../PageTransition/PageTransition';
import Projects from '../ProjectComponents/Projects';
import { MdSubdirectoryArrowLeft } from "react-icons/md";

const ProjectDisplay = ({ projects }) => {


  const { projectId } = useParams();
  const project = projects.find(proj => proj.url === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <PageTransition key={projectId} />
      <div className='projectDisplay'>

        <div className="first-container">
          {project.mobile2 && <div className="img3container">
            <img src={project.mobile2} alt={project.title} />
          </div>}

          {project.topimg && <div className="topimgimgcontainer">
            <img src={project.topimg} alt={project.title} />
          </div>}
        </div>

        <div className="projectabout-container">
          <div className="projectaboutwrraper">
            <h1 className='title'>{project.title}</h1>
            <div className="tech-button">
              {project.tech1 && <button>{project.tech1}</button>}
              {project.tech2 && <button>{project.tech2}</button>}
              {project.tech3 && <button>{project.tech3}</button>}
              {project.tech4 && <button>{project.tech4}</button>}
            </div>

            <div className="description">
              <p>{project.description}</p>
            </div>

            <div className="year">
              <h1>{project.year}</h1>
              <h3>Year</h3>
            </div>

            <div className="locate">
              <h1>{project.location}</h1>
              <h3>location</h3>
            </div>

            {project.link && (
              <div className="webbutton">
                <Link to={project.link} target="_blank" rel="noopener noreferrer"><button>
                  <a>Visit Website <MdSubdirectoryArrowLeft className='icons' /></a>
                </button></Link>
              </div>
            )}

          </div>
        </div>

        {project.img1 && <div className="second-container">
          <div className="Imac">
            <img src={project.img1} alt={project.title} />
          </div>
        </div>}

        {project.video && <div className="third-container">
          <div className="video">
            <video src={project.video} autoPlay loop muted></video>
          </div>
        </div>}

        {project.macair && <div className="five-container">
          <div className="macbook">
            <img src={project.macair} alt={project.title} />
          </div>
        </div>}

        {project.macm2 && <div className="six-container">
          <div className="macbook2">
            <img src={project.macm2} alt={project.title} />
          </div>
        </div>}

        {project.formimg && <div className="six-container">
          <div className="macbook2">
            <img src={project.formimg} alt={project.title} />
          </div>
        </div>}


        <Projects projects={projects.filter(proj => proj.url !== projectId)} /> {/* Filter out current project */}
      </div>
    </>
  );
}

export default ProjectDisplay;
