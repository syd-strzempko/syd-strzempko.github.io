import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { PATHS } from '../../utility/utils.js';
import Hamburger from '../../assets/icons/hamburger.png';
import { Fragment } from 'react';
import { useState } from 'react';
import classNames from 'classnames';

const NavBar = () => {
  const isMobile = window.matchMedia("(max-width: 600px)");
  const [visible, setVisible] = useState(!(isMobile.matches));
  return (
    <Fragment>
      <div className={classNames(styles.navWrapper, {[styles.visible]: visible})}>
        <Link to={((PATHS['HOME'])())} onClick={() => setVisible(false)}>Home</Link>
        <Link to={((PATHS['WORK'])())} onClick={() => setVisible(false)}>Work</Link>
        <Link to={((PATHS['ART'])())} onClick={() => setVisible(false)}>Art</Link>
      </div>
      {isMobile.matches && <Fragment>
        <div className={classNames(styles.navClose, { [styles.visible]: visible})} onClick={() => setVisible(false)}>X</div>
        <div className={classNames(styles.navOpen, { [styles.visible]: !visible})} onClick={() => setVisible(true)}><img src={Hamburger} alt='menu'/></div>
      </Fragment>}
    </Fragment>
  );
};

export default NavBar;