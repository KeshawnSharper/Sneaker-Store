import React from 'react'
import './home.scss'
import { Link } from "react-router-dom";

export default function Home(props) {
   
  return (
    <div>
        <header className="bg-image">
          <div className="container">
            <h1>Heir Feet</h1>
            <h2>Simple eCommerce site .</h2>
            <Link to="/home"><button href="#" className="btn btn-transparent">Browse!</button></Link>
          </div>
        </header>
        <section className>
          <div className="container">
            <div className="col-3 text--center">
              <img src={`http://store.storeimages.cdn-apple.com/4044/as-images.apple.com/is/image/AppleInc/aos/published/images/H/D1/HD162/HD162?wid=800&hei=800&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1400749861094`} alt="" className="details-img--ball" />
            </div>
            <div className="col-7 details">
              <h3>Product is so awesome.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus omnis illum, officia. Architecto voluptatibus commodi voluptatem perspiciatis eos possimus, eius at molestias quaerat magnam? Odio qui quos ipsam natus.</p>
            </div>
          </div>
        </section>
        <section className="section--primary">
          <div className="container">
            <div className="col-3 features">
              <i className="fa fa-bolt" />
              <p>
                Product so awesome. Makes you awesome - go buy!
              </p>
            </div>
            <div className="col-3 features">
              <i className="fa fa-bank" />
              <p>
                Product so great. Makes you even greater - go buy now. Super cheap deal!
              </p>
            </div>
            <div className="col-3 features">
              <i className="fa fa-heart" />
              <p>
                Feel lonely? Go buy product and have a friend! 
              </p>
            </div>
          </div>
        </section>
        <section className="section--primary--alt">
          <div className="container">
            <h3>Take Product with you everywhere you go.</h3>
            <p>Product is all you need. Anywhere - ever. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sapiente hic voluptatum quo sunt totam accusamus distinctio minus aliquid quis!</p>
          </div>
        </section>
        <section className="section--primary--light">
          <div className="container">
            <blockquote className="testimonial">
              <p>Love product. So nice! So good! Could not live without!</p>
              <cite>
                Satisfied Customer
              </cite>
            </blockquote>
          </div>
        </section>
        <section className="section--primary--alt bg-image bg-image-2">
          <div className="container text--center">
            <h3>Reasons to buy this product:</h3>
            <div className="col-5 text--left">
              <ul>
                <li>Its the best</li>
                <li>Its awesome</li>
                <li>It makes you happy</li>
                <li>It brings world peace</li>
                <li>Its free!</li>
              </ul>
            </div>
            <div className="col-5 text--left">
              <ul>
                <li>Its the best</li>
                <li>Its awesome</li>
                <li>It makes you happy</li>
                <li>It brings world peace</li>
                <li>Its free!</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text--center">
          <div className="container">
            <h3>Why you still reading?</h3>
            <button className="btn">Order yours now!</button>
          </div>
        </section>
        <footer>
          <div className="container">
            <ul>
              <li><button>Impressum</button></li>
              <li><button>Contact</button></li>
              <li><button>Mainpage</button></li>
            </ul>
            <p>© 2014 dat Company. All rights reserved.</p>
          </div>
        </footer>
      </div>

  )
}