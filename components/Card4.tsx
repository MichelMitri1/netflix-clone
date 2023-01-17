import React from 'react'
import homepageStyles from "../styles/HomePage.module.css";
import netflixKids from "./assets/netflix-kids.png";

function Card4() {
  return (
    <div className={homepageStyles.homepage__card4Wrapper}>
    <div className={homepageStyles.homepage__card4Info}>
      <h1 className={homepageStyles.homepage__card4Title}>
        Create profiles for kids.
      </h1>
      <p className={homepageStyles.homepage__card4Para}>
        Send kids on adventures with their favorite characters in a space
        made just for them—free with your membership.
      </p>
    </div>
    <figure className={homepageStyles.homepage__card4ImgWrapper}>
      <img
        src={netflixKids.src}
        alt=""
        className={homepageStyles.homepage__card4Img}
      />
    </figure>
  </div>
  )
}

export default Card4