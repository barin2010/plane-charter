import React from 'react';
import css from './Charter.module.css';

import { chartersData } from 'helper/chartersData';

const Charter = () => {
  return (
    <section clasName={css.charter}>
      <div className="container">
        <div id="Luxury Charters" className={css.charterWrapper}>
          <h3 className={css.charterTitle}>Luxury Charters</h3>
          <ul className={css.charterList}>
            {chartersData.map(charter => {
              return (
                <li key={charter.id} className={css.charterItem}>
                  <img
                    className={css.charterImg}
                    srcSet={`${charter.img.src1x}1x ${charter.img.src2x}2x`}
                    src={charter.img.src1x}
                    alt="plane"
                  />
                  <p className={css.charterText}>{charter.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Charter;
