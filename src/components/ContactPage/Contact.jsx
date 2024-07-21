import ContactForm from '../Contact_form/ContactForm'
import Heading from '../Pages_Heading_Components/Heading'
import PageTransition from '../PageTransition/PageTransition';

const Contact = () => {
  return (
    <div className="contact_container bg-[#292929] w-full min-h-screen">
      <PageTransition />
      <Heading heading={"Let's work together on a new project"} />
      <ContactForm />
    </div>
  )
}

export default Contact;