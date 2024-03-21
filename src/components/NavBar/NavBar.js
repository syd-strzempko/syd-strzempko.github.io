import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { PATHS } from '../../utility/utils.js';

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <Link to={(PATHS['HOME'])()}>Home</Link>
      <Link to={(PATHS['WORK'])()}>Work</Link>
      <Link to={(PATHS['ART'])()}>Art</Link>
    </div>
  );
}

export default NavBar;