import styles from './Footer.modules.css'
import { FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';
import { FcApproval } from 'react-icons/fc';

function Footer() {
  return (
    <footer>
      <ul className={styles}>
        <li><FaFacebookF /></li>
        <li><FaFacebookMessenger /></li>
        <li><FcApproval /></li>
      </ul>
    </footer>
  )
}

export default Footer
