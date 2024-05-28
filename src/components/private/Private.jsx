import React from 'react';
import css from './Private.module.css';
import plane_1x from '../../images/private/plane_1x.png';
import plane_2x from '../../images/private/plane_2x.png';
import saloon_1X from '../../images/private/saloon_1x.png';
import saloon_2X from '../../images/private/saloon_2x.png';
import bg_left from '../../images/private/Rectangle_left.svg';
import bg_right from '../../images/private/Rectangle_right.svg';
import Flight from 'components/flight/Flight';

const Private = () => {
  return (
    <section className={css.private}>
      <div className="container">
        <div id="private" className={css.privateWrapper}>
          <img className={css.backgroundLeft} src={bg_left} alt="background" />
          <img
            className={css.backgroundRight}
            src={bg_right}
            alt="background"
          />
          <h3 className={css.privateTitle}>
            Private Jet for Business & Leisure Purposes
          </h3>
          <ul className={css.privateList}>
            <li className={css.privateItem}>
              <img
                className={css.privateItemImg}
                srcSet={`${plane_1x}1x ${plane_2x}2x`}
                src={plane_1x}
                alt="plane"
              />
              <div className={css.privateBoxText}>
                <p className={css.boxTextTitle}>Private Jet Charter</p>
                <p className={css.boxTextDescription}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors
                </p>
              </div>
            </li>
            <li className={css.privateItem}>
              <div className={css.privateBoxText}>
                <p className={css.boxTextTitle}>Business Jet Charter</p>
                <p className={css.boxTextDescription}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors
                </p>
              </div>
              <img
                className={css.privateItemImg}
                srcSet={`${saloon_1X}1x ${saloon_2X}2x`}
                src={saloon_1X}
                alt="saloon"
              />
            </li>
          </ul>
          <Flight />
        </div>
      </div>
    </section>
  );
};

export default Private;
