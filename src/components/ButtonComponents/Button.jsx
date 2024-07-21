import './button.css';
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import {Link} from 'react-router-dom'

const Button = () => {
    return (
        <div className="button">
            <Link to="/About"><button><a>About me <MdSubdirectoryArrowLeft /></a></button></Link>
        </div>
    )
}

export default Button;