import React from 'react'
import netflixTV from "./assets/netflix-tv.png";
import homepageStyles from "../styles/HomePage.module.css";
import netflixMobile from "./assets/netflix-mobile.jpg";
import netflixDevicePile from "./assets/netflix-device-pile.png";
import netflixKids from "./assets/netflix-kids.png";

function Card1() {
  return (
    <div className={homepageStyles.homepage__card1Wrapper}>
    <div className={homepageStyles.homepage__card1Info}>
      <h1 className={homepageStyles.homepage__card1Title}>
        Enjoy on your TV.
      </h1>
      <p className={homepageStyles.homepage__card1Para}>
        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
        Blu-ray players, and more.
      </p>
    </div>
    <figure className={homepageStyles.homepage__card1ImgWrapper}>
      <img
        src={netflixTV.src}
        alt=""
        className={homepageStyles.homepage__card1Img}
      />
    </figure>
  </div>
  )
}

export default Card1