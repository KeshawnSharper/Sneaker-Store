import React from 'react'
import cx from 'classnames'

import gStore from '../google-play-badge.png'
import aStore from '../app-store-badge.png'
import smartphone from '../smartphone.png'
import styles from './cards.module.css'

const Cards = () => (
  <div className={styles.cardsWrapper}>
    <div className={cx(styles.box, styles.bgDark, styles.declutter)}>
      <h3>Decluttering equals money</h3>
      <p>Start selling now, it's free</p>
      <button className={styles.cta}>Get Started</button>
    </div>
    <div className={cx(styles.box, styles.bgLight, styles.apps)}>
      <h3 className={styles.heading}>Sell anywhere, anytime</h3>
      <p className={styles.subHeading}>Get our app</p>
      <div className={styles.actions}>
        <button className={cx(styles.btnBadge, styles.btnG)}>
          <img src={gStore} alt="Get it on Goole Play" />
        </button>
        <button className={cx(styles.btnBadge, styles.btnA)}>
          <img src={aStore} alt="Download on the App Store" />
        </button>
      </div>

      <img className={styles.smartphoneImg} src={smartphone} alt="" />
    </div>
  </div>
)

export default Cards
