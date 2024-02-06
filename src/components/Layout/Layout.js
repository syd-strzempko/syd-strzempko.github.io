import styles from './Layout.module.css';
import NavBar from '../NavBar';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;