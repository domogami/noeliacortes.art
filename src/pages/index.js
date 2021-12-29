import React from 'react'
import '../styles/index.css'
import Header from '../components/Header'
import FancyDivider from '../components/FancyDivider'
import Hero from '../components/Hero'
import { faLinkedinIn, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from "../images/15.png"
import img2 from "../images/1.png"
import img3 from "../images/16.png"
import Gallery from "../components/Gallery"
import About from "../components/About"
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FancyDivider id="Gallery" Image={img1} Title="Gallery" />
      <Gallery />
      <FancyDivider id="About" Image={img3} Title="About" />
      <About /> 
      <FancyDivider id="Contact" Image={img2} Title="Contact" /> 
      <section id='Contact'>
        <ul className="icon-list">
          <li class="icon-item">
            <a href="https://www.instagram.com/reanoemator/" className="icon-link">
              <i class="fab fa-instagram">
              <FontAwesomeIcon icon={faInstagram} /> 
              </i>
            </a>
          </li>
          <li className="icon-item">
            <a
              href="https://www.facebook.com/noelia.cortes.5496"
              className="icon-link"
            >
              <i className="fab fa-facebook-f">
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </a>
          </li>
          <li className="icon-item">
            <a
              href="https://www.linkedin.com/in/noelia-c-95b5b711a/"
              className="icon-link"
            >
              <i className="fab fa-linkedin-in">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>
          </li>
          <li className="icon-item">
            <a
              href="mailto:noeliafcortes@gmail.com"
              className="icon-link"
            >
              <i className="fab fa-linkedin-in">
                <FontAwesomeIcon icon={faPaperPlane} />
              </i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}