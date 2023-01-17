import React from 'react'
import homepageStyles from "../styles/HomePage.module.css";
import netflixDevicePile from "./assets/netflix-device-pile.png";

function Card3() {
  return (
    <div className={homepageStyles.homepage__card3Wrapper}>
    <div className={homepageStyles.homepage__card3Info}>
      <h1 className={homepageStyles.homepage__card3Title}>
        Watch everywhere.
      </h1>
      <p className={homepageStyles.homepage__card3Para}>
        Stream unlimited movies and TV shows on your phone, tablet,
        laptop, and TV without paying more.
      </p>
    </div>
    <figure className={homepageStyles.homepage__card3ImgWrapper}>
      <img
        src={netflixDevicePile.src}
        alt=""
        className={homepageStyles.homepage__card3Img}
      />
    </figure>
  </div>
  )
}

export default Card3