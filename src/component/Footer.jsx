import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return(
        <footer id= "contact" className="bg-[#181d20]  justify-center p-4">
            
            <div className='flex justify-center mt-4'>
                <p className='text-white'>© 2024 Katy Diaz. All rights reserved. </p>
            </div>
            <div className="flex justify-center">
                <a href="https://www.instagram.com/katydiazbel/" className='text-xl font-bold text-white hover:text-[#7f69a5] p-2'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/Katkat04" className='text-xl font-bold text-white hover:text-[#7f69a5] p-2'>
                <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/kdiaz11/" className='text-xl font-bold text-white hover:text-[#7f69a5] p-2'>
                <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </footer>
    )
}
export default Footer