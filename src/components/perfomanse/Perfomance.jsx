import React from 'react';
import css from './Perfomance.module.css';
import plane from '../../images/perfomance/plane.png';
import seat from '../../images/perfomance/seat.svg';
import captain from '../../images/perfomance/captain.svg';
import browser from '../../images/perfomance/web-browser.svg';
import calendar from '../../images/perfomance/schedule.svg';

const Perfomance = () => {
  return (
    <section className={css.perfomance}>
      <div className="container">
        <div id="specification" className={css.perfomanceWrapper}>
          <h3 className={css.perfomanceTitle}>
            Private Jet Performance and Specifications
          </h3>
          <div className={css.perfomanceBox}>
            <ul className={css.perfomanceList}>
              <li className={css.perfomanceItem}>
                <img className={css.perfomanceIcon} src={seat} alt="seat" />
                <p className={css.perfomanceText}>Luxury And Comfort</p>
                <p className={css.perfomanceDesc}>
                  It is a long established fact that a reader will be distracted
                  by the readable
                </p>
              </li>
              <li className={css.perfomanceItem}>
                <img
                  className={css.perfomanceIcon}
                  src={calendar}
                  alt="calendar"
                />
                <p className={css.perfomanceText}>
                  Personal schedule & booking
                </p>
                <p className={css.perfomanceDesc}>
                  It is a long established fact that a reader will be distracted
                  by the readable
                </p>
              </li>
            </ul>
            <div className={css.perfomanceImgBox}>
              <img className={css.perfomanceImg} src={plane} alt="plane" />
            </div>
            <ul className={css.perfomanceList}>
              <li className={css.perfomanceItem}>
                <img
                  className={css.perfomanceIcon}
                  src={browser}
                  alt="browser"
                />
                <p className={css.perfomanceText}>SAFETY AND SECURITY</p>
                <p className={css.perfomanceDesc}>
                  It is a long established fact that a reader will be distracted
                  by the readable
                </p>
              </li>
              <li className={css.perfomanceItem}>
                <img
                  className={css.perfomanceIcon}
                  src={captain}
                  alt="captain"
                />
                <p className={css.perfomanceText}>EXPERIENCED CREW</p>
                <p className={css.perfomanceDesc}>
                  It is a long established fact that a reader will be distracted
                  by the readable
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfomance;
