import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return(
        <footer id= "footer"className="bg-[#181d20]  justify-center p-4">
            <div className="flex justify-between">
                <a className='text-xl font-bold text-white hover:text-[#7f69a5]'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className='text-xl font-bold text-white hover:text-[#7f69a5]'>
                <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a className='text-xl font-bold text-white hover:text-[#7f69a5]'>
                <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
            <div className='flex justify-center mt-4'>
                <p className='text-white'>© 2024 Katy Diaz. All rights reserved. </p>
            </div>
        </footer>
    )
}
export default Footer