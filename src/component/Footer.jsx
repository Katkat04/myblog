import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
function Footer() {
    return(
        <footer className="bg-[#181d20] p-4">
            <div className="flex justify-between">
                <a className='text-xl font-bold text-white hover:text-[#7f69a5]'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className='text-xl font-bold text-white hover:text-[#7f69a5]'>
                <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </footer>
    )
}
export default Footer