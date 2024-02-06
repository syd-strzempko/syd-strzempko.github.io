import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      {children}
    </div>
  );
}

export default Layout;