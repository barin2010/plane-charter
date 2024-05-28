import React from 'react';
import css from './Enjoy.module.css';
import vector_w from '../../images/icons/Vector_white.svg';
import vector_d from '../../images/icons/Vector_dark.svg';
import plane1x from '../../images/charter/plane_1x.png';
import plane2x from '../../images/charter/plane_2x.png';

const Enjoy = () => {
  return (
    <section className={css.enjoy}>
      <div className="container">
        <div id="membership" className={css.enjoyWrapper}>
          <h3 className={css.enjoyTitleOne}>Enjoy our membership</h3>
          <div className={css.enjoyBoxOll}>
            <div className={`${css.enjoyBox} ${css.left}`}>
              <p className={css.enjoyTitle}>Popular</p>
              <p className={css.enjoyDeck}>What You’ll Get</p>
              <ul className={css.enjoyList}>
                <li className={css.enjoyItem}>
                  <img className={css.enjoyIcon} src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>
                    One-time initiation fee $0
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Deposit $50k</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Pricing / rates Dynamic</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Priority fleet access Yes</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>
                    Guaranteed fleet access No
                  </p>
                </li>
              </ul>
              <p className={css.enjoyPrise}>
                <span>$250</span> /month
              </p>
              <button className={css.enjoyBtn}>Choose</button>
            </div>
            <div className={`${css.enjoyBox} ${css.dark}`}>
              <p className={`${css.enjoyTitle} ${css.dark}`}>Business</p>
              <p className={css.enjoyDeck}>What You’ll Get</p>
              <ul className={css.enjoyList}>
                <li className={`${css.enjoyItem} ${css.dark}`}>
                  <img className={css.enjoyIcon} src={vector_d} alt="vector" />

                  <p className={`${css.enjoyItemText} ${css.dark}`}>
                    One-time initiation fee $0
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_d} alt="vector" />

                  <p className={`${css.enjoyItemText} ${css.dark}`}>
                    Deposit $50k
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_d} alt="vector" />

                  <p className={`${css.enjoyItemText} ${css.dark}`}>
                    Pricing / rates Dynamic
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_d} alt="vector" />

                  <p className={`${css.enjoyItemText} ${css.dark}`}>
                    Priority fleet access Yes
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_d} alt="vector" />

                  <p className={`${css.enjoyItemText} ${css.dark}`}>
                    Guaranteed fleet access No
                  </p>
                </li>
              </ul>
              <p className={`${css.enjoyPrise} ${css.dark}`}>
                <span>$480</span> /month
              </p>
              <button className={`${css.enjoyBtn} ${css.dark}`}>Choose</button>
            </div>
            <div className={`${css.enjoyBox} ${css.right}`}>
              <p className={css.enjoyTitle}>Elite</p>
              <p className={css.enjoyDeck}>What You’ll Get</p>
              <ul className={css.enjoyList}>
                <li className={css.enjoyItem}>
                  <img className={css.enjoyIcon} src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>
                    One-time initiation fee $0
                  </p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Deposit $50k</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Pricing / rates Dynamic</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>Priority fleet access Yes</p>
                </li>
                <li className={css.enjoyItem}>
                  <img src={vector_w} alt="vector" />

                  <p className={css.enjoyItemText}>
                    Guaranteed fleet access No
                  </p>
                </li>
              </ul>
              <p className={css.enjoyPrise}>
                <span>$680</span> /month
              </p>
              <button className={css.enjoyBtn}>Choose</button>
            </div>
          </div>
          <img
            className={css.enjoyPlaneBig}
            srcSet={`${plane1x}1x ${plane2x}2x`}
            src={plane1x}
            alt="plane"
          />
        </div>
      </div>
    </section>
  );
};

export default Enjoy;
