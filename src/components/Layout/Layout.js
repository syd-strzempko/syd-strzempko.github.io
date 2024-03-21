import { Link } from 'react-router-dom';
import styles from './Layout.module.css';
import NavBar from '../NavBar';

const Layout = ({ header, children, returnURL }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {returnURL && <div className={styles.backWrapper}><Link to={returnURL} className={styles.backButton}>« back</Link></div>}
          <div className={styles.header}>{header}</div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;