import AboutCart from '../AboutCart/AboutCart';
import CartContent from '../CartContent/CartContent';
import './about_content.css'
import AboutCartTwo from '../AboutCartTwo/AboutCartTwo';
import SkillsCard from '../SkillsCard/SkillsCard'

const About_Content = () => {

    return (
        <div className='about_contents' id="about-section" name="about-section">

            {/* left cart */}
            <div className="aboutcart-wrraper">
                <AboutCart />
                <CartContent />
            </div>

            {/* right cart */}
            <div className="aboutcontent-wrraper">
                <AboutCartTwo />
                <SkillsCard />
            </div>
        </div>
    )
}

export default About_Content;
