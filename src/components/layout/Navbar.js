import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../logo.svg';

function Navbar() {
    return (
        <div>
            <container className={styles.navbar}>
                <Link to='/'>
                    <img src={logo} className={styles.logos} alt="logo" />
                </Link>
                <ul className={styles.list}>
                    <ui><Link to="../pages/Home" className={styles.item}>Home</Link></ui>
                    <ui><Link to="../pages/Empresa" className={styles.item}>Empresa</Link></ui>
                    <ui><Link to="../pages/Contato" className={styles.item}>Contato</Link></ui>
                </ul>
            </container>
        </div>
    );
}

export default Navbar;