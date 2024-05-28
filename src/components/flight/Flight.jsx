import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import css from './Flight.module.css';
import arrow from '../../images/icons/Group_arrow.svg';
import calendar from '../../images/icons/calendar_1.svg';
import arrowBtn from '../../images/icons/arrow-right -white.svg';

const Flight = () => {
  const [flightDetails, setFlightDetails] = useState({
    fromCode: 'LAX',
    fromName: 'Los Angeles Intl Arpt, Los Angeles',
    toCode: 'MIA',
    toName: 'Miami Intl, Miami',
  });
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDeparturePicker, setShowDeparturePicker] = useState(false);
  const [showReturnPicker, setShowReturnPicker] = useState(false);

  const handleSwap = () => {
    setFlightDetails({
      fromCode: flightDetails.toCode,
      fromName: flightDetails.toName,
      toCode: flightDetails.fromCode,
      toName: flightDetails.fromName,
    });
  };
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
          <p className={css.flightWhere}>{flightDetails.fromCode}</p>
          <p className={css.flightFrom}>{flightDetails.fromName}</p>
        </div>

        <img
          onClick={handleSwap}
          className={css.flightImg}
          src={arrow}
          alt="arrow"
        />

        <div className={css.flightBox}>
          <p className={css.flightFrom}>To</p>
          <p className={css.flightWhere}>{flightDetails.toCode}</p>
          <p className={css.flightFrom}>{flightDetails.toName}</p>
        </div>
        <div className={css.flightBoxAnd}>
          <div className={css.flightBoxThree}>
            <p className={css.flightFrom}>Departure</p>
            <div
              className={css.flightCalendar}
              onClick={() => setShowDeparturePicker(!showDeparturePicker)}
            >
              <p className={css.flightWhere}>
                {format(departureDate, 'EEE MMM dd')}
              </p>
              <img
                className={css.flightCalendarImg}
                src={calendar}
                alt="calendar"
              />
            </div>
            {showDeparturePicker && (
              <DatePicker
                selected={departureDate}
                onChange={date => {
                  setDepartureDate(date);
                  setShowDeparturePicker(false);
                }}
                dateFormat="EEE MMM dd"
                inline
              />
            )}
            <div className={css.prevBox}>
              <p className={css.flightFrom}>Prev</p>
              <p className={css.flightFrom}>Next</p>
            </div>
          </div>
          <div className={css.flightBoxThree}>
            <p className={css.flightFrom}>Return</p>
            <div
              className={css.flightCalendar}
              onClick={() => setShowReturnPicker(!showReturnPicker)}
            >
              <p className={css.flightWhere}>
                {format(returnDate, 'EEE MMM dd')}
              </p>
              <img
                className={css.flightCalendarImg}
                src={calendar}
                alt="calendar"
              />
            </div>
            {showReturnPicker && (
              <DatePicker
                selected={returnDate}
                onChange={date => {
                  setReturnDate(date);
                  setShowReturnPicker(false);
                }}
                dateFormat="EEE MMM dd"
                inline
              />
            )}
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
