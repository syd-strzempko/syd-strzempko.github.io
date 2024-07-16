import styles from './Layout.module.css';
import NavBar from '../NavBar';
import { Fragment } from 'react';
import Circles from '../Circles/Circles';
import { Link } from 'react-router-dom';

import backArrow from '../../assets/icons/arrow.svg'

const Layout = ({ children, backLink }) => {
  return (
    <Fragment>
      <Circles />
      <div className={styles.layout}>
        <NavBar />
        {backLink && <Link to={backLink} className={styles.backLink}><img src={backArrow} alt='back' /></Link>}
        {children}
      </div>
    </Fragment>
  );
}

export default Layout;