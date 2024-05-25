import React from 'react';
import css from './Header.modyle.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerWrapper}>
          <div className={css.headerTop}>
            <img className={css.headerLogo} src="" alt="" />
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
              <button className={css.registerBtn}></button>
              <button className={css.loginBtn}></button>
            </div>
          </div>
          <div>
            <div>text</div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
