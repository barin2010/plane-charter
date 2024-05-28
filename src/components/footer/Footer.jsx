import React from 'react';
import css from './Footer.module.css';
import plane from '../../images/icons/planeFooter.svg';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.footerWrapper}>
          <img className={css.footerPlane} src={plane} alt="plane" />
          <div className={css.footerBox}>
            <nav className={css.footerNav}>
              <ul className={css.footerList}>
                <li className={css.footerItem}>
                  <a href="#/">SERVICES</a>
                </li>
                <li className={css.footerItem}>
                  <a href="#/">ABOUT US</a>
                </li>
                <li className={css.footerItem}>
                  <a href="#/">NEWS</a>
                </li>
                <li className={css.footerItem}>
                  <a href="#/">CONTACT</a>
                </li>
              </ul>
              <p className={css.footerText}>© 2021 Air. All rights reserved.</p>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
