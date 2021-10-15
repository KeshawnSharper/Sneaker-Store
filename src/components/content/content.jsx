import React from 'react'

import HeroImage from './hero-image'
import styles from './content.module.css'

import LabelIcon from '../icons/label'
import { Link } from "react-router-dom";
import Header from '../header/header'
localStorage.setItem("component","Content" )
const setNoBrand = () => {
  localStorage.setItem("brand","")
}
const Content = (props) => (
  <div className={styles.content}>
    <Header props={props}/>
    <Hero />
    <Categories />
  </div>
)

const Categories = () => (
  <div>
    <div className={styles.catTitle}>
      <h3>Brands</h3>
      <Link to="/shop" onClick={() => setNoBrand()}>See all</Link>
    </div>
    <div className={styles.catList}>
      {[
        { label: 'Nike', value:"Nike", icon: <img alt="" src="https://img.icons8.com/ios/50/000000/nike.png"/> },
        { label: 'Adidas' ,value:"adidas", icon:<img alt="" src="https://img.icons8.com/windows/50/000000/adidas-trefoil.png"/>},
        { label: 'Jordan',value:"Jordan", icon: <img alt="" src="https://img.icons8.com/ios-filled/50/000000/air-jordan.png"/> },
        { label: 'New balance', value:"New Balance", icon: <img alt="" src="https://logos-download.com/wp-content/uploads/2016/02/New_Balance_black_logo.png" width="50" height="40"/> },
        { label: 'Puma', value:"Puma", icon: <img alt="" src="https://www.logosurfer.com/wp-content/uploads/2018/03/puma-logo_0.png" width="60" height="40"/> },
      ].map(({ label, icon, value }, index) => (
        <Cat label={label} icon={icon} value={value} key={index} />
      ))}
    </div>
  </div>
)

const Cat = ({ label, icon, value }) => (
  <div className={styles.cat} onClick={e => label === 'Other' ? null : localStorage.setItem("brand",value)}>

    <Link to="/shop">
    <span className={styles.catIcon} >{icon}</span>
    <span className={styles.catLabel}>{label}</span>
    </Link>
  </div>
)

const Hero = () => (
  <div className={styles.hero}>
    <div>
      <h3 className={styles.titleTag}>
        <LabelIcon />
        <span>Trending Category</span>
      </h3>
      <h2 className={styles.bigTitle} >Shop</h2>
      <p className={styles.titleLead}>62% more content than last week</p>
      <Link to="/shop"><button className={styles.heroCta}>Explore</button></Link>
    </div>
    <div>
      <HeroImage width="220px" height="auto" />
    </div>
  </div>
)

export default Content
