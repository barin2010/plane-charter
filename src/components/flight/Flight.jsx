import React from 'react';
import css from './Flight.module.css';
import arrow from '../../images/icons/Group_arrow.svg';
import calendar from '../../images/icons/calendar_1.svg';
import arrowBtn from '../../images/icons/arrow-right -white.svg';

const Flight = () => {
  return (
    <div className={css.flightWrapper}>
      <div className={css.flightSelectBox}>
        <p className={css.selectText}>Round Trip</p>
        <select className={css.flightSelect} name="" id=""></select>
        <p className={css.selectText}>Flight Type</p>
        <select className={css.flightSelect} name="" id=""></select>
        <p className={css.selectText}>Person</p>
        <select className={css.flightSelect} name="" id=""></select>
      </div>
      <div className={css.flightBoxOll}>
        <div className={css.flightBox}>
          <p className={css.flightFrom}>From</p>
          <p className={css.flightWhere}>LAX</p>
          <p className={css.flightFrom}>Los Angeles Intl Arpt,Los Angeles</p>
        </div>

        <img className={css.flightImg} src={arrow} alt="arrow" />

        <div className={css.flightBox}>
          <p className={css.flightFrom}>To</p>
          <p className={css.flightWhere}>MIA</p>
          <p className={css.flightFrom}>Miami Intl,Miami</p>
        </div>
        <div className={css.flightBoxAnd}>
          <div className={css.flightBoxThree}>
            <p className={css.flightFrom}>Departure</p>
            <div className={css.flightCalendar}>
              <p className={css.flightWhere}>Fri 15 Oct </p>
              <img src={calendar} alt="calendar" />
            </div>
            <div className={css.prevBox}>
              <p className={css.flightFrom}>Prev</p>
              <p className={css.flightFrom}>Next</p>
            </div>
          </div>
          <div className={css.flightBoxThree}>
            <p className={css.flightFrom}>Return</p>
            <div className={css.flightCalendar}>
              <p className={css.flightWhere}>Tue 19 Oct </p>
              <img src={calendar} alt="calendar" />
            </div>
            <div className={css.prevBox}>
              <p className={css.flightFrom}>Prev</p>
              <p className={css.flightFrom}>Next</p>
            </div>
          </div>
        </div>
      </div>
      <p className={css.flightReq}>Add Requirements</p>
      <div className={css.flightBtn}>
        <p className={css.btnText}>Book Flights</p>
        <img className={css.btnImg} src={arrowBtn} alt="arrow" />
      </div>
    </div>
  );
};

export default Flight;
