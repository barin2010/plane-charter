import React from 'react';
import css from './Header.module.css';
import logo from '../../images/icons/air.svg';
import plane from '../../images/header/plane.png';
import arrow_right from '../../images/icons/arrow-right 1.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrapper}>
          <div className={css.headerTop}>
            <img className={css.headerLogo} src={logo} alt="logo" />
            <nav className={css.headerNavigation}>
              <ul className={css.headerList}>
                <li className={css.headerItem}>Home </li>
                <li className={css.headerItem}>Booking</li>
                <li className={css.headerItem}>Private Jet</li>
                <li className={css.headerItem}>Specification</li>
                <li className={css.headerItem}>Luxury Charters</li>
                <li className={css.headerItem}>Membership</li>
              </ul>
            </nav>
            <div className={css.headerBoxButton}>
              <button className={css.registerBtn}>Register</button>
              <button className={css.loginBtn}>Sign In</button>
            </div>
          </div>
          <div className={css.headerBoxTwo}>
            <div className={css.headerBoxTexst}>
              <h1 className={css.headerTitle}>
                Enjoy <span>Reserved</span> Overhead bin space
              </h1>
              <div className={css.headerExplore}>
                <p className={css.exploreText}>Explore Now</p>
                <img className={css.arrowRight} src={arrow_right} alt="arrow" />
              </div>
            </div>
            <div className={css.headerBoxImg}>
              <img className={css.headerPlane} src={plane} alt="plane" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
