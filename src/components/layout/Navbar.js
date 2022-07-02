import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from './logomarca.png'

function Navbar() {
  return (
    <div>
    <container className={styles.navbar}>
    <Link to="/">
      <img src={Logo} alt="logomarca" className={styles.logos}/>
      </Link>
    <ul className={styles.list}>
    
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.item}>
        <Link to="/empresa">Empresa</Link>
      </li>
      <li className={styles.item}>
        <Link to="/contato">Contato</Link>
      </li>
    </ul>
    </container>
    </div>
  )
}

export default Navbar
