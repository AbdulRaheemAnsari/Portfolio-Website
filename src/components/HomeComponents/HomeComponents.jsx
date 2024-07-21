import Summury from '../Summury/Summury';
import TopAnimation from '../TopAnimation/TopAnimation';
import Projects from '../ProjectComponents/Projects';
import About_Content from '../AboutPage/About_Content';
import { projects } from '../data' // Import projects data
import Transition from '../Transition';

const HomeComponents = () => {
  return (
    <>
      <div className="all bg-[#292929] w-full min-h-screen">
        <Transition />
        <TopAnimation />
        <Summury />
        <About_Content />
        <Projects projects={projects} /> {/* Pass projects data here */}
      </div>
    </>
  )
}

export default HomeComponents;
